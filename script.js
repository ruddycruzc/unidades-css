// ===== REM SLIDER =====
const slider = document.getElementById("fontSlider");
const value = document.getElementById("fontValue");

slider.addEventListener("input", function () {
  document.documentElement.style.fontSize = this.value + "px";
  value.textContent = this.value + "px";
});

// ===== MENU HAMBURGUESA =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.setAttribute("aria-expanded", "false");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
