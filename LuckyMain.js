let audio;
let progress;

document.querySelector(".btn1").addEventListener("click", function () {
  if (audio && !audio.paused) {
    audio.pause();
    return;
  }

  audio = new Audio("Wave To Earth - Seasons.mp3");
  audio.loop = false;
  audio.volume = 0.5;
  audio.play();

  progress = setInterval(updateProgress1, 100);
});

document.querySelector(".btn2").addEventListener("click", function () {
  if (audio && !audio.paused) {
    audio.pause();
    return;
  }

  audio = new Audio("The Volunteers (더 발룬티어스) - Summer.mp3");
  audio.loop = true;
  audio.volume = 0.5;
  audio.play();

  progress = setInterval(updateProgress2, 100);
});

document.querySelector(".btn3").addEventListener("click", function () {
  if (audio && !audio.paused) {
    audio.pause();
    return;
  }

  audio = new Audio("검정치마(The Black Skirts) - Big Love.mp3");
  audio.loop = true;
  audio.volume = 0.5;
  audio.play();

  progress = setInterval(updateProgress3, 100);
});

function updateProgress1() {
  if (audio && audio.duration) {
    const progressBar = document.querySelector(".progress-bar");
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
}

function updateProgress2() {
  if (audio && audio.duration) {
    const progressBar = document.querySelector(".progress-bar2");
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
}

function updateProgress3() {
  if (audio && audio.duration) {
    const progressBar = document.querySelector(".progress-bar3");
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
}
