const miFormu = document.getElementById('contact-form');

miFormu.addEventListener('submit', async function(event) {
    event.preventDefault(); 
    
    const boton = document.getElementById('submit-btn');
    boton.innerText = "Enviando...";
    boton.disabled = true;

    const formData = new FormData(this);

    const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert("¡Mensaje enviado con éxito, Jafeth!");
        miFormu.reset();
    } else {
        alert("Hubo un error al enviar. Revisa tu conexión.");
    }

    boton.innerText = "Enviar";
    boton.disabled = false;
});
