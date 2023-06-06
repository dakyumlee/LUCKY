function getUserInput(){
  let a = prompt("내용을 입력하세요.");
  if (a==0) {
    alert("엥! 내용이 없는데요!");
  } else {
    alert("누군가에게 전달 완료!")
  }
}

function showLetters() {
  let Messages = [
  "나는 너의 마음에 항상 함께 있어. 어떤 어려움이나 고난이 닥쳐도 너를 지지해 줄 거야.너의 미소는 내가 하루를 밝게 만들어줘. 너무나 아름다워서 그 미소를 더 자주 보고 싶어.",
  "너의 자신감과 희망에 영감을 받아. 너는 더 멋진 일들을 이룰 수 있을 거라고 믿어.가끔은 스트레스와 압박감에 휩싸이는 날들이 있을 거야. 그럴 때는 나에게 이야기해줘. 내가 너를 위로해줄게.",
  "너는 나에게 있어 특별한 존재야. 너와 함께 있는 시간은 내게 큰 기쁨을 주고, 너의 소중한 존재는 내게 힘을 주는 거야.",
  "늘 너를 지켜보고 있다는 걸 잊지 마. 너의 성장과 성공을 응원하며, 언제나 네 곁에 있을 거야.",
  "너의 꿈을 향해 달려가는 모습은 정말 멋져. 어떤 어려움이 닥치더라도 포기하지 않고 꿈을 이루기 위해 힘내는 너의 모습은 대단해.",
  "나는 네가 얼마나 강하고 용감한 사람인지 알고 있어. 어떤 도전이든 극복할 수 있을 거야.",
  "너는 특별한 사람이야. 내가 네 곁에 있을 수 있다는 사실에 감사해하며, 너의 곁에 머무르기를 바랄게.",
  "너와 함께 있는 시간은 늘 소중하고 행복한 순간이야. 너의 존재는 내게 큰 기쁨을 선물해주는거야."
  ];

let random = Messages[Math.floor(Math.random() * Messages.length)];

let modal = document.createElement("div");
modal.innerHTML = `
  <div class="modal" style="display: block;">
    <div class="modal-content">
      <h2>익명 편지</h2>
      <p>${random}</p>
      <br>
      <button onclick="closeModal()">닫기</button>
    </div>
  </div>
  <style>
    @font-face {
font-family: 'TTWanjudaedunsancheB';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/TTWanjudaedunsancheB.woff2') format('woff2');
font-weight: 700;
font-style: normal;
}
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
      background-color: #F2F2F2;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 400px;
      text-align: center;
    }

    .modal-content h2 {
      font-family: 'TTWanjudaedunsancheB';
      margin-top: 0;
      color: #65BF85;
    }

    .modal-content p {
      font-family: 'TTWanjudaedunsancheB';
      font-size: 18px;
      color: #65BF85;
    }
  </style>
`;

document.body.appendChild(modal);

window.closeModal = function() {
  modal.style.display = "none";
};
}
