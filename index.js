const menuBurger = document.querySelector("#icon-burger");
const menu = document.querySelector(".mobile-links-wrapper");

menuBurger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
});
