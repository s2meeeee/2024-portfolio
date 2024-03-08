//TypingEffect 이벤트 시작

const $text = document.querySelector(".info-title__subtext");

// 글자 모음
const letters = ["Publisher", "Designer", "Developer"];
const colors = ["#B9B9B9", "#00AAA9", "#F9F871"];
// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += `<span style="color: ${
      colors[i]
    }">${letter.shift()}</span>`;
  }

  // 잠시 대기
  await wait(1000);

  // 지우는 효과
  remove();
};

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = `<span style="color: ${colors[i]}">${letter.join(
      ""
    )}</span>`;
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i + 1] ? 0 : i + 1;
  typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);

//TypingEffect 이벤트 끝

// //fadein 이벤트 시작

// window.onload = function () {
//   var elementsToShow = document.querySelectorAll(".info-intro__text");

//   elementsToShow.forEach(function (element) {
//     element.classList.add("visible");
//   });
// };
