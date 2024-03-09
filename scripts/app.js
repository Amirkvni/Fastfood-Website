const menu_link = document.querySelector(".page-language");
const menu_list = document.querySelector(".menu__list");
const menu_link_icon = document.querySelector(".page-language__icon");
const nav_icon = document.querySelector(".nav-icon");
const navbar_collapse = document.querySelector(".navbar-collapse");
const blogIcon = document.querySelector(".blog-icon");
menu_link.addEventListener("click", function () {
  menu_list.classList.toggle("menu__list--show");
  if (menu_link_icon.classList.contains("fa-angle-down")) {
    menu_link_icon.classList.remove("fa-angle-down");
    menu_link_icon.classList.add("fa-angle-up");
  } else {
    menu_link_icon.classList.remove("fa-angle-up");
    menu_link_icon.classList.add("fa-angle-down");
  }
});

nav_icon.addEventListener("click", function () {
  navbar_collapse.classList.toggle("navbar-collapse--open");
  if (nav_icon.classList.contains("fa-bars")) {
    nav_icon.classList.remove("fa-bars");
    nav_icon.classList.add("fa-xmark");
  } else if (nav_icon.classList.contains("fa-xmark")) {
    nav_icon.classList.remove("fa-xmark");
    nav_icon.classList.add("fa-bars");
  }
});
blogIcon.addEventListener("mouseenter", function () {
  if (blogIcon.classList.contains("fa-angle-down")) {
    blogIcon.classList.remove("fa-angle-down");
    blogIcon.classList.add("fa-angle-up");
  }
});
blogIcon.addEventListener("mouseleave", function () {
  if (blogIcon.classList.contains("fa-angle-up")) {
    blogIcon.classList.remove("fa-angle-up");
    blogIcon.classList.add("fa-angle-down");
  }
});
blogIcon.addEventListener("touchstart", function () {
  if (blogIcon.classList.contains("fa-angle-down")) {
    blogIcon.classList.remove("fa-angle-down");
    blogIcon.classList.add("fa-angle-up");
  }
});
blogIcon.addEventListener("touchend", function () {
  if (blogIcon.classList.contains("fa-angle-up")) {
    blogIcon.classList.remove("fa-angle-up");
    blogIcon.classList.add("fa-angle-down");
  }
});
