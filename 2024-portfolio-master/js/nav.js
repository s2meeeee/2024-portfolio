const tabItem = document.querySelectorAll(".nav-container__item");
const tabPage = document.querySelectorAll(".project-section");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    tabPage.forEach((content) => {
      content.classList.remove("show");
    });

    tabItem.forEach((content) => {
      // 8. 탭 버튼들 전부 active 클래스를 제거한다.
      content.classList.remove("show");
    });

    tabItem[index].classList.add("show");
    tabPage[index].classList.add("show");
  });
});
