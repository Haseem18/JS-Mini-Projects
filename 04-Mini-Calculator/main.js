const form = document.querySelector("form");

const num1Input = document.querySelector(".num1 input");
const num2Input = document.querySelector(".num2 input");
const selectElm = document.querySelector("select");
const resultElm = document.querySelector("p");



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    if (num1Input.value === "" || num2Input.value === "") {
        resultElm.classList.add("result-empty");
        resultElm.textContent = `Awaiting ${num1Input.value === "" ? "input 1..." : "input 2..."}`
        return;
    }

    let result = "";

    switch (selectElm.value) {
        case "+":
            result = Math.round((num1 + num2) * 100) / 100;;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultElm.textContent = "Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
    }

    resultElm.classList.remove("result-empty")
    resultElm.textContent = `Result: ${result}`;
    
})