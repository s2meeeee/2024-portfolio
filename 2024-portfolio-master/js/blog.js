// Velog RSS 피드 URL
const velogRssUrl =
  " https://cors-anywhere.herokuapp.com/https://api.velog.io/rss/@s2meeeee"; // 여기에 사용자의 Velog ID를 넣으세요.

// Velog 게시물을 가져와서 표시하는 함수
function fetchVelogPosts() {
  fetch(velogRssUrl)
    .then((response) => response.text())
    .then((xmlText) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const items = xmlDoc.querySelectorAll("item");

      // Velog 게시물을 표시
      const postsContainer = document.getElementById("velog-posts");
      items.forEach((item) => {
        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;

        // 게시물 요소 생성
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        const postLink = document.createElement("a");
        postLink.textContent = title;
        postLink.setAttribute("href", link);
        postElement.appendChild(postLink);

        // 게시물을 컨테이너에 추가
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => console.error("Error fetching Velog posts:", error));
}

// 페이지 로드 시 Velog 게시물을 가져옴
window.onload = fetchVelogPosts;
