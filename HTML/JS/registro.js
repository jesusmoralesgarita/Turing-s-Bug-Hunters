/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(() => {
    'use strict'

    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const divs = form.getElementsByClassName("form-element");
            let isFormValid = true;

            Array.from(divs).forEach(div => {
                let message = "";
                const divInput = div.getElementsByTagName("input").item(0);
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
                        case "password":
                            message = validarPassword();
                            break;
                        case "confirm-password":
                            message = validarConfirmarPassword();
                            break;
                    }

                    const feedback = div.querySelector(".invalid-feedback");
                    if (message.length !== 0) {
                        if (feedback) feedback.innerText = message;
                        divInput.setCustomValidity(message);
                        isFormValid = false;
                    } else {
                        divInput.setCustomValidity("");
                    }
                }
            });

            if (!form.checkValidity() || !isFormValid) {
                event.stopPropagation();
            } else {
                const boton = document.getElementById('submit-btn');
                const textoOriginal = boton.innerText;
                
                boton.innerText = "Enviando...";
                boton.disabled = true;

                const formData = new FormData(form);

                try {
                    // Simulación de envío o fetch real
                    // const response = await fetch(Config.ENDPOINT, { ... });
                    // if (response.ok) { ... }
                    
                    enviarFormulario();
                    form.reset();
                    form.classList.remove('was-validated');
                } catch (error) {
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

//Validar contraseña
function validarPassword(){
    const password = document.getElementById("password").value.trim();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,15}$/;
    
    if (password === "") {
        return "La contraseña es obligatoria";
    } else if (!regex.test(password)) {
        return "Debe tener 8-15 caracteres, una mayúscula, una minúscula y un carácter especial.";
    } else {
        return "";
    }
}

// Validar confirmar contraseña
function validarConfirmarPassword() {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    
    if (confirmPassword === "") {
        return "Debes repetir la contraseña.";
    } else if (password !== confirmPassword) {
        return "Las contraseñas no coinciden.";
    } else {
        return "";
    }
}

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
    if (/[a-zA-Z]/.test(cel)) {
        return "Solo se aceptan números";
    }
    if (cel.length != 10 ) {
        return "El número de telefono debe tener 10 digitos.";
    } else {
        return "";
    }
}
