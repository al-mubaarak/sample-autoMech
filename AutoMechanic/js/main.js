function toggleSidebar(){
            document.getElementById("menubar").classList.toggle("change");
            document.getElementById('navigation').classList.toggle('change');
            document.getElementById('burger-bg').classList.toggle('change-bg');
        }


let firstPaneTl = gsap.timeline({scrollTrigger: {
    trigger: ".first-pane",
    start: "top center",
    toggleActions: "play none none none"
}});

    firstPaneTl.from(".garage", {
        opacity: 0,
        duration: 1,
        xPercent: -100
    });
    firstPaneTl.from(".frepairs", {
        opacity: 0,
        duration: 1,
        xPercent: 100
    }, "<");

let secondPaneTl = gsap.timeline({scrollTrigger: {
    trigger: ".second-pane",
    start: "top center",
    toggleActions: "play none none none"
}});

    secondPaneTl.from(".repairs-1", {
        opacity: 0,
        duration: 1,
        xPercent: -100
    });
    secondPaneTl.from(".problem-fix", {
        opacity: 0,
        duration: 1,
        xPercent: 100
    }, "<");

let thirdPaneTl = gsap.timeline({scrollTrigger: {
    trigger: ".third-pane",
    start: "top center",
    toggleActions: "play none none none"
}});

    thirdPaneTl.from(".bye-bye", {
        opacity: 0,
        duration: 1,
        xPercent: -100
    });
    thirdPaneTl.from(".trepairs", {
        opacity: 0,
        duration: 1,
        xPercent: 100
    }, "<");
