function fortuneMessages() {
  let fortuneMessages = [
    "긍정적인 변화가 곧 찾아올 것입니다.",
    "당신은 큰 성공을 이룰 것입니다.",
    "가까운 미래에 행운이 따를 것입니다.",
    "오랜 친구와 소식을 나누는 것은 기분 좋은 시간을 만들어줄 것입니다.",
    "일상 생활 속에서 작은 기쁨을 찾으세요.",
    "도전적인 상황에서도 강한 의지를 가지고 있습니다.",
    "어제보다 더 나은 하루가 될 것입니다.",
    "미래에 대한 꿈과 목표를 가지세요.",
    "당신의 인내심은 큰 보상을 가져다줄 것입니다.",
    "새로운 기회가 당신을 기다리고 있습니다."
  ];

  let randomFortune = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];

  let modal = document.createElement("div");
  modal.innerHTML = `
    <div class="modal" style="display: block;">
      <div class="modal-content">
        <h2>포춘 쿠키</h2>
        <p>${randomFortune}</p>
        <br>
        <button onclick="closeModal()">닫기</button>
      </div>
    </div>
    <style>
      @font-face {
        font-family: 'PFStardust';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/PFStardust.woff') format('woff');
        font-weight: normal;
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
        background-color: #65BF85;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 400px;
        text-align: center;
      }

      .modal-content h2 {
        font-family: 'PFStardust';
        margin-top: 0;
        color: #F2F2F2;
      }

      .modal-content p {
        font-family: 'PFStardust';
        font-size: 18px;
        color: #F2F2F2;
      }
    </style>
  `;

  document.body.appendChild(modal);

  window.closeModal = function() {
    modal.style.display = "none";
  };
}
