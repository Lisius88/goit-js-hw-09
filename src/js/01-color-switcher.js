function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStart(e) {
  timerId = setInterval(() => {
    const newColor = (body.style.backgroundColor = getRandomHexColor());
  }, 1000);
  startBtn.disabled = true;
}

function onClickStop(e) {
  clearInterval(timerId);
  startBtn.disabled = false;
}

const startBtn = document.querySelector('button[data-start]');
console.log(startBtn);
const stopBtn = document.querySelector('button[data-stop]');
console.log(stopBtn);
const body = document.querySelector('body');
console.log(body);

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);
