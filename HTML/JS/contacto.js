/* CONFIG */
class Config {
  static ENDPOINT = "url"; // 
}

/* --- INTEGRACIÓN --- */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const form = document.getElementById("contact-form");
  const boton = document.getElementById("submit-btn");

  /* EVENTOS EN TIEMPO REAL */
  document.getElementById("contact-name").addEventListener("input", validarFormularioCompleto);
  document.getElementById("contact-number").addEventListener("input", validarFormularioCompleto);
  document.getElementById("contact-email").addEventListener("input", validarFormularioCompleto);
  document.getElementById("contact-message").addEventListener("input", validarFormularioCompleto);

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        return;
      }

      const textoOriginal = boton.innerText;

      boton.innerText = "Enviando...";
      boton.disabled = true;

      const formData = new FormData(form);

      try {
        /* 🔥 MODO PRUEBA (COMENTA ESTO CUANDO USES FORMSPREE) */
        await new Promise(resolve => setTimeout(resolve, 1000));
        enviarFormulario();

        /* 🔥 DESCOMENTA ESTO PARA PRODUCCIÓN
        const response = await fetch(Config.ENDPOINT, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          enviarFormulario();
        } else {
          alert("Error al enviar.");
        }
        */

        form.reset();
        form.classList.remove("was-validated");
        validarFormularioCompleto();

      } catch (error) {
        alert("Error de conexión.");
        console.error(error);
      } finally {
        boton.innerText = textoOriginal;
      }
    });
  }
});

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

/* VALIDACIÓN GLOBAL BOTÓN */
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
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
}

/* MODAL */
function enviarFormulario() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  // Auto cerrar en 3 segundos
  setTimeout(() => {
    modal.style.display = "none";
  }, 3000);
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}