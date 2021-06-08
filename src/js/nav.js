window.addEventListener("DOMContentLoaded", (event) => {
  const burgerBtn = document.getElementById("burger-btn");
  const mainNav = document.getElementById("main-nav");
  const overlay = document.getElementById("navbar__dark-overlay");

  burgerBtn.onclick = showNavMenu;

  function showNavMenu() {
    mainNav.classList.toggle("main-nav--visible");
    overlay.classList.toggle("navbar__dark-overlay--visible");
  }
});
