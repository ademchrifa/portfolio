

const init = () => {
  lenis = new Lenis({
    lerp: 0.07,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

init();

gsap.registerPlugin(ScrollTrigger);

gsap.to(".f-e-year", {
  scrollTrigger: {
    trigger: ".f-e-year",
    start: "top+=1000 bottom",
    end: "bottom-=400 top",
    scrub: true,
  },
  fontSize: "50px",
  top: "50px",
  ease: "none",
  left: "50%"
});

gsap.to(".s-e-year", {
  scrollTrigger: {
    trigger: ".s-e-year",
    start: "top+=1000 bottom",
    end: "bottom-=400 top",
    scrub: true,
  },
  fontSize: "50px",
  top: "50px",
  ease: "none",
  left: "50%"
});

gsap.to(".l-e-year", {
  scrollTrigger: {
    trigger: ".l-e-year",
    start: "top+=1000 bottom",
    end: "bottom-=400 top",
    scrub: true,
  },
  fontSize: "50px",
  top: "50px",
  ease: "none",
  left: "50%"
});

gsap.to(".f-f-s-title", {
  scrollTrigger: {
    trigger: ".f-e-year",
    start: "top+=1500 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 50,
});

gsap.to(".f-description", {
  scrollTrigger: {
    trigger: ".f-e-year",
    start: "top+=1500 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 0,
});

gsap.to(".f-s-description", {
  scrollTrigger: {
    trigger: ".f-e-year",
    start: "top+=1950 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 0,
});


gsap.to(".s-f-s-title", {
  scrollTrigger: {
    trigger: ".s-e-year",
    start: "top+=1500 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 50,
});

gsap.to(".s-description", {
  scrollTrigger: {
    trigger: ".s-e-year",
    start: "top+=1500 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 0,
});

gsap.to(".s-s-description", {
  scrollTrigger: {
    trigger: ".s-e-year",
    start: "top+=1950 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 0,
});

gsap.to(".l-f-s-title", {
  scrollTrigger: {
    trigger: ".l-e-year",
    start: "top+=1500 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 50,
});

gsap.to(".l-description", {
  scrollTrigger: {
    trigger: ".l-e-year",
    start: "top+=1500 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 0,
});

gsap.to(".l-s-description", {
  scrollTrigger: {
    trigger: ".l-e-year",
    start: "top+=1950 bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 1,
  x: 0,
});

window.addEventListener('scroll', function () {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;

  const scrollPercentage = (scrollPosition / scrollHeight) * 100;

  document.getElementById('progress-bar').style.height = scrollPercentage + '%';
});

const navImage = document.querySelector('.nav-image');
const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav-item');
let isNavbarVisible = false;

const navbarAnimation = gsap.timeline({ paused: true })
  .to(navbar, {
    top: 0,
    opacity: 1,
    visibility: "visible",
    duration: 1.5,
    ease: "power3.out"
  })
  .fromTo(
    navItems,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.out"
    },
    "-=1"
  );

const navbarReverseAnimation = gsap.timeline({ paused: true })
  .to(navItems, {
    opacity: 0,
    y: 50,
    stagger: -0.2, 
    duration: 1,
    ease: "power3.in"
  })
  .to(navbar, {
    top: "100%",
    opacity: 0,
    visibility: "hidden",
    duration: 1.5,
    ease: "power3.in"
  });

navImage.addEventListener('click', () => {
  if (!isNavbarVisible) {
    navbarAnimation.play(); 
  } else {
    navbarReverseAnimation.play(); 
  }
  isNavbarVisible = !isNavbarVisible; 
});
