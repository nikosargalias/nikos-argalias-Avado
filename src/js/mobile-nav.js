import mediaQ from "./media-query";

window.addEventListener("DOMContentLoaded", (event) => {
  const burgerBtn = document.getElementById("burger-btn");
  const mainNav = document.getElementById("main-nav");
  const overlay = document.getElementById("navbar__dark-overlay");

  burgerBtn.onclick = showNavMenu;
  window.onresize = closeMobileMenu;

  // Makes main-nav visible when burger button is clicked on mobile view
  function showNavMenu() {
    burgerBtn.classList.toggle("burger-btn--open");
    mainNav.classList.toggle("main-nav--visible");
    overlay.classList.toggle("navbar__dark-overlay--visible");
    setAriaExpandedOnBtn();
  }

  // Incase main-nav is open when viewport is resized, it removes all classes which make mobile menu visible if custom media query function returns.
  function closeMobileMenu() {
    if (mediaQ("tabletL")) {
      overlay.classList.remove("navbar__dark-overlay--visible");
      burgerBtn.classList.remove("burger-btn--open");
      mainNav.classList.remove("main-nav--visible");
      setAriaExpandedOnBtn();
    }
  }

  // this sets the value for aria-expanded in order to let screen readers know if the menu has openned or not.
  function setAriaExpandedOnBtn() {
    if (!burgerBtn.classList.contains("burger-btn--open")) {
      burgerBtn.setAttribute("aria-expanded", false);
    } else {
      burgerBtn.setAttribute("aria-expanded", true);
    }
  }
});
