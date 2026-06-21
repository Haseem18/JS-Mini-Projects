const passwordInput = document.querySelector("input");
const toggleButton = document.querySelector("button");
const strengthElm = document.querySelector(".strength span");

let isPassword = true;

passwordInput.addEventListener("input", () => {
    let hasLowerChar = false;
    let hasUpperChar = false;
    let hasNumber = false
    let hasSpecialChar = false;
    strengthElm.parentElement.classList.add("show");

    if (passwordInput.value.length === 0) {
        strengthElm.parentElement.classList.remove("show");
        return;
    }

    for (const ch of passwordInput.value) {
        if (ch >= "a" && ch <= "z") {
            hasLowerChar = true;
        } else if (ch >= "A" && ch <= "Z") {
            hasUpperChar = true;
        } else if (ch >= "0" && ch <= "9") {
            hasNumber = true;
        } else {
            hasSpecialChar = true;
        }
    }

    strengthElm.parentElement.classList.remove("weak", "normal", "strong");

    if (passwordInput.value.length >= 8 && hasLowerChar && hasNumber && hasUpperChar && hasSpecialChar) {
        strengthElm.parentElement.classList.add("strong");
        strengthElm.textContent = "Strong";
    } else if (passwordInput.value.length >= 8 && hasLowerChar && hasUpperChar && hasNumber) {
        strengthElm.parentElement.classList.add("normal");
        strengthElm.textContent = "Normal";
    } else {
        strengthElm.parentElement.classList.add("weak");
        strengthElm.textContent = "Weak";
    }

})


toggleButton.addEventListener("click", () => {
    isPassword = !isPassword;
    passwordInput.type = isPassword ? "password" : "text";
    toggleButton.textContent = isPassword ? "Show" : "Hide";
})