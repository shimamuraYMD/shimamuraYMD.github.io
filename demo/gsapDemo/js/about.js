gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(SplitText);

// -----------------------------------------------------------------------------------//
//			ripple-03
// -----------------------------------------------------------------------------------//
gsap.set(".ripple-03 span", { scale: 0, autoAlpha: 0});

gsap.timeline({
	scrollTrigger: {
		trigger: ".ripple-03",
		start: "top 20%",
    	toggleActions: "play none none none",
	},
	defaults: { ease: "expo.out" }
})
.to(".ripple-03 span:nth-child(1)", { scale: 45, autoAlpha: 1, duration: 0.8 }, 0)
.to(".ripple-03 span:nth-child(2)", { scale: 45, autoAlpha: 1, duration: 0.4 }, "-=0.4")
.to(".ripple-03 span:nth-child(1)", { autoAlpha: 0 })
.to(".ripple-03 span:nth-child(2)", { autoAlpha: 0,
	onComplete: () => {
    	document.querySelector(".ripple-03").style.display = "none"
	}
}, "<=0.1")


// -----------------------------------------------------------------------------------//
//			radial-01
// -----------------------------------------------------------------------------------//

// 幻想的・やわらか・上品
gsap.to(".radial-01 .bg-01", {
	opacity: 0,
	duration: 1.25,
	ease: "sine.inOut",
	repeat: -1,
	yoyo: true,
	repeatDelay: 2,
});

gsap.to(".radial-01 .bg-02", {
	opacity: 0,
	duration: 2,
	ease: "sine.inOut",
	repeat: -1,
	delelay: 0.5,
	yoyo: true,
	repeatDelay: 1,
});

// -----------------------------------------------------------------------------------//
//			shape-03
// -----------------------------------------------------------------------------------//


document.querySelectorAll(".shape-03 span").forEach((el, i) => {
	gsap.to(el, {
		y: -30,
		opacity: 1,
		duration: gsap.utils.random(3, 5),
		repeat: -1,
		repeatDelay: gsap.utils.random(0.5, 2), // ← ここ追加！
		yoyo: true,
		ease: "sine.inOut",
		delay: Math.random() * 2.5
	});
});
// -----------------------------------------------------------------------------------//
//			text-rotation-03
// -----------------------------------------------------------------------------------//
const textRotation03 = {
  front: document.querySelector(".text-rotation-03 .text-front"),
  back: document.querySelector(".text-rotation-03 .text-back")
};

// span 2個分の幅（1個分でOK。2個で自然ループになる）
const spanWidth = textRotation03.front.querySelector("span").offsetWidth;

gsap.set([textRotation03.front, textRotation03.back], {
    x: 0,

});

gsap.to([textRotation03.front, textRotation03.back], {
    x: -spanWidth,
    duration: 16,
    ease: "linear",
    repeat: -1
});





// -----------------------------------------------------------------------------------//
//			flip-wrapper-02
// -----------------------------------------------------------------------------------//



const flipImage02Tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut", duration: 1.2 } });

// 初期状態：全て clipPath FULL（全表示）
gsap.set(".flip-wrapper-02 .img", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
});


// 1枚目を消す（→2枚目が見える）
flipImage02Tl.to(".flip-wrapper-02 .img-01", {
  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
}, "+=1.5");

// 2枚目を消す（→3枚目が見える）
flipImage02Tl.to(".flip-wrapper-02 .img-02", {
  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
}, "+=2");

// ② img-01を一時的に最前面へ
flipImage02Tl.set(".flip-wrapper-02 .img-01", {
  zIndex: 1
}, "<"); // 同タイミングで


// 3番目を消す前に、1番目を復活
flipImage02Tl.set(".flip-wrapper-02 .img-01", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
}, "+=1.8");

// 3番目を消す（→1番目が見える）
flipImage02Tl.to(".flip-wrapper-02 .img-03", {
  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
}, "+=0.2");

// ③ z-indexを戻す（見た目に影響ないタイミングでOK）
flipImage02Tl.set(".flip-wrapper-02 .img-01", {
  zIndex: 4
});

// 全部戻す（初期状態）
flipImage02Tl.set(".flip-wrapper-02 .img", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
}, "+=1.5");


// -----------------------------------------------------------------------------------//
//			text-exchange-03
// -----------------------------------------------------------------------------------//

gsap.set(".text-exchange-03 .exchange", { autoAlpha: 1 })
gsap.set(".text-exchange-03 .exchange .item", { transformOrigin:"50% 50% -50%" })

let textExchange03 = gsap.timeline({ repeat: -1 })
textExchange03
.from(".text-exchange-03 .exchange .item", { rotationX:-90, opacity:0, stagger: 1.2 })
.to(".text-exchange-03 .exchange .item", { rotationX:90, opacity:0, stagger: 1.2 }, 1.2 )
