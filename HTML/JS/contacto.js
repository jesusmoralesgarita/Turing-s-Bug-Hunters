/* Oswaldo */


/* Luis */
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            const divs = form.getElementsByClassName("form-element");

            Array.from(divs).forEach(div => {
                let message = "";
                const divInput = div.getElementsByTagName("input").item(0);

                console.log(divInput)
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
                        case "mensaje":
                            message = validarMensaje();
                            break;
                        default:
                            console.log(divInput.getAttribute("valtype"))
                            message = "";
                    }

                    if (message !== null && message.length !== 0) {
                        div.getElementsByClassName("invalid-feedback").item(0).innerHTML = message;
                        console.log(message.length)
                        divInput.setCustomValidity(message);
                    }
                }


            });

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')


        }, false)
    })
})()


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
    if (cel.length == 10) {
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


