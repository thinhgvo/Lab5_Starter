// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose>img');
  const hornAudio = document.querySelector('audio');
  const button = document.querySelector('button');
  const volumeSelect = document.querySelector('[type="range"]');
  const volumeImage = document.querySelector('#volume-controls>img');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", () => {
    if(hornSelect.value === 'air-horn') {
      hornImage.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
      button.addEventListener("click", () => {
        hornAudio.currentTime = 0;
        hornAudio.play();
      });
    } if(hornSelect.value === 'car-horn') {
      hornImage.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
      button.addEventListener("click", () => {
        hornAudio.currentTime = 0;
        hornAudio.play();
      });
    } if(hornSelect.value === 'party-horn') {
      hornImage.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
      button.addEventListener("click", () => {
        hornAudio.currentTime = 0;
        hornAudio.play();
        jsConfetti.addConfetti();
      });
    }
  });

  volumeSelect.addEventListener("input", () => {
    const value = volumeSelect.value;
    if(value < 1) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      hornAudio.volume = value / 100;
    } else if(value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      hornAudio.volume = value / 100;
    } else if(value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      hornAudio.volume = value / 100;
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
      hornAudio.volume = value / 100;
    }
  });
}