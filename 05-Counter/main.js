const countElm = document.querySelector("h2");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

let count = 0;

const renderCount = () => {
    countElm.textContent = count;
}

const warnMsg = (message) => {
    if (document.querySelector("p")) {
        return;
    }
    const warnElm = document.createElement("p");
    warnElm.textContent = message;
    warnElm.classList.add("toast");
    countElm.before(warnElm);

    requestAnimationFrame(() => warnElm.classList.add("show"));
    

    setTimeout(() => {
        warnElm.classList.remove("show");
        setTimeout(() => warnElm.remove(), 350); 
    }, 1500);
}
 
increaseBtn.addEventListener("click", () => {
    if (count === 10) {
        warnMsg("Maximum count limit exceeded")
        return;
    }
    count++;
    renderCount();
})

decreaseBtn.addEventListener("click", () => {
    if (count === 0) {
        warnMsg("Minimum count limit exceeded")
        return;
    }
    count--;
    renderCount();
})

resetBtn.addEventListener("click", () => {
    if (count === 0) {
        warnMsg("Count is already 0");
        return;
    }
    count = 0;
    renderCount();
})
