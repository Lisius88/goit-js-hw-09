import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  width: '250px',
  position: 'right-top',
  distance: '10px',
  opacity: 0.8,
  timeout: 2000,
});

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);
form.addEventListener('input', getFormValues);

function onSubmit(e) {
  e.preventDefault();

  let { delay, amount, step } = getFormValues();
  setTimeout(() => {
    for (let i = 1; i <= amount; i += 1) {
      createPromise(i, delay).then(onFulfilled).catch(onRejected);

      delay += step;
    }
  }, delay);

  resetFormValues();
}
function getFormValues() {
  return {
    delay: Number(form.delay.value),
    step: Number(form.step.value),
    amount: Number(form.amount.value),
  };
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFulfilled({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onRejected({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function resetFormValues() {
  form.reset();
}
