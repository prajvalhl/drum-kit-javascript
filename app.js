window.addEventListener("keydown", play);

function play(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) =>
  key.addEventListener("click", () => {
    const audio = document.querySelector(
      `audio[data-key='${key.dataset.key}']`
    );
    const alpkey = document.querySelector(
      `.key[data-key='${key.dataset.key}']`
    );
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    alpkey.classList.add("playing");
  })
);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
