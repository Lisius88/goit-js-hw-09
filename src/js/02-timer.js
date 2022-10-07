import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

////////////////////////////////////////////////////////////////////Flatpickr\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const flatpickr = require('flatpickr');
flatpickr('input[type="text"]', options);

////////////////////////////////////////////////////////////////Refs\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const input = document.querySelector('input');
console.log(input);
