const email = document.querySelector('#mail')
const password = document.querySelector('#password')
const passwordErrorText = document.querySelector(".password")
const confirmPassword = document.querySelector("#confirm-password")
const passwordMatchText = document.querySelector('.password-match')
const form = document.querySelector('form')

form.addEventListener("submit", (event) => {
    if (!password.validity.valid) {
        passwordError()
        event.preventDefault()
    }
    if (password.value !== confirmPassword.value) {
        checkPaswordMatch()
        event.preventDefault()
    }

})

password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passwordErrorText.textContent = '';
        passwordErrorText.className = "error"
        if (password.value === confirmPassword.value) {
            passwordMatchText.textContent = "";
            passwordMatchText.className = "error";
        }
    } else {
        passwordError()
    }
})

confirmPassword.addEventListener("input", (event) => {
    if (password.value === confirmPassword.value) {
        passwordMatchText.textContent = "";
        passwordMatchText.className = "error";
    } else {
        checkPaswordMatch();
    }
})

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please write email in correct format. Eg:-abc@gmail.com")
    } else {
        email.setCustomValidity('');
    }
})

function checkPaswordMatch() {
    if (password.value !== confirmPassword.value) {
        passwordMatchText.textContent = "Enter same password as above!"
    }
    passwordMatchText.className = "error active"
}

function passwordError() {
    if (password.validity.tooShort) {
        passwordErrorText.textContent = `Password must contain atleast ${password.minLength} characters, You entered ${password.value.length}`
    }
    passwordErrorText.className = "error active"

}

