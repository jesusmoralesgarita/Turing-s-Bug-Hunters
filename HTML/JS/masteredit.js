/* MAITTE */



/* LUIS */



/* LEI */



/* ERICK */



/* FER */



/* GIO */



/* CHUCHO */
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Genial, se han guardado los cambios', 'success')
  })
}


/* OSWALDO */



/* ALE */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const datosProducto = {
                nombre: formulario.querySelector('input').value,
                descripcion: formulario.querySelector('textarea').value,
                precio: formulario.querySelector('input[type="number"]').value,
                categoria: formulario.querySelector('select').value,
                id: Date.now()
            };

            console.log("Producto a agregar:", datosProducto);
            
            alert(`¡Producto "${datosProducto.nombre}" guardado correctamente!`);
            
            formulario.reset();
        });
    }
});


