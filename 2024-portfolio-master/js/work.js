const workElements = document.querySelectorAll(".work");

workElements.forEach(function (element) {
  // 마우스가 요소 위로 올라갔을 때
  element.addEventListener("mouseover", function () {
    // shadow 클래스를 추가합니다.
    this.classList.add("shadow");
  });

  // 마우스가 요소 밖으로 나갔을 때
  element.addEventListener("mouseout", function () {
    // shadow 클래스를 제거합니다.
    this.classList.remove("shadow");
  });
});
