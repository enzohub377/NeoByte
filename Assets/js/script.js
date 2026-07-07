//Cadastro e Login

const Register = document.getElementById("formRegister");

Register.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Salvando Dados no Sistema...");
  alert("Cadastro realizado com sucesso! Redirecionando...");
  window.location.href = "http://127.0.0.1:5500/P%C3%A1gina%20Principal/index.html";
});

//Visualizar Senha

let password = document.getElementById("password");
let togglePassword = document.getElementById("toggle");

function showHide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    togglePassword.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    togglePassword.classList.remove("hide");
  }
}
