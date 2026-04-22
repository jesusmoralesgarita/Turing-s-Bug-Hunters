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
const btnGuardarCambios = document.getElementById('btnActualizar');
btnGuardarCambios.addEventListener('click', () => {
    const datosActualizados = {
        descuento: document.getElementById('descuento').value,
        personalizado: document.getElementById('customDesign').checked
    };
    
    console.log("Actualizando en el servidor...", datosActualizados);
});


/* LUIS */



/* LEI */



/* ERICK */



/* FER */



/* GIO */



/* CHUCHO */



/* OSWALDO */



/* ALE */


