const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

function onLoginButtonClick() {
    console.dir(loginInput);
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginButtonClick)
// console.log(loginInput, loginButton)