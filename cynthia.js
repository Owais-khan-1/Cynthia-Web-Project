const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function menu() {
  let menu = document.querySelector("#menu");
  let ul = document.querySelector("#nav-inner-ul");
  let windowWidth = window.innerWidth;

  if (windowWidth > 600) {
    menu.addEventListener("click", function () {
      gsap.to(menu, { y: 22 });
      gsap.to(ul, { y: 22 });
    });
    if (windowWidth>= 1440) {
      menu.addEventListener("click", function () {
        gsap.to(menu, { y: 30 });
        gsap.to(ul, { y: 30 });
      });
    }
  } else {
    let navUl = document.querySelector("#nav-inner-ul");
    navUl.style.display = "none";
    let extra = document.querySelector("#extra");
    extra.style.display = "flex";
    let slider = document.querySelector("#mobile-slide");

    extra.addEventListener("click", function () {
      gsap.to(slider, {
        display: "inline",
        y: 950,
      });

 document.body.style.overflow = "hidden";
  lenis.stop();
      let slideNav = document.querySelector("#slide-nav");
      let slideMenu = document.querySelectorAll("#slide-nav-menu li");
      let slideFoot = document.querySelector("#slide-foot");

      let timel = gsap.timeline();
      timel.from(slideNav, { opacity: 0, delay: 0.5 });
      slideMenu.forEach(function (s) {
        timel.from(s, { opacity: 0, stagger: 0.5, duration: 0.3 });
      });
      timel.from(slideFoot, { opacity: 0 });
    });
  }

  let slide = document.querySelector("#mobile-slide");
  let close = document.querySelector("#close");

  close.addEventListener("click", function () {
    gsap.to(slide, { y: "-100vh" });
document.body.style.overflow = "auto";
  lenis.start();
  });
}

menu();

let ele = document.querySelectorAll(".page2-ele");
function Ani() {
  ele.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let h1 = event.currentTarget.querySelector("h1");
      gsap.to(h1, {
        x: "4vw",
        opacity: 0.4,
        duration: 0.8,
        ease: "power2.out",
      });
    });
    e.addEventListener("mouseleave", function () {
      let h1 = event.currentTarget.querySelector("h1");
      gsap.to(h1, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    e.addEventListener("mouseenter", function () {
      let h6 = event.currentTarget.querySelector(".page2-ele h6");
      gsap.to(h6, {
        opacity: 0.4,
        ease: "power2.out",
      });
    });
    e.addEventListener("mouseleave", function () {
      let h6 = event.currentTarget.querySelector(".page2-ele h6");
      gsap.to(h6, {
        opacity: 1,
        ease: "power2.out",
      });
    });
  });
}
Ani();


let miniCircle = document.querySelector("#move-circle");
miniCircle.innerHTML = "";

function pic() {
  let elements = document.querySelectorAll(".page2-ele");

  elements.forEach(function (e) {
    let image = e.querySelector("img");

    gsap.set(image, { xPercent: -50, yPercent: -25 });
    // ye line origin center sy set krygi image ka 

    e.addEventListener("mouseenter", function () {
      gsap.to(image, {
        opacity: 1,
        ease: "power1.out",
      });
      let miniCircle = document.querySelector("#move-circle");
      gsap.to(miniCircle, {
        scale: 5.5,
        mixBlendMode: "unset",
        opacity: 0.9,
      });
      miniCircle.innerHTML = "<h6>VIEW</h6>";
    });

    e.addEventListener("mousemove", function (dets) {
      let bounds = e.getBoundingClientRect();
      let relX = dets.clientX - bounds.left;
      let relY = dets.clientY - bounds.top;

      gsap.to(image, {
        x: relX,
        y: relY,
        opacity: 1,
        rotate: gsap.utils.clamp(-15, 15, dets.movementX),
      });
    });

    e.addEventListener("mouseleave", function () {
      gsap.to(image, {
        opacity: 0,
        ease: "power1.out",
      });
      let miniCircle = document.querySelector("#move-circle");
      gsap.to(miniCircle, {
        scale: 1,
        mixBlendMode: "difference",
        opacity: 1,
      });
      miniCircle.innerHTML = "";
    });
  });
}
pic();

function moveCircle() {
  let circ = document.querySelector("#move-circle");

  gsap.set(circ, { xPercent: -50, yPercent: -50 });
  // ye line circle ka origin set kr rhi hy center sy 

  window.addEventListener("mousemove", function (m) {
    gsap.to(circ, {
      x: m.clientX ,
      y: m.clientY ,
      duration: 0.4,
      
    });
  });
}
moveCircle();

function anime() {
  let logo = document.querySelector("#logo");
  let tl = gsap.timeline();
  tl.from(logo, {
    y: 40,
    duration: 0.5,
  });
    if(window.innerWidth > 600){
      let men = document.querySelector("#menu");
      tl.from(men, {
        y: 40,
        duration: 0.5,
      });
    }
    else{
      let extra = document.querySelector("#extra");
      tl.from(extra,{
        y:40,
        duration: 0.5,
      })
    }
  let h1 = document.querySelector("#hero-head h1");
  tl.from(h1, {
    y: "30vw",
    duration: 0.3,
  });
  let h2 = document.querySelector("#main-head h1");
  tl.from(h2, {
    y: "30vw",
    duration: 0.3,
  });
  let h3 = document.querySelector("#mini h6");
  tl.from(h3, {
    y: -40,
    duration: 0.3,
  });
  let mid = document.querySelectorAll(".mid h6");
  mid.forEach(function (h) {
    tl.from(h, {
      y: -40,
      duration: 0.3,
    });
  });
  let bot = document.querySelector("#first-bottom");
  tl.from(bot, {
    opacity: 0,
    duration: 0.3,
  });
}
anime();

function p2() {
  let page2 = document.querySelector("#page-2");
  gsap.from(page2, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: page2,
      start: "top 750px",
      // markers: true,
    },
  });
}
p2();

function para() {
  let picture = document.querySelector("#t-f-div img");
  let page3 = document.querySelector("#page-3");
  gsap.from(picture, {
    opacity: 0,
    scrollTrigger: {
      trigger: page3,
      start: "top 450px",
      // markers: true,
    },
  });
  let Tpara = document.querySelector("#t-s-div");
  gsap.from(Tpara, {
    opcaity: 0,
    y: 80,
    scrollTrigger: {
      trigger: page3,
      start: "top 450px",
      // markers: true,
    },
  });
}
para();
