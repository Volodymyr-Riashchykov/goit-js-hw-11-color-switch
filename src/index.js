const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action = start]');
const stopBtn = document.querySelector('[data-action = stop]');


startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let intervalId = null;

function onStart(e) {
    intervalId = setInterval(() => {
        body.style.backgroundColor = colors[randomColor(0, colors.length - 1)];
    }, 1000);
    startBtn.disabled = true;
}

function onStop(e) {
    clearInterval(intervalId);
    startBtn.disabled = false;
}

const randomColor = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};