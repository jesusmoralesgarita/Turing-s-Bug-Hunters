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

class Producto {
    constructor(
        idProducto,
        tipoProducto,
        nombreProducto,
        precio,
        talla,
        color,
        diseño,
        descripcion,
        cantidad,
        imagen,
        descuento,
    ) {
        this.idProducto = idProducto; 
        this.tipoProducto = tipoProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.talla = talla;
        this.color = color;
        this.diseño = diseño;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.descuento = descuento;
    }

}


if (!localStorage.getItem("catalogo")) {
    const listaProductos = [
        new Producto(
            0,
            "Playera",
            "Polo basica",
            200,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            1,
            "Playera",
            "Polo no basica",
            200,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            2,
            "Playera",
            "Playera en V",
            2300,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["no se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            3,
            "Playera",
            "Playera invisible",
            99999,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            4,
            "Playera",
            "Playera con tirantes",
            300,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            5,
            "Playera",
            "Pollo",
            450,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "no huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            6,
            "Playera",
            "Playera que vuela",
            777,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            7,
            "Playera",
            "Playa",
            888,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            8,
            "Playera",
            "Plancha",
            999,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            9,
            "Playera",
            "Plancha",
            10000,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
    ];

    localStorage.setItem("catalogo",JSON.stringify(listaProductos))
}




function addProducto(item) {
    const lista = JSON.parse(localStorage.getItem("catalogo"));
    lista.push(lista);
    localStorage.setItem("catalogo", JSON.stringify(lista))
}


function editProducto(item){
    const lista = JSON.parse(localStorage.getItem("catalogo"));
    const index = (lista).findIndex((v) => v.idProducto === item.idProducto);
    lista[index] = item;
    localStorage.setItem("catalogo", JSON.stringify(lista))
}

function deleteProducto(item){
    const lista = JSON.parse(localStorage.getItem("catalogo"));
    const index = (lista).findIndex((v) => v.idProducto === item.idProducto);

    lista.splice(index,1);

    localStorage.setItem("catalogo", JSON.stringify(lista))
}



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
    const formulario = document.getElementById('form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {

            e.preventDefault();

            const data = Object.fromEntries(new FormData(e.target).entries());


            const lista = JSON.parse(localStorage.getItem("catalogo"));
            
            let talla = [];
            if(data["size-c"]) talla.push("C");
            if(data["size-g"]) talla.push("G");
            if(data["size-m"]) talla.push("M");


            let color = [];
            if(data["color-azul"]) color.push("Azul");
            if(data["color-blanco"]) color.push("Blanco");
            if(data["color-gris"]) color.push("Gris");
            if(data["color-negro"]) color.push("Negro");
            if(data["color-rojo"]) color.push("Rojo");

            const nuevo = new Producto(
                lista.at(-1).idProducto +1,
                data.categoria,
                data.nombre,
                data.precio,
                talla,
                color,
                data.diseno,
                data.descripcion.split("\n"),
                data.stock,
                data.imagen.name,
                data.descuento
            )

            addProducto(nuevo)

            formulario.reset();
        });
    }
});



