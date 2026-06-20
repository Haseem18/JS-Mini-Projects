const textAreaElm = document.querySelector("textarea");
const wordElm = document.querySelector(".card p");
const textElm = document.querySelector(".text");
const limitElm = document.querySelector(".limit");

textAreaElm.addEventListener("input", () => {
    if (textAreaElm.value.trim().length > 150) {
       limitElm.classList.add("limit-danger");
       textAreaElm.classList.add("textarea-danger");
    } else {
        limitElm.classList.remove("limit-danger");
        textAreaElm.classList.remove("textarea-danger");
    }

    const trimText = textAreaElm.value.trim();   
    const words = trimText.split(" ");

    const filterWords = words.filter((word) => word !== "");

    wordElm.textContent = filterWords.length;
    textElm.textContent = trimText.length;
    limitElm.textContent = `${trimText.length} / 150`;

    
})