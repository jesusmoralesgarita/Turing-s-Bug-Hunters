//import { URL } from './constantes.js';

/* Oswaldo */

/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(() => {
    'use strict'

    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const divs = form.getElementsByClassName("form-element");
            Array.from(divs).forEach(div => {
                let message = "";
                const divInput = div.getElementsByTagName("input").item(0);

                const inputType = divInput.getAttribute("valtype");


                console.log(inputType)
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
                        case "mensaje":
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
            } else {
                const boton = document.getElementById('submit-btn');
                const textoOriginal = boton.innerText;
                
                boton.innerText = "Enviando...";
                boton.disabled = true;

                const formData = new FormData(form);

                try {
                    const response = await fetch(Config.ENDPOINT, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        alert("¡Mensaje enviado con éxito!");
                        form.reset();
                        form.classList.remove('was-validated');
                    } else {
                        alert("Hubo un error al enviar. Revisa el endpoint en la clase Config.");
                    }
                } catch (error) {
                    alert("Revisa tu conexión a internet.");
                    console.error("Error de red:", error);
                } finally {
                    boton.innerText = textoOriginal;
                    boton.disabled = false;
                }
            }
            
            form.classList.add('was-validated');
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

/*
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío automático */

// Limpiar mensajes previos
//document.querySelectorAll(".error").forEach(e => e.textContent = "");



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
    if (/^\d$/.test(cel)) {
        return "Solo se aceptan números";
    }
    if (cel.length < 10) {
        return "El número de telefono debe tener al menos 10 digitos.";
    } else {
        return "";
    }

}



// Validar mensaje
function validarMensaje() {
    const mensaje = document.getElementById("contact-menssage").value.trim();
    if (mensaje.length < 0 && mensaje.length <= 250) {
        return "";
    }else{
        return "Coloca un mensaje"
    }

}


// Si todo es válido, enviar formulario
if (valido) {
    alert("Registro realizado con exito");
    this.submit();
}
//});

/* Mai */


/* Alex */


