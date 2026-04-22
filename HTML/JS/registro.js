//import { URL } from './constantes.js';

/* Oswaldo */

/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(() => {
    'use strict'

    const form = document.getElementById('registro-form');

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
                        
                        case "email":
                            message = validarEmail1();
                            break;
                        case "password":
                            message = validarContraseña();
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

}

//Validar contraseña
function validarContraseña() {
    
    let password = document.getElementById("password").value;
    if (password.trim() === "") {
        return "Por favor, ingresa una contraseña";
    }
    return "";
}
// Si todo es válido, enviar formulario
if (valido) {
    alert("Registro realizado con exito");
    this.submit();
}
//});

/* Mai */


/* Alex */


