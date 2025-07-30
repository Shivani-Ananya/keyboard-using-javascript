const buttons = document.querySelectorAll(".Note");

buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    const note = this.getAttribute("data-note");
    if (note) {
      playSound(note);
      animateButton(this);
    }
  });
});

document.addEventListener("keypress", function (e) {
  const keyMap = {
    a: "DO",
    s: "RE",
    d: "MI",
    f: "FA",
    j: "SOL",
    k: "LA",
    l: "TI"
  };

  const note = keyMap[e.key.toLowerCase()];
  if (note) {
    playSound(note);
    const btn = document.querySelector(`[data-note="${note}"]`);
    if (btn) animateButton(btn);
  }
});

function playSound(note) {
  const audio = new Audio(`sounds/${note.toLowerCase()}.mp3`);
  audio.play();
}

function animateButton(button) {
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}
