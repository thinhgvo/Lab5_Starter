// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const voiceSelect = document.querySelector("select");
const inputTxt = document.getElementById("text-to-speak");
let voices = [];

function init() {
  // TODO
  const smileImg = document.querySelector("#explore>img");
  const button = document.querySelector("button");

  populateVoiceList();
  if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", () => {
    const utter = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name === selectedOption) {
        utter.voice = voices[i];
      }
    }
    synth.speak(utter);
    smileImg.src = "assets/images/smiling-open.png";
    utter.addEventListener("end", () => {
      smileImg.src = "assets/images/smiling.png";
    });
  });
}

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}