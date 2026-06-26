const form = document.querySelector("form");
const amountInp = document.querySelector("input");
const currencyFrom = document.querySelector(".currencyFrom");
const currencyTo = document.querySelector(".currencyTo");
const convertedValue = document.querySelector(".converted-value");
const exchangeRate = document.querySelector(".exchange-rate");
const loader = document.querySelector(".loader");
const result = document.querySelector(".result");
const errorElm = document.querySelector(".error");
const swapBtn = document.querySelector(".swap-btn");

const showLoader = () => {
    loader.classList.remove("hidden");
}

const hideLoader = () => {
    loader.classList.add("hidden");
}

const showResult = () => {
    result.classList.remove("hidden");
}

const hideResult = () => {
    result.classList.add("hidden");
}

const showError = (message) => {
    errorElm.classList.remove("hidden");
    errorElm.textContent = message;
    hideResult();
}

const hideError = () => {
    errorElm.classList.add("hidden");
    errorElm.textContent = "";
}


const convertCurrency = async (amount, from, to) => {
    try {
        showLoader();
        hideResult();
        hideError();

        const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${from}`);
        if (!response.ok) {
            throw new Error("Unable to convert. Try again later.")
        }
        const data = await response.json();

        const rate = data.rates[to];

        if (!rate) {
            throw new Error("Currency conversion unavailable.");
        }
            
        const total = amount * rate;
        
        convertedValue.textContent = `${total.toFixed(2)} ${to}`;
        exchangeRate.textContent = `1 ${from} = ${rate} ${to}`;

        showResult();   
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoader();
    }
} 

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (currencyFrom.value === currencyTo.value) {
        showError("Currencies are same. Change It!");
        return;
    }

    if (!amountInp.value || Number(amountInp.value) <= 0) {
        showError("Enter a valid amount!");
        return;
    }

    convertCurrency(Number(amountInp.value), currencyFrom.value, currencyTo.value);  
})

swapBtn.addEventListener("click", () => {
    [currencyFrom.value, currencyTo.value] = [currencyTo.value, currencyFrom.value];
    
    if (amountInp.value) {
        convertCurrency(Number(amountInp.value), currencyFrom.value, currencyTo.value);  
    }
})