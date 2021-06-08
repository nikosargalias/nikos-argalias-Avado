window.addEventListener("DOMContentLoaded", (event) => {
  const navbar = document.getElementById("header__navbar");

  //   in the following function i'm using closure to store the lastScrollPosition. I'm also using a IIFE to invoke the function immediately (priot to the first call from the scroll event handler)
  const addNavBgColor = (function () {
    let lastScrollPos = window.scrollY;

    return () => {
      console.log("papos");
      if (window.scrollY > lastScrollPos) {
        navbar.classList.add("header__navbar--scrolled");
        lastScrollPos = window.scrollY;
      } else if (window.scrollY == 0) {
        navbar.classList.remove("header__navbar--visible-scrolled");
      } else {
        navbar.classList.remove("header__navbar--scrolled");
        navbar.classList.add("header__navbar--visible-scrolled");
        lastScrollPos = window.scrollY;
      }
    };
  })();

  window.onscroll = addNavBgColor;
});
