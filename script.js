const soundMap = {
  a: "tom-1.mp3",
  s: "tom-2.mp3",
  d: "tom-3.mp3",
  f: "tom-4.mp3",
  j: "snare.mp3",
  k: "kick-bass.mp3",
  l: "crash.mp3",
};

window.addEventListener("keydown", function (e) {
  const keyPressed = e.key.toLowerCase();
  const soundFile = soundMap[keyPressed];
  const key = document.querySelector(`.key[data-key="${keyPressed}"]`);

  if (!soundFile || !key) return;

  key.classList.add("playing");

  const audio = new Audio(`sounds/${soundFile}`);
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => key.classList.remove("playing"), 200);
});
