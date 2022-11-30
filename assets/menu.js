const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".toggle-menu");
const openMenuBtn = document.querySelector(".menu-opener");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none");
});
