const textEl = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("music");

const thoughts = [
  "In the future, everything is faster…",
  "But feelings still arrive slowly.",
  "Some connections don’t need words.",
  "They just stay. Quiet. Real."
];

let index = 0;
let audioStarted = false;

function showThought() {
  textEl.style.opacity = 0;
  textEl.style.transform = "translateY(10px)";

  setTimeout(() => {
    textEl.textContent = thoughts[index];
    textEl.style.opacity = 1;
    textEl.style.transform = "translateY(0)";
  }, 600);
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % thoughts.length;
  showThought();
});

playBtn.addEventListener("click", () => {
  if (!audioStarted) {
    music.volume = 0.6;
    music.play();
    audioStarted = true;
    playBtn.textContent = "Sound On";
  }
});

showThought();
