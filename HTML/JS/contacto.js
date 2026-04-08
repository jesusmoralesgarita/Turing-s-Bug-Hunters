/* Oswaldo */
class Config {
  static ENDPOINT = "url"; 
}

/* --- INTEGRACIÓN --- */
(() => {
  "use strict";

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        return;
      }

      const boton = document.getElementById("submit-btn");
      const textoOriginal = boton.innerText;

      boton.innerText = "Enviando...";
      boton.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch(Config.ENDPOINT, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          enviarFormulario(); 
          form.reset();
          form.classList.remove("was-validated");
          validarFormularioCompleto(); 
        } else {
          alert("Error al enviar. Revisa el endpoint.");
        }
      } catch (error) {
        alert("Error de conexión.");
        console.error(error);
      } finally {
        boton.innerText = textoOriginal;
      }
    });
  }
})();

/* VALIDACIONES */

// Email regex
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Nombre
function validarNombre() {
  const nombre = document.getElementById("contact-name").value.trim();
  if (nombre === "") return "El nombre es obligatorio.";
  if (/\d/.test(nombre)) return "El nombre no debe tener números.";
  return "";
}

// Email
function validarEmail1() {
  const email = document.getElementById("contact-email").value.trim();
  if (email === "") return "El email es obligatorio.";
  if (!validarEmail(email)) return "Formato inválido.";
  return "";
}

// Teléfono
function validarNumCel() {
  const cel = document.getElementById("contact-number").value.trim();

  if (!/^\d+$/.test(cel)) return "Solo números.";
  if (cel.length < 10) return "Mínimo 10 dígitos.";

  return "";
}

// Mensaje
function validarMensaje() {
  const mensaje = document.getElementById("contact-message").value.trim();

  if (mensaje === "") return "Coloca un mensaje.";
  if (mensaje.length > 250) return "Máximo 250 caracteres.";

  return "";
}

/* VALIDACIÓN GLOBAL PARA BOTÓN */
function validarFormularioCompleto() {
  const nombre = validarNombre();
  const telefono = validarNumCel();
  const email = validarEmail1();
  const mensaje = validarMensaje();

  const boton = document.getElementById("submit-btn");

  if (
    nombre === "" &&
    telefono === "" &&
    email === "" &&
    mensaje === ""
  ) {
    boton.disabled = false; // habilita
  } else {
    boton.disabled = true; // bloquea
  }
}

/* EVENTOS EN TIEMPO REAL */
document.getElementById("contact-name").addEventListener("input", validarFormularioCompleto);
document.getElementById("contact-number").addEventListener("input", validarFormularioCompleto);
document.getElementById("contact-email").addEventListener("input", validarFormularioCompleto);
document.getElementById("contact-message").addEventListener("input", validarFormularioCompleto);

/* MODAL */
function enviarFormulario() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}