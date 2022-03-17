// Variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");

// Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", iniciarApp);

  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);
}

// Funciones
function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

// Valida el formulario
function validarFormulario(event) {
  if (event.target.value.length > 0) {
    // Elimina los errores
    const error = document.querySelector("p.error")
    error.remove();

    event.target.classList.remove("border", "border-red-500");
    event.target.classList.add("border", "border-green-500");
    
  } else {
    event.target.classList.remove("border", "border-green-500");
    event.target.classList.add("border", "border-red-500");
    
    mostrarError("Todos los campos son obligatorios.");
  }
  
  if(event.target.type === "email") {
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(er.test(event.target.value)) {
      const error = document.querySelector("p.error")
      error.remove();
  
      event.target.classList.remove("border", "border-red-500");
      event.target.classList.add("border", "border-green-500");
    }else {
      event.target.classList.remove("border", "border-green-500");
      event.target.classList.add("border", "border-red-500");

      mostrarError("Email no valido")
    }
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );

  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}