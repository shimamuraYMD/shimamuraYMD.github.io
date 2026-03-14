gsap.registerPlugin(ScrollTrigger);

// -----------------------------------------------------------------------------------//
//			ripple-01
// -----------------------------------------------------------------------------------//

gsap.set(".ripple-01 span", { scale: 0, autoAlpha: 0 });
gsap.to(".ripple-01 span", {
  scale: 30, // ← 画面全体を覆うサイズに応じて調整
  autoAlpha: 1,
  duration: 1.0,
  ease: "expo.out", // ← 波紋らしい広がり
  scrollTrigger: {
    trigger: ".ripple-01",
    start: "top 20%",
    toggleActions: "play none none none",
    once: false, // ← 繰り返し有効
  },
});

// -----------------------------------------------------------------------------------//
//			ripple-02
// -----------------------------------------------------------------------------------//

gsap.set(".ripple-02 span", { scale: 0, autoAlpha: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".ripple-02",
      start: "top 20%",
      toggleActions: "play none none none",
    },
    defaults: { ease: "expo.out" },
  })
  .to(
    ".ripple-02 span:nth-child(1)",
    { scale: 25, autoAlpha: 1, duration: 0.8 },
    0,
  )
  .to(
    ".ripple-02 span:nth-child(2)",
    { scale: 25, autoAlpha: 1, duration: 0.4 },
    "+=0.1",
  )
  .to(".ripple-02 span:nth-child(1)", { autoAlpha: 0 })
  .to(".ripple-02 span:nth-child(2)", { autoAlpha: 0 }, "<=0.1");

// -----------------------------------------------------------------------------------//
//			ripple-03
// -----------------------------------------------------------------------------------//
gsap.set(".ripple-03 span", { scale: 0, autoAlpha: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".ripple-03",
      start: "top 20%",
      toggleActions: "play none none none",
    },
    defaults: { ease: "expo.out" },
  })
  .to(
    ".ripple-03 span:nth-child(1)",
    { scale: 45, autoAlpha: 1, duration: 0.8 },
    0,
  )
  .to(
    ".ripple-03 span:nth-child(2)",
    { scale: 45, autoAlpha: 1, duration: 0.4 },
    "-=0.4",
  )
  .to(".ripple-03 span:nth-child(1)", { autoAlpha: 0 })
  .to(".ripple-03 span:nth-child(2)", { autoAlpha: 0 }, "<=0.1");
