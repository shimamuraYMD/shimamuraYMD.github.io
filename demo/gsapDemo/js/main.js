gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// -----------------------------------------------------------------------------------//
//			shutter
// -----------------------------------------------------------------------------------//

const shutter04Tl = gsap.timeline();

gsap.set(".shutter-04 .overlay-first", { xPercent: 100, autoAlpha: 0 });
gsap.set(".shutter-04 .overlay-after", { xPercent: 100, autoAlpha: 0 });

// 先行バー（overlay-first）が右から左へ流れて消える
shutter04Tl
  .to(".shutter-04 .overlay-first", {
    xPercent: 0,
    autoAlpha: 1,
    duration: 0.5,
    ease: "power2.out",
  })
  // 後続（overlay-after）が少し遅れてスライドイン
  .to(
    ".shutter-04 .overlay-after",
    { xPercent: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" },
    "-=0.2",
  ) // ← 0.3秒ディレイ風に少しかぶせる
  .to([".shutter-04 .overlay-first", ".shutter-04 .overlay-after"], {
    scale: 0,
    autoAlpha: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      document.querySelector(".shutter-04").style.display = "none";
    },
  });

// -----------------------------------------------------------------------------------//
//			shape-02
// -----------------------------------------------------------------------------------//

// 初回：下からフェードイン＋stagger
gsap.from(".shape-02 span", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: {
    each: 0.15,
    from: "random",
  },
});


// -----------------------------------------------------------------------------------//
//			text-appear-02
// -----------------------------------------------------------------------------------//

function animateTextAppear02() {
  // ターゲット
  const title = document.querySelector(".demo-02 h2");

  // SplitTextで文字単位に分割
  const splitTitle = new SplitText(title, { type: "chars" });

  // アニメーション（タイトル）

  gsap.from(splitTitle.chars, {
    y: 20,
    opacity: 0,
    stagger: 0.03,
    duration: 0.8,
    ease: "power2.out",
    // scrollTrigger: {
    // 	trigger: title,
    // 	start: "top 30%",
    // 	toggleActions: "play none none reverse",
    // }
    delay: 2.0,
  });

  // アニメーション（本文）
  const paragraphs = document.querySelectorAll(".demo-02 .sentence p");

  paragraphs.forEach((paragraph) => {
    const split = new SplitText(paragraph, { type: "chars" });
    gsap.from(split.chars, {
      y: 20,
      opacity: 0,
      stagger: 0.01,
      duration: 0.6,
      ease: "power2.out",
      delay: 2.6,
    });
  });
}

// 実行
animateTextAppear02();
