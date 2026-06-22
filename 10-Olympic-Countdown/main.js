const daysElm = document.querySelector(".days");
const hoursElm = document.querySelector(".hours");
const minutesElm = document.querySelector (".minutes");
const secondsElm = document.querySelector (".seconds");

const updateOlympicTime = () => {
    const currentTime = Date.now();
    const olympicTime = new Date("2028-07-14").getTime();
    
    const remainingTime = olympicTime - currentTime;
    
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60) % 24)); 
    const minutes = Math.floor((remainingTime / (1000 * 60) % 60))    
    const seconds = Math.floor((remainingTime / (1000) % 60));

    daysElm.textContent = days;
    hoursElm.textContent = hours;
    minutesElm.textContent = minutes;
    secondsElm.textContent = seconds;
}

updateOlympicTime();

setInterval(updateOlympicTime, 1000);
