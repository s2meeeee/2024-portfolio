const tabItem = document.querySelectorAll("nav-container__item");
const tabpage = document.querySelectorAll("project-section");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    tabpage.forEach((content) => {
      content.classList.remove("show");
    });

    tabItem.forEach((content) => {
      // 8. 탭 버튼들 전부 active 클래스를 제거한다.
      content.classList.remove("show");
    });

    tabItem[index].classList.add("show");
    tabContent[index].classList.add("show");
  });
});
