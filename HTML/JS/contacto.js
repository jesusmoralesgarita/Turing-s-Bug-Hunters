    /* Oswaldo */


class Config {
    static ENDPOINT = "https://formspree.io/f/xykblqrv";
}

/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(() => {
    'use strict'

    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const divs = form.getElementsByClassName("form-element");
            Array.from(divs).forEach(div => {
                const divInput = div.querySelector("input");
                
                if (divInput) {
                    const inputType = divInput.getAttribute("valtype");
                    let message = "";

                    if (inputType === "email") {
                        if (!divInput.value.includes('@')) {
                            message = "te falto un @";
                        }
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






