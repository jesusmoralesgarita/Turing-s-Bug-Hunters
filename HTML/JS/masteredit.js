/* MAITTE */



/* LUIS */



/* LEI */



/* ERICK */



/* FER */



/* GIO */



/* CHUCHO */



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


