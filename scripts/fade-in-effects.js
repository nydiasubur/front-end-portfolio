/**document.addEventListener("DOMContentLoaded", function () {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    var fadeInElements = document.getElementsByClassName("fade-in-element");
    for (var i = 0; i < fadeInElements.length; i++) {
      if (isInViewport(fadeInElements[i])) {
        fadeInElements[i].classList.add("fade-in-effect");
      }
    }
  }

  // Initial check when the page loads
  handleScroll();

  // Event listener for scroll event
  window.addEventListener("scroll", handleScroll);
});**/

//animation code for down up y axis animation
const observerF = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // Delay to match the animation duration
      }
    });
  },
  { threshold: 0.1 }
);

const fadeInElements = document.querySelectorAll(".fade-in-element");
fadeInElements.forEach((fadeInElement) => observerF.observe(fadeInElement));
