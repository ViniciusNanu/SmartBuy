

var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin').addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup').addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})

function validaLogin(emailIn, passwordIn) {
    const validaEmail = "usuario123@gmail.com";
    const validaPassword = "123456";

    if (emailIn === validaEmail && passwordIn === validaPassword) {
        return true; //login válido
    } else {
        return false; //login inválido
    }
}

document.getElementById("signin").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailIn = document.getElementById("emailIn").value;
    const passwordIn = document.getElementById("passwordIn").value;

    const isValid = validaLogin(emailIn, passwordIn);

    const mensagemElemento =document.getElementById("mensagem");
    if (isValid) {
        mensagemElemento.textContent = "Login realizado com sucesso!";
        mensagemElemento.style.color = "green";
    } else {
        mensagemElemento.textContent = "Email ou senha inválidos!";
        mensagemElemento.style.color = "red";
    }
});