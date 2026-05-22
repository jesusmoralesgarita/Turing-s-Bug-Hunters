/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(() => {
    'use strict'

    const form = document.getElementById('contact-form');

    if (form) {
        // La validación del formulario se realiza en el servidor
        // No se utiliza localStorage para tracking de envíos

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const divs = form.getElementsByClassName("form-element");
            Array.from(divs).forEach(div => {
                let message = "";
                const divInput = div.querySelector("input, textarea");
                
                if (!divInput) return;

                const inputType = divInput.getAttribute("valtype");

                if (inputType !== null) {
                    switch (inputType) {
                        case "nombrehomes":
                            message = validarNombre();
                            break;
                        case "number":
                            message = validarNumCel();
                            break;
                        case "email":
                            message = validarEmail1();
                            break;
                        case "message":
                            message = validarMensaje();
                            break;
                        default:
                            message = "";
                    }

                    if (message.length !== 0) {
                        const feedback = div.querySelector(".invalid-feedback");
                        if (feedback) feedback.innerText = message;
                        divInput.setCustomValidity(message);
                    } else {
                        divInput.setCustomValidity("");
                    }
                }
            });

            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                const boton = document.getElementById('submit-btn');
                boton.innerText = "Enviando...";
                boton.disabled = true;

                // El formulario será procesado por Formspree y la base de datos

                // Enviar nativamente a Formspree (causa la redirección)
                form.submit();
            }
        }, false);
    }
})();



/* Gio  */


/* Erick */
// Función para validar email con expresión regular
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar nombre
function validarNombre() {


    const nombre = document.getElementById("contact-name").value.trim();
    if (nombre === "") {
        return "El nombre es obligatorio.";
    }
    if ((!/\d/.test(nombre))) {
        return "";
    } else {
        return "El nombre sin números";
    }
}; 

// Validar email
function validarEmail1() {

    const email = document.getElementById("contact-email").value.trim();
    if (email === "") {
        return "El email es obligatorio.";
    }
    if (!validarEmail(email)) {
        return "Formato de email inválido.";
    } else {
        return "";
    }

};

// Validar numero de telefono
function validarNumCel() {

    const cel = document.getElementById("contact-number").value.trim();

    if(cel === ""){
        return "Se necesita un telefono."
    }
    if ((/^[0-9]+$/.test(cel))) {
        
    }else{
        return "Solo se aceptan números"
    }
    if (cel.length != 10 ) {
        return "El número de telefono debe tener 10 digitos.";
    } else {
        return "";
    }

}

// Validar mensaje
function validarMensaje() {
    const mensaje = document.getElementById("contact-message");
    const valor = mensaje.value.trim();

    if (valor === "") {
        return "Coloca un mensaje";
    }else{
        return "";
    }
}

/* Mai */
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