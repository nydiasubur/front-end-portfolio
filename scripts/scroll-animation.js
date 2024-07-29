//animation code for down up y axis animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in-y-position");
      } else {
        entry.target.classList.remove("animate-in-y-position"); // Delay to match the animation duration
      }
    });
  },
  { threshold: 0.1 }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((hiddenElement) => observer.observe(hiddenElement));

//animation code for left to right x axis animation
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in-x-position");
      } else {
        entry.target.classList.remove("animate-in-x-position"); // Delay to match the animation duration
      }
    });
  },
  { threshold: 0.1 }
);

const hiddenElementsInXAxis = document.querySelectorAll(
  ".hiddenElements-x-axis"
);
hiddenElementsInXAxis.forEach((hiddenElement2) =>
  observer2.observe(hiddenElement2)
);

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Ensure pagination is clickable
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Ensure swiping works
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    // Optional: Adjust the speed of swiping
    speed: 800,
  });
});
