import mediaQ from "./media-query";

window.addEventListener("DOMContentLoaded", (event) => {
  const burgerBtn = document.getElementById("burger-btn");
  const mainNav = document.getElementById("main-nav");
  const overlay = document.getElementById("navbar__dark-overlay");
  const menuLinks = document.querySelectorAll(".main-nav__link");

  removeLinksTabIndex();
  burgerBtn.onclick = showNavMenu;
  window.onresize = closeMobileMenu;

  // this manages the state of tabindex on menu links (tab index needs to be -1 when mobile menu is hidden so that it cannot be tabbed, however it needs to be tabable when menu is visible)
  function toggleTabIndex() {
    const isNavVisible = mainNav.classList.contains("main-nav--visible");
    if (!mediaQ("tabletL")) {
      if (isNavVisible) {
        addLinksTabIndex();
      } else {
        removeLinksTabIndex();
      }
    } else {
      addLinksTabIndex();
    }
  }

  // sets tab index to -1 to prevent links from being tabable
  function removeLinksTabIndex() {
    menuLinks.forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });
  }

  // sets tabindex to 0 to make links tabable.
  function addLinksTabIndex() {
    menuLinks.forEach((link) => {
      link.setAttribute("tabindex", "0");
    });
  }

  // Makes main-nav visible when burger button is clicked on mobile view
  function showNavMenu() {
    burgerBtn.classList.toggle("burger-btn--open");
    mainNav.classList.toggle("main-nav--visible");
    overlay.classList.toggle("navbar__dark-overlay--visible");
    setAriaExpandedOnBtn();
    toggleTabIndex();
  }

  // Incase main-nav is open when viewport is resized, it removes all classes which make mobile menu visible if custom media query function returns.
  function closeMobileMenu() {
    if (mediaQ("tabletL")) {
      overlay.classList.remove("navbar__dark-overlay--visible");
      burgerBtn.classList.remove("burger-btn--open");
      mainNav.classList.remove("main-nav--visible");
      setAriaExpandedOnBtn();
    }
    toggleTabIndex();
  }

  // this sets the value for aria-expanded in order to let screen readers know if the menu has openned or not.
  function setAriaExpandedOnBtn() {
    const isNavVisible = mainNav.classList.contains("main-nav--visible");
    if (isNavVisible) {
      burgerBtn.setAttribute("aria-expanded", true);
    } else {
      burgerBtn.setAttribute("aria-expanded", false);
    }
  }
});
