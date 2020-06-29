const inputEmail = document.getElementById("email");
const inputName = document.getElementById("name");
const inputMessage = document.getElementById("message");

inputEmail.addEventListener("input", () => toggleButtonDisabled());
inputMessage.addEventListener("input", () => toggleButtonDisabled());
inputName.addEventListener("input", () => toggleButtonDisabled());

document
    .getElementById("submit")
    .addEventListener("click", () => checkFormAndDisplayMessage());

function checkFormAndDisplayMessage() {
    if (!isEmailValid()) {
        inputEmail.value = "Invalid email";
    }
    if (!isNameValid()) {
        inputName.value = "Invalid name";
    }
    if (inputsNotEmpty() && isNameValid() && isEmailValid()) {
        sendMessage()
    }
}

function toggleButtonDisabled() {
    document.getElementById("submit").disabled = !inputsNotEmpty();
}

function inputsNotEmpty() {
    return inputEmail.value && inputMessage.value && inputName.value;
}

function isNameValid() {
    const maxAllowedNameLength = 15;
    return /^(\s*\b[A-Z][a-z]+\b\s*)+$/.test(inputName.value) && inputName.value.length < maxAllowedNameLength;
}

function isEmailValid() {
    return /^\w+@\w+\.\w{1,3}$/.test(inputEmail.value);
}

function sendMessage() {
    alert("Message has been sent.");
    inputEmail.value = "";
    inputMessage.value = "";
    inputName.value = "";
    document.getElementById("submit").disabled = true;
}
