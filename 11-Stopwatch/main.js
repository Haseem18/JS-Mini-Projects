const hoursElm = document.querySelector(".hours");
const minutesElm = document.querySelector(".minutes");
const secondsElm = document.querySelector(".seconds");

const startBtn = document.querySelector(".start");
const resumeBtn = document.querySelector(".resume");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let seconds = 0;
let id = null;

const updateTimer = () => {
    hoursElm.textContent = String(Math.floor(seconds / 3600)).padStart(2, "0");
    minutesElm.textContent = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    secondsElm.textContent = String(seconds % 60).padStart(2, "0");
};

const startTimer = () => {
    if (id) return;

    id = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
};

const updateStopWatch = () => {
    startTimer();

    startBtn.classList.add("hidden");
    resumeBtn.classList.remove("hidden");
};

const stopWatch = () => {
    clearInterval(id);
    id = null;
};

const resetStopWatch = () => {
    clearInterval(id);
    id = null;

    seconds = 0;
    updateTimer();

    startBtn.classList.remove("hidden");
    resumeBtn.classList.add("hidden");
};

const resumeStopWatch = () => {
    startTimer();
};

startBtn.addEventListener("click", updateStopWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetStopWatch);
resumeBtn.addEventListener("click", resumeStopWatch);

updateTimer();