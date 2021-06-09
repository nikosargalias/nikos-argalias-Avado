window.addEventListener("DOMContentLoaded", (event) => {
  const navbar = document.getElementById("header__navbar");
  const mainNav = document.getElementById("main-nav");

  //   in the following function i'm using closure to store the lastScrollPosition. I'm also using a IIFE to invoke the function immediately (priot to the first call from the scroll event handler)
  const addNavBgColor = (function () {
    let lastScrollPos = window.scrollY;

    return () => {
      const currentScrollPos = window.scrollY;
      const navbarHeight = navbar.clientHeight;
      const isNavBarVisible = mainNav.classList.contains("main-nav--visible");

      if (!isNavBarVisible) {
        if (currentScrollPos > lastScrollPos) {
          if (currentScrollPos < navbarHeight) {
            navbar.classList.add("header__navbar--visible-scrolled");
          } else {
            navbar.classList.remove("header__navbar--visible-scrolled");
            navbar.classList.add("header__navbar--hide");
          }
          lastScrollPos = currentScrollPos;
        } else if (currentScrollPos < lastScrollPos && currentScrollPos > 1) {
          navbar.classList.add("header__navbar--visible-scrolled");
          lastScrollPos = currentScrollPos;
        } else {
          navbar.classList.remove("header__navbar--hide");
          navbar.classList.remove("header__navbar--visible-scrolled");
        }
      }
    };
  })();

  window.onscroll = addNavBgColor;
});
