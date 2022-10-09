function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

function onClickStart(e) {
  timerId = setInterval(() => {
    const newColor = (body.style.backgroundColor = getRandomHexColor());
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onClickStop(e) {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopBtn.disabled = true;

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);
