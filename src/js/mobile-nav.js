import { mediaQueries } from "./media-query";

window.addEventListener("DOMContentLoaded", (event) => {
  const burgerBtn = document.getElementById("burger-btn");
  const mainNav = document.getElementById("main-nav");
  const overlay = document.getElementById("navbar__dark-overlay");

  burgerBtn.onclick = showNavMenu;
  window.onresize = closeMobileMenu;

  function showNavMenu() {
    burgerBtn.classList.toggle("burger-btn--open");
    mainNav.classList.toggle("main-nav--visible");
    overlay.classList.toggle("navbar__dark-overlay--visible");
  }

  function closeMobileMenu() {
    if (mediaQueries.tabletL.matches) {
      overlay.classList.remove("navbar__dark-overlay--visible");
      burgerBtn.classList.remove("burger-btn--open");
      mainNav.classList.remove("main-nav--visible");
    }
  }
});
