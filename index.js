const toggleBtn = document.querySelector('[data-toggle="slidder"]');
const slidder = document.querySelector(".slidder");

let timeout; // Store timeout reference

const activateSlidder = () => {
  clearTimeout(timeout); // Prevent it from closing while hovering
  slidder.classList.add("active");
};

const deactivateSlidder = () => {
  timeout = setTimeout(() => {
    if (!toggleBtn.matches(":hover") && !slidder.matches(":hover")) {
      slidder.classList.remove("active");
    }
  }, 100);
};

// Show slider when mouse enters toggle button or slider
toggleBtn.addEventListener("mouseenter", activateSlidder);
slidder.addEventListener("mouseenter", activateSlidder);

// Hide slider only if mouse leaves both toggle button and slider
toggleBtn.addEventListener("mouseleave", deactivateSlidder);
slidder.addEventListener("mouseleave", deactivateSlidder);


const images = document.querySelectorAll(".img-fluid");
// console.log(images);

images.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    e.currentTarget.classList.add("hoverImage");
    e.currentTarget.classList.remove("hoverImageInactive");
  });
});

images.forEach((img) => {
  img.addEventListener("mouseleave", (e) => {
    e.currentTarget.classList.remove("hoverImage");
    e.currentTarget.classList.add("hoverImageInactive");
  });
});

//*****************     gsap  ******************/

gsap.registerPlugin(ScrollTrigger);

let time = gsap.timeline();


time.from(".about_img",{
  x:-60,
  opacity: 0,
  delay: 0.2,
  duration: 0.4,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".about_img",
    start: "top 70%",
    end: "top 0",
    scrub: 1,
  },

})

time.from(".about_content",{
  x:70,
  opacity: 0,
  delay: 0.2,
  duration: 0.4,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".about_content",
    start: "top 70%",
    end: "top 0",
    scrub: 1,
  },

})


time.from(".categorygsap", {
  y: 60,
  opacity: 0,
  delay: 0.6,
  duration: 0.7,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".categorygsap",
    start: "top 70%",
    end: "top 0",
    scrub: 1,
  },
});

time.from(".categorygsapcs", {
  x: 70,
  opacity: 0,
  delay: 0.6,
  duration: 0.7,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".categorygsap",
    start: "top 60%",
    end: "top 0",
    scrub: 1,
  },
});

time.from(".coursegsap", {
  y: 60,
  opacity: 0,
  delay: 0.6,
  duration: 0.7,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".coursegsap",
    start: "top 70%",
    end: "top 0",
    scrub: 1,
  },
});

time.from(".coursegsap1", {
  x: -70,
  opacity: 0,
  delay: 0.6,
  duration: 0.7,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".coursegsap1",
    start: "top 70%",
    end: "top 0",
    scrub: 1,
  },
});

time.from(".coursegsap3", {
  x: 70,
  opacity: 0,
  delay: 0.6,
  duration: 0.7,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".coursegsap3",
    start: "top 70%",
    end: "top 0",
    scrub: 1,
  },
});

//card gsap
