let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");

b1.addEventListener("click", () => {
  let audio1 = document.createElement("audio");
  audio1.src = "./dark-guitar-130435.mp3";
  audio1.play();
  setTimeout(function () {
    audio1.pause();
    audio1.currentTime = 0; // Reset the audio to the beginning
  }, 2000);
});
b2.addEventListener("click", () => {
  let audio1 = document.createElement("audio");
  audio1.src = "./guitar-solo-27194.mp3";
  audio1.play();
  setTimeout(function () {
    audio1.pause();
    audio1.currentTime = 0; // Reset the audio to the beginning
  }, 5000);
});
b3.addEventListener("click", () => {
  let audio1 = document.createElement("audio");
  audio1.src = "./guitar-swell-36526.mp3";
  audio1.play();
  setTimeout(function () {
    audio1.pause();
    audio1.currentTime = 0; // Reset the audio to the beginning
  }, 2000);
});
b4.addEventListener("click", () => {
  let audio1 = document.createElement("audio");
  audio1.src = "./heavenly-guitar-69640.mp3";
  audio1.play();
  setTimeout(function () {
    audio1.pause();
    audio1.currentTime = 0; // Reset the audio to the beginning
  }, 2000);
});
