const oledBox = document.querySelector(".work-oled");
const oledText = document.querySelector(".work-oled-box");

oledBox.addEventListener("mouseover", function () {
  oledText.classList.add("active");
});

oledBox.addEventListener("mouseleave", function () {
  oledText.classList.remove("active");
});
