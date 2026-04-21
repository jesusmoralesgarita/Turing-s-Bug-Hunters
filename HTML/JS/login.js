// Función para validar email con expresión regular
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar nombre
function validarNombre(input) {
    const nombre = input.value.trim();
    if (nombre === "") {
        return "El nombre es obligatorio.";
    }
    if (!/\d/.test(nombre)) {
        return "";
    } else {
        return "El nombre sin números";
    }
}

// Validar email
function validarEmail1(input) {
    const email = input.value.trim();
    if (email === "") {
        return "El email es obligatorio.";
    }
    if (!validarEmail(email)) {
        return "Formato de email inválido.";
    } else {
        return "";
    }
}

// Validar numero de telefono
function validarNumCel(input) {
    const cel = input.value.trim();
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
function validarMensaje(input) {
    const mensaje = input.value.trim();
    if (mensaje.length < 0 && mensaje.length <= 250) {
        return "";
    } else {
        return "Coloca un mensaje";
    }
}

Array.from(document.getElementsByTagName("form")).forEach((e) => {
    e.addEventListener("submit", (el) => {
        e.classList.add("was-validated");
        e.querySelectorAll(".form-element").forEach((e1) => {
            const input = e1.getElementsByTagName("input")[0];
            let salida = "";
            switch (input.getAttribute("valtype")) {
                case "email":
                    salida = validarEmail1(input);
                    break;
                case "name":
                    salida = validarNombre(input);
                    break;
                case "number":
                    salida = validarNumCel(input);
                    break;
            }
            if (salida !== "") {
                const feedback = e1.querySelector(".invalid-feedback");
                if (feedback) feedback.innerText = salida;
                input.setCustomValidity(salida);
            } else {
                input.setCustomValidity("");
            }
        });

        if (!e.checkValidity()) el.preventDefault();
        
    });
});
