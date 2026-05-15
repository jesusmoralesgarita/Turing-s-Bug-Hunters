/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(() => {
    'use strict'

    const form = document.getElementById('contact-form');
    const loginForm = document.getElementById('login-form');

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
                
                boton.innerText = "Registrando...";
                boton.disabled = true;

                const email = document.getElementById("contact-email").value;
                const password = document.getElementById("password").value;
                const nombre = document.getElementById("contact-name").value;

                const nuevoUsuario = {
                    nombre: nombre,
                    email: email,
                    password: password
                };

                localStorage.setItem('usuarioRegistrado', JSON.stringify(nuevoUsuario));

                try {
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

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const pass = document.getElementById('login-password').value;
            
            const resultado = validarLogin(email, pass);
            
            if (resultado === "success") {
                alert("¡Bienvenido!");
                window.location.href = "index.html";
            } else {
                alert(resultado);
            }
        });
    }
})();

/* Gio  */
function enviarFormulario() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    
    // Auto cerrar y redirigir en 3 segundos
    setTimeout(() => {
        cerrarModal();
    }, 3000);
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
    // Redirige al login después de cerrar
    window.location.href = "login.html";
}

/* Erick */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

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
}

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

function validarLogin(emailIngresado, passIngresada) {
    const datosSrt = localStorage.getItem('usuarioRegistrado');
    if (!datosSrt) return "No hay usuarios registrados.";

    const usuario = JSON.parse(datosSrt);

    if (usuario.email === emailIngresado && usuario.password === passIngresada) {
        localStorage.setItem('sesionActiva', 'true');
        return "success";
    } else {
        return "Correo o contraseña incorrectos.";
    }
}

// creamos la funcion asincrona
async function renderRegistro(params) {
/**
   * @type {Usuario[]}
   */
  const reviews = await fetchJson(URL_BASE+"/api/v1/reviews"
    
    //EN CASO DE SER UN POST/PUT/DELETE PUEDEN UTILIZAR ESTE PARAMETRO

    ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre: 'Juan', edad: 30 ,password:qwerty123}),
    }

    );
  }