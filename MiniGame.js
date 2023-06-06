function RSP() {
  let OPTIONS = 3;
  let Rock = 1,
      Paper = 2,
      Scissors = 3;
  let COMPUTER = 1,
      PLAYER = 2,
      TIE = 3;

  let computer,
      winner = 0;
  let wins = 0,
      losses = 0,
      ties = 0;

  let playAgain = true;

  while (playAgain) {
    computer = Math.floor(Math.random() * OPTIONS) + 1;

    let player = prompt("가위 바위 보!");

    switch (player) {
      case "바위":
        alert("바위를 냈습니다.");
        break;

      case "보":
        alert("보를 냈습니다.");
        break;

      case "가위":
        alert("가위를 냈습니다.");
        break;

      default:
        alert("올바른 선택지를 입력해주세요.");
        continue;
    }

    switch (computer) {
      case Rock:
        alert("컴퓨터는 바위를 냈습니다.");
        if (player === "가위") winner = COMPUTER;
        else if (player === "보") winner = PLAYER;
        else winner = TIE;
        break;

      case Paper:
        alert("컴퓨터는 보를 냈습니다.");
        if (player === "바위") winner = COMPUTER;
        else if (player === "가위") winner = PLAYER;
        else winner = TIE;
        break;

      case Scissors:
        alert("컴퓨터는 가위를 냈습니다.");
        if (player === "보") winner = COMPUTER;
        else if (player === "바위") winner = PLAYER;
        else winner = TIE;
        break;
    }

    if (winner === COMPUTER) {
      alert("졌습니다..");
      losses++;
    } else if (winner === PLAYER) {
      alert("이겼습니다.");
      wins++;
    } else {
      alert("비겼습니다.");
      ties++;
    }

    playAgain = confirm("다시 하시겠습니까?");
  } if (playAgain == false){
    alert("게임을 종료합니다.")
  }

  alert("당신이 이긴 횟수: " + wins);
  alert("당신이 진 횟수: " + losses);
  alert("비긴 횟수: " + ties);
}

function Univ() {
alert("지구에서의 삶에 지친 우리에게 신은 카드게임을 제안하였습니다.");

const gameLoop = () => {
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let eight = 0;
let kkk = 0;

alert("[우리는 지구를 떠나 우주를 여행할 것입니다.]");
alert("[1부터 10까지의 카드를 고르세요. 카드에 따라 당신의 여행지가 결정 될 것입니다.]");

const playGame = () => {
  let a = prompt("'카드를 선택하세요' >>>");
  let choice = parseInt(a);

  if (choice > 10) {
    alert("다시 입력해주세요");
    playGame();
    return;
  }

  let god = Math.floor(Math.random() * 10) + 1;
  let you = Math.floor(Math.random() * 10) + 1;
  let card = Math.floor(Math.random() * 10) + 1;

  if (god != you) {
    if (card == 1) {
      alert("[당신은 태양에 도착했습니다!]");
      alert("[태양은 스스로 빛을 내는 행성입니다.]");
      alert("[당신은 자신감을 얻었습니다!.]");
      one++;
    } else if (card == 2) {
      alert("[당신은 달에 도착했습니다!]");
      alert("[달은 달토끼가 사는 행성입니다. 달토끼가 만든 따끈따근한 떡을 먹었습니다.]");
      alert("[당신의 소원을 달토끼가 이루어줄것입니다!]");
      two++;
    } else if (card == 3) {
      alert("[화성에 도착했습니다!]");
      let co = prompt("[화성에서 자란 감자를 먹겠습니까? (네/아니오)]");
      if(co == "네") {
        alert("[당신은 감자를 먹고 걱정거리가 사라졌습니다!]")
      } else {
        alert("[감자를 먹진 않았지만 주변 풍경에 힐링되었습니다!]")
      }
      three++;
    }  else if (card == 4) {
      alert("[당신은 목성에 도착했습니다!]");
      alert("[목성이 당신에게 기억을 저장할 수 있는 소행성을 줬습니다.]");
      alert("[당신의 행복했던 기억 중 하나를 떠올려보세요]");
      alert("[기억을 저장했습니다.]");
      four++;
    } else if (card == 5) {
      alert("[당신은 토성에 도착했습니다!]");
      alert("[외관의 고리를 따라 비행해보겠습니다.]");
      alert("[당신은 자유를 얻었습니다!]");
      five++;
    }  else if (card == 6) {
      alert("[명왕성에 도착했습니다!]");
      alert("[명왕성은 얼음과 암석으로 이루어져있습니다.]");
      alert("[당신은 행복을 얻었습니다!]");
      seven++;
    }   else if (card == 7) {
      alert("[당신은 블랙홀에 도착했습니다!]");
      alert("[블랙홀은 당신의 안 좋은 기억들을 모조리 가져갔습니다! ]");
      alert("[당신은 끈기를 얻었습니다!]");
      eight++;
    } else {
      alert("[당신은 지구에 불시착하였습니다!]");
      alert("[물론 안락한 삶이 가장 행복하죠.]");
      kkk++;
  }
 } else {
    alert("[우리는 지구를 떠나 우주를 여행할 것입니다.]");
    alert("[1부터 10까지의 카드를 고르세요. 카드에 따라 당신의 여행지가 결정 될 것입니다.]");
  }
};

playGame();

let b = confirm("한판 더 하시겠습니까?");
if (b) {
  gameLoop();
} else {
  alert("[우주여행을 마칩니다.]");
}
};

{
gameLoop();
}
}



function clover() {
alert("당신은 클로버를 발견했습니다.");

const playGame = () => {
let clover = prompt("1-4 까지의 클로버 중 마음에 드는 클로버를 고르세요.");
alert("당신이 고른 클로버는 당신에게 어떤 행운을 가져다줄까요?");

if (clover == 1) {
  alert("행운의 네잎클로버 발견! 당신은 오늘 하루종일 행복할거예요!");
} else if (clover == 2) {
  alert("행복을 가져다주는 세잎클로버 발견! 당신의 하루는 행복으로 가득할거예요!");
} else if (clover == 3) {
  alert("잎이 두 쪽인 클로버 발견! 토끼가 먹고 갔나봐요. 당신은 오늘 귀여운 생명체를 마주할 것입니다~");
} else if (clover == 4) {
  alert("초희귀템 잎이 한 쪽인 클로버 발견! 당신, 인생이 행운으로 가득하겠네요~");
} else {
  confirm("잘못된 선택입니다. 게임으로 돌아가세요!");
  playGame();
}
};

playGame();
}

function RSP() {
  let OPTIONS = 3;
  let Rock = 1,
      Paper = 2,
      Scissors = 3;
  let COMPUTER = 1,
      PLAYER = 2,
      TIE = 3;

  let computer,
      winner = 0;
  let wins = 0,
      losses = 0,
      ties = 0;

  let playAgain = true;

  while (playAgain) {
    computer = Math.floor(Math.random() * OPTIONS) + 1;

    let player = prompt("가위 바위 보!");

    switch (player) {
      case "바위":
        alert("바위를 냈습니다.");
        break;

      case "보":
        alert("보를 냈습니다.");
        break;

      case "가위":
        alert("가위를 냈습니다.");
        break;

      default:
        alert("올바른 선택지를 입력해주세요.");
        continue;
    }

    switch (computer) {
      case Rock:
        alert("컴퓨터는 바위를 냈습니다.");
        if (player === "가위") winner = COMPUTER;
        else if (player === "보") winner = PLAYER;
        else winner = TIE;
        break;

      case Paper:
        alert("컴퓨터는 보를 냈습니다.");
        if (player === "바위") winner = COMPUTER;
        else if (player === "가위") winner = PLAYER;
        else winner = TIE;
        break;

      case Scissors:
        alert("컴퓨터는 가위를 냈습니다.");
        if (player === "보") winner = COMPUTER;
        else if (player === "바위") winner = PLAYER;
        else winner = TIE;
        break;
    }

    if (winner === COMPUTER) {
      alert("졌습니다..");
      losses++;
    } else if (winner === PLAYER) {
      alert("이겼습니다.");
      wins++;
    } else {
      alert("비겼습니다.");
      ties++;
    }

    playAgain = confirm("다시 하시겠습니까?");
  } if (playAgain == false){
    alert("게임을 종료합니다.")
  }

  alert("당신이 이긴 횟수: " + wins);
  alert("당신이 진 횟수: " + losses);
  alert("비긴 횟수: " + ties);
}


function Univ() {
  alert("지구에서의 삶에 지친 우리에게 신은 카드게임을 제안하였습니다.");
  
  const gameLoop = () => {
  
  alert("[우리는 지구를 떠나 우주를 여행할 것입니다.]");
  alert("[1부터 10까지의 카드를 고르세요. 카드에 따라 당신의 여행지가 결정 될 것입니다.]");
  
  const playGame = () => {
    let a = prompt("'카드를 선택하세요' >>>");
    let choice = parseInt(a);
  
    if (choice > 10) {
      alert("다시 입력해주세요");
      playGame();
      return;
    }
  
    let god = Math.floor(Math.random() * 10) + 1;
    let you = Math.floor(Math.random() * 10) + 1;
    let card = Math.floor(Math.random() * 10) + 1;
  
    if (god != you) {
      if (card == 1) {
        alert("[당신은 태양에 도착했습니다!]");
        alert("[태양은 스스로 빛을 내는 행성입니다.]");
        alert("[당신은 자신감을 얻었습니다!.]");
      } else if (card == 2) {
        alert("[당신은 달에 도착했습니다!]");
        alert("[달은 달토끼가 사는 행성입니다. 달토끼가 만든 따끈따근한 떡을 먹었습니다.]");
        alert("[당신의 소원을 달토끼가 이루어줄것입니다!]");
      } else if (card == 3) {
        alert("[화성에 도착했습니다!]");
        let co = prompt("[화성에서 자란 감자를 먹겠습니까? (네/아니오)]");
        if(co == "네") {
          alert("[당신은 감자를 먹고 걱정거리가 사라졌습니다!]")
        } else {
          alert("[감자를 먹진 않았지만 주변 풍경에 힐링되었습니다!]")
        }
       }  else if (card == 4) {
        alert("[당신은 목성에 도착했습니다!]");
        alert("[목성이 당신에게 기억을 저장할 수 있는 소행성을 줬습니다.]");
        alert("[당신의 행복했던 기억 중 하나를 떠올려보세요]");
        alert("[기억을 저장했습니다.]");
      } else if (card == 5) {
        alert("[당신은 토성에 도착했습니다!]");
        alert("[외관의 고리를 따라 비행해보겠습니다.]");
        alert("[당신은 자유를 얻었습니다!]");
      }  else if (card == 6) {
        alert("[명왕성에 도착했습니다!]");
        alert("[명왕성은 얼음과 암석으로 이루어져있습니다.]");
        alert("[당신은 행복을 얻었습니다!]");
      }   else if (card == 7) {
        alert("[당신은 블랙홀에 도착했습니다!]");
        alert("[블랙홀은 당신의 안 좋은 기억들을 모조리 가져갔습니다! ]");
        alert("[당신은 끈기를 얻었습니다!]");
      } else {
        alert("[당신은 지구에 불시착하였습니다!]");
        alert("[물론 안락한 삶이 가장 행복하죠.]");
    }
   } else {
      alert("[우리는 지구를 떠나 우주를 여행할 것입니다.]");
      alert("[1부터 10까지의 카드를 고르세요. 카드에 따라 당신의 여행지가 결정 될 것입니다.]");
    }
  };
  
  playGame();
  
  let b = confirm("한판 더 하시겠습니까?");
  if (b) {
    gameLoop();
  } else {
    alert("[우주여행을 마칩니다.]");
  }
  };
  
  {
  gameLoop();
  }
  }
  
  function clover() {
    alert("당신은 클로버를 발견했습니다.");
    
    const playGame = () => {
    let clover = prompt("1-4 까지의 클로버 중 마음에 드는 클로버를 고르세요.");
    alert("당신이 고른 클로버는 당신에게 어떤 행운을 가져다줄까요?");
    
    if (clover == 1) {
      alert("행운의 네잎클로버 발견! 당신은 오늘 하루종일 행복할거예요!");
    } else if (clover == 2) {
      alert("행복을 가져다주는 세잎클로버 발견! 당신의 하루는 행복으로 가득할거예요!");
    } else if (clover == 3) {
      alert("잎이 두 쪽인 클로버 발견! 토끼가 먹고 갔나봐요. 당신은 오늘 귀여운 생명체를 마주할 것입니다~");
    } else if (clover == 4) {
      alert("초희귀템 잎이 한 쪽인 클로버 발견! 당신, 인생이 행운으로 가득하겠네요~");
    } else {
      let notclover = confirm("잘못된 선택입니다. 게임으로 돌아가세요!");
        if (notclover) {
          playGame();
      } else {
        alert("게임을 종료합니다! 좋은 하루 되세요!");
      }
      }
    };
    
    playGame();
    }
    
    "use strict";

    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,
        hue = 217,
        stars = [],
        count = 0,
        maxStars = 1400;
    
    let canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');
    
    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();
    
    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }
    
      if (min > max) {
        let hold = max;
        max = min;
        min = hold;
      }
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function maxOrbit(x, y) {
      let max = Math.max(x, y),
          diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    }
    
    let Star = function() {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 12;
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 50000;
      this.alpha = random(2, 10) / 10;
    
      count++;
      stars[count] = this;
    };
    
    Star.prototype.draw = function() {
      let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10);
    
      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }
    
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    };
    
    for (let i = 0; i < maxStars; i++) {
      new Star();
    }
    
    function animation() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.8;
      
      ctx.fillStyle = '#0B8C38';
      ctx.fillRect(0, 0, w, h);
      
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }
    
      window.requestAnimationFrame(animation);
    }
    
    animation();
    

    