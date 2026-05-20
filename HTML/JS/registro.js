/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */

(() => {

    "use strict";

    const form = document.getElementById("contact-form");
    const loginForm = document.getElementById("login-form");

    // =========================
    // REGISTRO
    // =========================

    if (form) {

        form.addEventListener("submit", async (event) => {

            event.preventDefault();

            const divs =
                form.getElementsByClassName("form-element");

            let isFormValid = true;

            Array.from(divs).forEach((div) => {

                let message = "";

                const divInput =
                    div.getElementsByTagName("input").item(0);

                if (!divInput) return;

                const inputType =
                    divInput.getAttribute("valtype");

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
                            message =
                                validarConfirmarPassword();
                            break;
                    }

                    const feedback =
                        div.querySelector(".invalid-feedback");

                    if (message.length !== 0) {

                        if (feedback)
                            feedback.innerText = message;

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

                const boton =
                    document.getElementById("submit-btn");

                const textoOriginal = boton.innerText;

                boton.innerText = "Registrando...";
                boton.disabled = true;

                // =========================
                // OBTENER DATOS
                // =========================

                const nombre =
                    document.getElementById("contact-name").value;

                const apellidos =
                    document.getElementById("contact-lastname").value;

                const telefono =
                    document.getElementById("contact-number").value;

                const email =
                    document.getElementById("contact-email").value;

                const direccion =
                    document.getElementById("contact-address").value;

                const password =
                    document.getElementById("password").value;

                // =========================
                // OBJETO USUARIO
                // =========================

                const nuevoUsuario = {

                    nombre: nombre,

                    apellidos: apellidos,

                    correo_electronico: email,

                    direccion: direccion,

                    numero_telefonico: telefono,

                    contrasena: password
                };

                try {

                    // =========================
                    // FETCH POST
                    // =========================

                    const usuarioGuardado =
                        await crearRegistro(nuevoUsuario);

                    console.log(
                        "Usuario guardado:",
                        usuarioGuardado
                    );

                    // Guardar en localStorage
                    localStorage.setItem(
                        "usuarioRegistrado",
                        JSON.stringify(usuarioGuardado)
                    );

                    // Mostrar modal
                    enviarFormulario();

                    // Limpiar form
                    form.reset();

                    form.classList.remove("was-validated");

                } catch (error) {

                    console.error(
                        "Error de red:",
                        error
                    );

                    alert(
                        "No se pudo registrar el usuario"
                    );

                } finally {

                    boton.innerText = textoOriginal;

                    boton.disabled = false;
                }
            }

            form.classList.add("was-validated");

        }, false);
    }

    // =========================
    // LOGIN
    // =========================

    if (loginForm) {

        loginForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const email =
                document.getElementById("login-email").value;

            const pass =
                document.getElementById("login-password").value;

            const resultado =
                validarLogin(email, pass);

            if (resultado === "success") {

                alert("¡Bienvenido!");

                window.location.href = "index.html";

            } else {

                alert(resultado);
            }
        });
    }

})();


// =====================================
// MODAL
// =====================================

function enviarFormulario() {

    const modal = document.getElementById("modal");

    modal.style.display = "block";

    setTimeout(() => {

        cerrarModal();

    }, 3000);
}

function cerrarModal() {

    document.getElementById("modal").style.display = "none";

    window.location.href = "login.html";
}


// =====================================
// VALIDACIONES
// =====================================

function validarEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

function validarNombre() {

    const nombre =
        document.getElementById("contact-name")
            .value.trim();

    if (nombre === "") {

        return "El nombre es obligatorio.";
    }

    if (!/\d/.test(nombre)) {

        return "";

    } else {

        return "El nombre no debe contener números.";
    }
}

function validarPassword() {

    const password =
        document.getElementById("password")
            .value.trim();

    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,15}$/;

    if (password === "") {

        return "La contraseña es obligatoria";

    } else if (!regex.test(password)) {

        return "Debe tener 8-15 caracteres, mayúscula, minúscula y carácter especial.";

    } else {

        return "";
    }
}

function validarConfirmarPassword() {

    const password =
        document.getElementById("password")
            .value.trim();

    const confirmPassword =
        document.getElementById("confirm-password")
            .value.trim();

    if (confirmPassword === "") {

        return "Debes repetir la contraseña.";

    } else if (password !== confirmPassword) {

        return "Las contraseñas no coinciden.";

    } else {

        return "";
    }
}

function validarEmail1() {

    const email =
        document.getElementById("contact-email")
            .value.trim();

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

    const cel =
        document.getElementById("contact-number")
            .value.trim();

    if (/[a-zA-Z]/.test(cel)) {

        return "Solo se aceptan números";
    }

    if (cel.length != 10) {

        return "El número debe tener 10 dígitos.";

    } else {

        return "";
    }
}


// =====================================
// LOGIN
// =====================================

function validarLogin(emailIngresado, passIngresada) {

    const datosSrt =
        localStorage.getItem("usuarioRegistrado");

    if (!datosSrt)
        return "No hay usuarios registrados.";

    const usuario = JSON.parse(datosSrt);

    if (

        usuario.correo_electronico === emailIngresado &&

        usuario.contrasena === passIngresada

    ) {

        localStorage.setItem("sesionActiva", "true");

        return "success";

    } else {

        return "Correo o contraseña incorrectos.";
    }
}

async function crearRegistro(nuevoUsuario) {

    try {

        console.log(
            "Enviando usuario:",
            nuevoUsuario
        );

        const response = await fetch(
            URL_BASE+ "/api/v1/auth/registro",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(nuevoUsuario)
            }
        );

        console.log(
            "Status:",
            response.status
        );

        if (!response.ok) {

            throw new Error(
                "Error al registrar usuario"
            );
        }

        const data = await response.json();

        console.log(
            "Usuario registrado:",
            data
        );

        return data;

    } catch (error) {

        console.error(
            "Error:",
            error
        );

        throw error;
    }
}