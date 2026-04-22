/* MAITTE */
// Función que se dispara al querer editar un producto
function prepararEdicion(id) {
    // 1. Buscar los datos del producto por su ID
    // (Simulación de búsqueda)
    const productoAEditar = { id: 1, descuento: "15", personalizado: true };

    // 2. Rellenar los campos de tu HTML
    const inputDescuento = document.getElementById('descuento');
    const switchDiseno = document.getElementById('customDesign');

    inputDescuento.value = productoAEditar.descuento;
    switchDiseno.checked = productoAEditar.personalizado;

    console.log(`Editando producto ${id}: Formulario listo.`);
}

// 3. Guardar los cambios realizados

/*
const btnGuardarCambios = document.getElementById('btnActualizar');
btnGuardarCambios.addEventListener('click', () => {
    const datosActualizados = {
        descuento: document.getElementById('descuento').value,
        personalizado: document.getElementById('customDesign').checked
    };
    
    console.log("Actualizando en el servidor...", datosActualizados);
});
*/

/* LUIS */



/* LEI */



/* ERICK */
 const inputImagen = document.getElementById("inputImagen");
  const preview = document.getElementById("preview");
  const guardarBtn = document.getElementById("guardarBtn");

  // Mostrar vista previa al subir
  inputImagen.addEventListener("change", function(event) {
    const archivo = event.target.files[0];
    if (archivo) {
      const imagenURL = URL.createObjectURL(archivo);
      preview.src = imagenURL;
      preview.classList.remove("d-none");
    }
  });

  // Botón para cambiar imagen (abre el selector otra vez)
  guardarBtn.addEventListener("click", function() {
    inputImagen.click();
  });





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
    const formulario = document.getElementById('form-edit-producto');

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


