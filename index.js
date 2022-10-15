const menu = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".sm-menu");
const closeMenu = document.querySelector(".close-menu");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

menu.addEventListener("click", () => {
  mobileMenu.classList.add("expanded");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("expanded");
});

features.addEventListener("click", () => {
  features.classList.toggle("expanded");
  features.nextElementSibling.classList.toggle("expanded");
});

company.addEventListener("click", () => {
  company.classList.toggle("expanded");
  company.nextElementSibling.classList.toggle("expanded");
});
