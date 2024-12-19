// Transição do botão

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

// Login
function validaLogin(emailIn, passwordIn) {
    const validaEmail = "usuario123@gmail.com";
    const validaPassword = "123456";

    if (emailIn === validaEmail && passwordIn === validaPassword) {
        return true;
    } else {
        return false;
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

// Cadastro

document.getElementById('signup').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailUp = document.getElementById('emailUp').value;
    const passwordUp = document.getElementById('passwordUp').value;
    const confirmaPasswordUp = document.getElementById('confirmaPasswordUp').value;
    const mensagemError = [];

    clearStyles();

    validaEmail(emailUp, mensagemError);
    validaPassword(passwordUp, mensagemError);
    validaPasswordMatch(passwordUp, confirmaPasswordUp, mensagemError);

    displayErrors(mensagemError);
});

function clearStyles() {
    document.getElementById('passwordUp').style.borderColor = '';
    document.getElementById('confirmaPasswordUp').style.borderColor = '';
}

function validaEmail(emailUp, mensagemError) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailUp)) {
        mensagemError.push('Por favor, insira um email válido');
    }
}

function validaPassword(passwordUp, mensagemError) {
    if (passwordUp.length < 6) {
        mensagemError.push('A senha deve ter pelo menos 6 caracteres');
    }
}

function validaPasswordMatch(passwordUp, confirmaPasswordUp, mensagemError) {
    if (passwordUp !== confirmaPasswordUp) {
        mensagemError.push('As senhas não são iguais');
        document.getElementById('passwordUp').style.borderColor = 'red';
        document.getElementById('confirmaPasswordUp').style.borderColor = 'red';
    } else {
        document.getElementById('passwordUp').style.borderColor = 'green';
        document.getElementById('confirmaPasswordUp').style.borderColor = 'green';
    }
}

function displayErrors(mensagemError) {
    const errorDiv = document.getElementById('mensagemError');
    errorDiv.innerHTML = '';
    if (mensagemError.length > 0) {
        errorDiv.innerHTML = mensagemError.join('<br>');
        errorDiv.style.color = 'red';
    } else {
        alert('Cadastro realizado com sucesso!');
        errorDiv.style.color = 'green';
    }
}
