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

//for the swiper slider effect
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    effect: "cube",
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

document.addEventListener("DOMContentLoaded", function () {
  var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    effect: "cards", // Use 'slide' effect for testing
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 800, // Optional: Adjust speed of swiping
  });
});

function showMoreText(button) {
  // Find the next sibling element with the class 'more-text'
  let description = button.closest("tr").nextElementSibling;

  if (description.classList.contains("show")) {
    // Collapse the content
    description.style.opacity = "0";
    setTimeout(() => {
      description.style.display = "none";
    }, 300); // Matches the CSS transition duration
    description.classList.remove("show");
    button.innerHTML = '<i class="bi bi-plus-lg main-branding-color"></i>';
  } else {
    // Expand the content
    description.style.display = "table-row"; // Use 'table-row' for table rows
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        description.style.opacity = "1"; // Transition opacity smoothly
      });
    });

    description.classList.add("show");
    button.innerHTML = '<i class="bi bi-arrow-up main-branding-color"></i>';
  }
}
