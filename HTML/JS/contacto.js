    /* Oswaldo */


    /* Luis */


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
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    let valido = true;

    // Validar nombre
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
        valido = false;
    }
    if(!/\d/.test(nombre)){
        valido = true;
    }else{
        document.getElementById("errorNombre").textContent = "El nombre sin números";
        valido = false;
    }

    // Validar email
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("errorEmail").textContent = "El email es obligatorio.";
        valido = false;
    } else if (!validarEmail(email)) {
        document.getElementById("errorEmail").textContent = "Formato de email inválido.";
        valido = false;
    }
     // Validar numero de telefono
    const cel = document.getElementById("cel").value;
    if (typeof cel !== 'number') {
        document.getElementById("errorCel").textContent = "Solo se aceptan numeros";
        valido = false;
    }
    if (cel.length < 10){
        document.getElementById("errorCel").textContent = "La numero debe tener al menos 10 digitos.";
        valido = false;
    }

    // Validar contraseña
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("errorPassword").textContent = "La contraseña debe tener al menos 6 caracteres.";
        valido = false;
    }

    // Si todo es válido, enviar formulario
    if (valido) {
        alert("Registro realizado con exito");
        this.submit();
    }
//});

    /* Mai */


    /* Alex */


    