console.log("script.js cargó");

const inputUser = document.getElementById("username");
const inputPass = document.getElementById("password");
const btnEnviar = document.getElementById("btnEnviar");
const btnLimpiar = document.getElementById("btnLimpiar");
const msg = document.getElementById("msg");

const USER_OK = "admin";
const PASS_OK = "1234";

function showMessage(text, type) {
  msg.textContent = text;
  msg.classList.remove("d-none", "alert-success", "alert-danger", "alert-warning", "alert-info");
  msg.classList.add("alert", `alert-${type}`);
}

btnEnviar.addEventListener("click", () => {
  const user = inputUser.value.trim();
  const pass = inputPass.value;

  if (!user || !pass) {
    showMessage(" usuario y contraseña.", "warning");
    return;
  }

  if (user === USER_OK && pass === PASS_OK) {
    localStorage.setItem("loggedInUser", user);
    showMessage("Bienvenido", "success");
    setTimeout(() => window.location.href = "perfil.html", 400);
  } else {
    showMessage(" Usuario incorrectos.", "danger");
    inputPass.value = "";
    inputPass.focus();
  }
});

btnLimpiar.addEventListener("click", () => {
  inputUser.value = "";
  inputPass.value = "";
  msg.classList.add("d-none");
  inputUser.focus();
});