const menu_link = document.querySelector(".page-language");
const menu_list = document.querySelector(".menu__list");
const menu_link_icon = document.querySelector(".page-language__icon");
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
