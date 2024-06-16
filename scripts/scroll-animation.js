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
