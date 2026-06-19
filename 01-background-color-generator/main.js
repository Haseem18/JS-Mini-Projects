const uniqueProfessionalColors =  ["#0D0E15","#4EFFA3","#E4B1F0","#94A3B8","#FF2A7A","#D4AF37","#E6C594","#A3E635","#FF6B97","#E2E8F0","#FF7A00","#38BDF8","#F59E0B","#A5F3FC","#84CC16","#A388EE","#F43F5E","#FB923C","#2DD4BF","#D946EF"];

const rootElm = document.getElementById("root");
const btnsElm = document.querySelector(".btns");
const formElm = document.querySelector("form");
const inputElm = document.querySelector("input");
const resultElm = document.querySelector(".result");

const test = document.createElement("div");

let prevColor = "";

for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * uniqueProfessionalColors.length);
    const selectedColor = uniqueProfessionalColors[index]

    const btnElm = document.createElement("button");
    btnElm.classList.add("btn");

    btnElm.style.backgroundColor = selectedColor;

    uniqueProfessionalColors[index] = uniqueProfessionalColors[uniqueProfessionalColors.length - 1]
    uniqueProfessionalColors[uniqueProfessionalColors.length - 1] = uniqueProfessionalColors[index]
    uniqueProfessionalColors.length--;

    btnsElm.append(btnElm);
}


const displayColor = (color) => {
    if (!color.trim()) {
        warnMessage("Please enter a color value");
        return;
    } else if (color.toLowerCase() === prevColor.toLowerCase()) {
        warnMessage(`This color is already applied.`);
    } else if (!CSS.supports("background-color", color)) {
        warnMessage("Please enter a valid color (e.g. red, #ff0000)");
        return;
    }
    

    prevColor = color;
    rootElm.style.backgroundColor = color;
    resultElm.textContent = `Color: ${color}`;
    resultElm.classList.remove("hidden");
}

btnsElm.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const color = event.target.style.backgroundColor;
        displayColor(color);
    }
})

const warnMessage = (msg) => {
    if (document.querySelector(".warn_msg")) {
        return;
    }
    const warnElm = document.createElement("p");
    warnElm.textContent = msg;
    warnElm.classList.add("warn_msg");

    formElm.before(warnElm);

    setTimeout(() => {
        warnElm.remove();
    }, 3000);
}

formElm.addEventListener("submit", (event) => {
    event.preventDefault();

    const color = inputElm.value.trim();

    displayColor(color);

    formElm.reset();
})