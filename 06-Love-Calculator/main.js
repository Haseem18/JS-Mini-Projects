const form = document.querySelector("form");
const boyInput = document.querySelector(".boy");
const girlInput = document.querySelector(".girl");
const percentageElm = document.querySelector(".percentage");
const messageElm = document.querySelector(".message");

const warnMsg = (message) => {
    if (document.querySelector(".warn_msg")) {
        return
    }

    const warnElement = document.createElement("p");
    warnElement.classList.add("warn_msg", "toast");
    warnElement.textContent = message;

    requestAnimationFrame(() => warnElement.classList.add("show"));

    setTimeout(() => {
        warnElement.classList.remove("show");
        setTimeout(() => {
            warnElement.remove();
        }, 400)
    }, 3000);

    form.before(warnElement)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const boyName = boyInput.value.trim();
    const girlName = girlInput.value.trim();

    if  (!boyName || !girlName) {
        warnMsg(`Please enter ${!boyName ? "Boy" : "Girl"} name! 💕`)
        percentageElm.parentElement.classList.add("hidden");
        return;
    }

    const isBoyValid = [...boyName].every((ch) => {
        return ch.toLowerCase() >= "a" && ch.toLowerCase() <= "z"
    });

    const isGirlValid = [...girlName].every((ch) => {
        return ch.toLowerCase() >= "a" && ch.toLowerCase() <= "z"
    });

    if (!isBoyValid || !isGirlValid) {
        warnMsg(`Invalid ${isBoyValid ? "Girl" : "Boy"} name! Spaces & special characters are not allowed. ❌`);
        percentageElm.parentElement.classList.add("hidden");
        return;
    }

    percentageElm.parentElement.classList.remove("hidden");

    const lovePercentage = ((boyName.length * girlName.length) ** 2) % 101;
    percentageElm.textContent = `${lovePercentage}%`

    if (lovePercentage <= 20) {
        messageElm.textContent = "Just Friends! 🥶";
    } else if (lovePercentage <= 40) {
        messageElm.textContent = "Slight Spark, need more efforts! ⚡";
    } else if (lovePercentage <= 60) {
        messageElm.textContent = "Good Chemistry! ☕";
    } else if (lovePercentage <= 80) {
        messageElm.textContent = "Strong Attraction! 🔥";
    } else if (lovePercentage <= 95) {
        messageElm.textContent = "A Match Made in Heaven! ❤️";
    } else {
        messageElm.textContent = "Soulmates Forever! 💍";
    }

})

