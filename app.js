const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  container.classList.remove("active");
});
