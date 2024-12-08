document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const rotationTlOne = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardOne",
            start: "top+=500 center",
            end: "top+=1300 center",
            scrub: true,
            markers: false
        }
    });

    rotationTlOne.to("#skillsCardOne", {
        rotationY: 180,
        ease: "power1.inOut"
    });

    const secondTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardOne",
            start: "top+=1700 center",
            end: "top+=2300 center",
            scrub: true,
            markers: false
        }
    });

    secondTimeline.to("#fCardBack", {
        y: "-200%",
        x: "-50%",
        rotation: 45,
        scale: 0.5,
        opacity: 0,
        ease: "power2.in"
    });



    ////////////////////////////////////////////////



    const rotationTlTwo = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardTwo",
            start: "top+=2500 center",
            end: "top+=3300 center",
            scrub: true,
            markers: false
        }
    });

    rotationTlTwo.to("#skillsCardTwo", {
        rotationY: 180,
        ease: "power1.inOut"
    });

    const secondTimelineTwo = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardOne",
            start: "top+=3700 center",
            end: "top+=4300 center",
            scrub: true,
            markers: false
        }
    });

    secondTimelineTwo.to("#sCardBack", {
        x: "-55%",
        y: "90%",
        rotation: 45,
        scale: 0.5,
        opacity: 0,
        ease: "power2.in"
    });


    ///////////////////////////////////////////////////

    const rotationTlThree = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardThree",
            start: "top+=4500 center",
            end: "top+=5300 center",
            scrub: true,
            markers: false
        }
    });



    rotationTlThree.to("#skillsCardThree", {
        rotationY: 180,
        ease: "power1.inOut"
    });

    const secondTimelineThree = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardOne",
            start: "top+=5700 center",
            end: "top+=6300 center",
            scrub: true,
            markers: false
        }
    });

    secondTimelineThree.to("#tCardBack", {
        x: "200%",
        y: "-100%",
        rotation: 45,
        scale: 0.5,
        opacity: 0,
        ease: "power2.in"
    });

    ////////////////////////////////////////////////


    const rotationTlFour = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardFour",
            start: "top+=6500 center",
            end: "top+=7300 center",
            scrub: true,
            markers: false
        }
    });

    rotationTlFour.to("#skillsCardFour", {
        rotationY: 180,
        ease: "power1.inOut"
    });

    const secondTimelineLast = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardOne",
            start: "top+=7700 center",
            end: "top+=8600 center",
            scrub: true,
            markers: false
        }
    });

    secondTimelineLast.to("#lCardBackContent", {
        opacity: 0, 
        duration: 1,
        ease: "power2.inOut"
    }).to("#skillsCardFour", {
        scale: 10,
        ease: "power1.inOut"
    }).to("body", {
        backgroundColor: "#333",
        duration: 2
    });

    ///////////////////////////////////////////
    const iitTimeLine = gsap.timeline({
        scrollTrigger: {
            trigger: "#skillsCardOne",
            start: "top+=8500 center",
            end: "top+=1000 center",
            scrub: true,
            markers: false
        }
    });

    iitTimeLine.to(".iit-section", {
        opacity : 1,

    });
        

    //////////////////////////////////////////

    const floatingTlOne = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true
    });

    floatingTlOne.to("#skillsCardOne", {
        y: "-20px",
        rotation: 1,
        duration: 1.5,
        ease: "power1.inOut"
    });

    const floatingTlTwo = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true
    });

    floatingTlTwo.to("#skillsCardTwo", {
        y: "-20px",
        rotation: 1,
        duration: 1.5,
        ease: "power1.inOut"
    });

    const floatingTlThree = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true
    });

    floatingTlThree.to("#skillsCardThree", {
        y: "-20px",
        rotation: 1,
        duration: 1.5,
        ease: "power1.inOut"
    });

    const floatingTlFour = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true
    });

    floatingTlFour.to("#skillsCardFour", {
        y: "-20px",
        rotation: 1,
        duration: 1.5,
        ease: "power1.inOut"
    });

    let scrollTimeout;
    let isScrolling = false;

    window.addEventListener('scroll', () => {
        floatingTlOne.pause();
        floatingTlTwo.pause();
        floatingTlThree.pause();
        floatingTlFour.pause();

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            if (!isScrolling) {
                floatingTlOne.play();
                floatingTlTwo.play();
                floatingTlThree.play();
                floatingTlFour.play();
            }
        }, 50); 
    });
});