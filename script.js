//hethy bech naamlou smooth scrolling

const init = () => {
    lenis = new Lenis({
        lerp: 0.04,
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
};

init();

let lastScrollTop = 0;

// hethy bch na3mlou scroll up/down navbar animation 
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {

        gsap.to("nav", {
            y: "-125px",
            duration: 0.7,
            ease: "power2.out",
        });

        gsap.to(".logo", {
            y: "-125px",
            duration: 0.7,
            ease: "power2.out",
        });


    } else {
        gsap.to("nav", {
            y: "0px",
            duration: 0.7,
            ease: "power2.out",
        });

        gsap.to(".logo", {
            y: "0px",
            duration: 0.7,
            ease: "power2.out",
        });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);


document.getElementById("quiz").addEventListener("click",()=>{
    window.location.href = "pages/quiz/index.html";
});

document.getElementById("experiences").addEventListener("click",()=>{
    window.location.href = "pages/experiences/index.html";
});

//hethy bch naamlou animation lel loading screen o el elements eli bch isirlhom load baad
const timeline = gsap.timeline({
    onComplete: () => {
        document.getElementsByClassName("main")[0].style.overflowY = "auto";
        document.body.style.overflowY = "auto";
    }
})
    .to(".logo", {
        opacity: 1,
        duration: 1.8,
        ease: "power2.inOut",
    })
    .to(".loading-screen .name", {
        opacity: 1,
        duration: 1.8,
        ease: "power2.inOut",
    }, "-=1.5")

    .to(".loading-screen", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            document.querySelector(".loading-screen").style.display = "none";
        }
    })
    

    .to(".loading-screen .name", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
    }, "-=1.5")

    .to(".logo", {
        left: "69px",
        top: "58px",
        duration: 1,
        ease: "power2.inOut",
    }, "-=0.5")

    .to(".main", {
        display: "flex",
        duration: 0,
        onStart: () => {
            document.querySelector(".main").style.display = "flex";
        }
    })

    .to("nav", {
        borderBottom: "2px solid white",
        duration: 0.5,
        opacity: 1,
        ease: "power2.inOut",
    }, "-=0.5")

    .to(".f-nav", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
    }, "-=0.5")

    .to(".s-nav", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
    }, "-=0.5")

    .to(".l-nav", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
    }, "-=0.5")


    .to(".creative-text-box", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
    }, "-=0.5")

    .to(".motivated-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
    }, "-=0.5")

    .to(".about-me-h-s", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
    }, "-=0.5")

gsap.timeline({ repeat: -1, repeatDelay: 1 })
    .to(".square.top-left", {
        scale: 1.7,
        duration: 2,
        ease: "power2.out",
    })
    .to(".square.top-left", {
        scale: 1,
        duration: 2,
        ease: "power2.in",
    }, "-=0.5") 

    .to(".square.top-right", {
        opacity: 1,
        scale: 1.7,
        duration: 2,
        ease: "power2.out",
    }, "-=0.5") 

    .to(".square.top-right", {
        scale: 1,
        duration: 2,
        ease: "power2.in",
    }, "-=0.5")

    .to(".square.bottom-right", {
        scale: 1.7,
        duration: 2,
        ease: "power2.out",
    }, "-=0.5")

    .to(".square.bottom-right", {
        scale: 1,
        duration: 2,
        ease: "power2.in",
    }, "-=0.5")

    .to(".square.bottom-left", {
        opacity: 1,
        scale: 1.7,
        duration: 2,
        ease: "power2.out",
    }, "-=0.5")

    .to(".square.bottom-left", {
        scale: 1,
        duration: 2,
        ease: "power2.in",
    }, "-=0.5");


const folderOne = document.querySelector(".folder-one");
const images = document.querySelectorAll(".l-p-images-c img");
const file1Image = document.querySelector(".folder-one-i");
const file3Image = document.querySelector(".folder-two .folder-one-image");
const lProjectText = document.querySelector(".last-project-text");
const sideImages = document.querySelectorAll(".l-p-c-images-l-s");

const hoverTimeline = gsap.timeline({ paused: true });

hoverTimeline
    .to(images[0], {
        x: 20,
        y: -100,
        duration: 0.5,
        ease: "power2.out"
    }, 0)
    .to(images[1], {
        y: -160,
        duration: 0.5,
        ease: "power2.out"
    }, 0)
    .to(images[2], {
        x: 650,
        y: -300,
        duration: 0.5,
        ease: "power2.out"
    }, 0)
    .to(file1Image, {
        rotate: -5,
        duration: 0.5,
        ease: "power2.out"
    }, 0)
    .to(file3Image, {
        rotate: -5,
        duration: 0.5,
        ease: "power2.out"
    }, 0)
    .to(lProjectText, {
        rotate: -5,
        duration: 0.5,
        ease: "power2.out"
    }, 0);

const sideImagesTimeline = gsap.timeline({ paused: true });

sideImagesTimeline
    .to(sideImages, {
        y: -50,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    })
    .to(sideImages, {
        rotate: 15,
        duration : 0.2,
        ease: "power2.in"
    });



folderOne.addEventListener("mouseenter", () => {
    hoverTimeline.play();
    sideImagesTimeline.play()
});

folderOne.addEventListener("mouseleave", () => {
    hoverTimeline.reverse();
    sideImagesTimeline.reverse()
});


const marquee = document.querySelector(".marquee");
const secondMarquee = document.querySelector(".second-marque-section")

const content = marquee.innerHTML;
marquee.innerHTML += content;
secondMarquee.innerHTML += content;


gsap.to(".marquee", {
  x: () => -marquee.offsetWidth / 2, 
  duration: 70, 
  ease: "none", 
  repeat: -1, 
});

gsap.to(".second-marque-section", {
    x: () => -marquee.offsetWidth / 2, 
    duration: 70, 
    ease: "none", 
    repeat: -1, 
  });
  

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".work-container", {
    scrollTrigger: {
      trigger: ".work-container",
      start: "top+=400 center", 
      end: "bottom+=4000 center",
      toggleActions: "play reverse play reverse",
    },
    backgroundColor: "#e0e0dc", 
    duration: 0.3
  });

  gsap.to(".w-c-number-one", {
    scrollTrigger: {
      trigger: ".w-c-number-one",
      start: "top+=400 center", 
      end: "bottom+=600 center",
      toggleActions: "play reverse play reverse",
    },
    opacity: "1", 
    duration: 0.3
  });

  gsap.to(".w-c-number-two", {
    scrollTrigger: {
      trigger: ".w-c-r-s-second-project-container",
      start: "top+=350 center", 
      end: "bottom+=400 center",
      toggleActions: "play reverse play reverse",
    },
    opacity: "1", 
    duration: 0.3
  });

  gsap.to(".w-c-number-three", {
    scrollTrigger: {
      trigger: ".w-c-r-s-last-project-container",
      start: "top+=350 center", 
      end: "bottom+=500 center",
      toggleActions: "play reverse play reverse",
    },
    opacity: "1", 
    duration: 0.3
  });

  
  
  gsap.to(".w-c-r-s-first-project-container" ,{
    scrollTrigger :{
        trigger : ".w-c-r-s-first-project-container",
        start: "top+=500 center", 
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    opacity : 1,
    duration : 0.4
  })

  gsap.to(".w-c-r-s-second-project-container" ,{
    scrollTrigger :{
        trigger : ".w-c-r-s-second-project-container",
        start: "top+=50 center", 
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    opacity : 1,
    duration : 0.4
  })

  gsap.to(".w-c-r-s-last-project-container" ,{
    scrollTrigger :{
        trigger : ".w-c-r-s-last-project-container",
        start: "top+=50 center", 
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    },
    opacity : 1,
    duration : 0.4
  })

  
  const folderImage = document.querySelector(".folder-image");
  const navElements = document.querySelector(".nav-elements");
  const navItems = document.querySelectorAll(".nav-element");

  let isNavVisible = false;

  folderImage.addEventListener("click", () => {
      if (!isNavVisible) {
          gsap.to(folderImage, { rotate: 180, duration: 0.5 });
          gsap.to(navElements, { display: "flex", opacity: 1, duration: 0.2 });
          gsap.fromTo(
              navItems,
              { opacity: 0, y: -20 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
          );
      } else {
          gsap.to(folderImage, { rotate: 0, duration: 0.5 });
          gsap.to(navItems, { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 });
          gsap.to(navElements, {
              opacity: 0,
              duration: 0.2,
              onComplete: () => (navElements.style.display = "none"),
          });
      }
      isNavVisible = !isNavVisible; 
  });
  
  
  function updateTime() {
    const timeSection = document.getElementById('timeSection');
    const now = new Date();

    const timezoneOffset = now.getTimezoneOffset() / -60;

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(now);

    const timezoneString = `GMT${timezoneOffset >= 0 ? '+' : ''}${timezoneOffset}:00`;
    timeSection.textContent = `${formattedTime} (${timezoneString})`;
}

updateTime();
setInterval(updateTime, 10000);

document.getElementById("copyEmail").addEventListener("click", () => {
    const email = "ademchrifa12@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            document.getElementById("copyEmail").textContent = "Copied."
        })
        .catch(err => {
            console.error("Failed to copy email: ", err);
        });
});

document.querySelector('.send-button-contact').addEventListener('click', () => {
    const name = document.querySelector('.input-name-email[type="text"]').value.trim();
    const email = document.querySelector('.input-name-email[type="email"]').value.trim();
    const message = document.querySelector('.message-contact').value.trim();
    const budget = document.querySelector('input[name="budget"]:checked')?.value;

    if (!name || !email || !budget) {
        alert('Please fill in all required fields.');
        return;
    }

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:support@example.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
});