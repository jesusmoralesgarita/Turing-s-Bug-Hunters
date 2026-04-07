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


               if(inputType !== null){
                    switch(inputType){
                        case "email":
                            message = validarNombre();
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
    function validarNombre(){

        
        const nombre = document.getElementById("contact-name").value.trim();
        if (nombre === "") {
        
        return "El nombre es obligatorio.";
        }
        if(!/\d/.test(nombre)){
        return "OK"
        }else{
        return "El nombre sin números";

        }
    };
    
    // Validar email
    function validarEmail(){

        const email = document.getElementById("email").value.trim();
        if (email === "") {
        document.getElementById("errorEmail").textContent = "El email es obligatorio.";
        valido = false;
        } else if (!validarEmail(email)) {
        document.getElementById("errorEmail").textContent = "Formato de email inválido.";
        valido = false;
        }
    };
    
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


    