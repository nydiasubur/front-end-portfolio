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
