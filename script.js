const hamburgerIcon = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close-icon");
const navMobile = document.querySelector(".nav-mobile");

hamburgerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

function openMenu() {
  hamburgerIcon.setAttribute("class", "deactive");
  closeIcon.setAttribute("class", "active");
  navMobile.setAttribute("class", "nav-mobile active");
}
function closeMenu() {
  closeIcon.setAttribute("class", "deactive");
  navMobile.setAttribute("class", "nav-mobile deactive");
  hamburgerIcon.setAttribute("class", "active");
}
