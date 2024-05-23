document.addEventListener("DOMContentLoaded", function () {
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
});
