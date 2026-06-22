const timeElm = document.querySelector("h1");
const dateElm = document.querySelector("h2");

setInterval(() => {
    const date = new Date();

    timeElm.textContent = date.toLocaleTimeString("en-in", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    dateElm.textContent = date.toLocaleDateString();
}, 1000)