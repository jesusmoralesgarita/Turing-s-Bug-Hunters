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
    console.log("11111111111")
    const lista = JSON.parse(localStorage.getItem("catalogo"));
    console.log("2222222")
    lista.push(item);
    console.log("333333")
    localStorage.setItem("catalogo", JSON.stringify(lista))
    console.log("44444")
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
    if (cel.length < 10) {
        return "El número de telefono debe tener al menos 10 digitos.";
    } else {
        return "";
    }

}

function validarNombreProducto(input) {

    const nombre = input.value.trim();
    
    if (nombre.length === 0) {
        return "El nombre no puede quedar vacio.";
    } else {
        return "";
    }

}


function validarPrecio(input) {

    const precio = parseInt( input.value.trim());
    
    if (precio && precio > 0) {
        return "";
    } else {
        return "El numero debe ser mayor a 0.";
    }

}

function validarDescuento(input) {

    const precio = parseInt( input.value.trim());
    
    if (precio && precio >= 0 && precio <= 100) {
        return "";
    } else {
        return "El descuento debe ser un numero entre 0 y 100.";
    }

}



// Validar mensaje
function validarMensaje(input) {
    const mensaje = input.value.trim();
    if (mensaje.length < 0 && mensaje.length <= 250) {
        return "";
    }else{
        return "Coloca un mensaje"
    }

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



/* OSWALDO */




/* ALE */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-agregar-producto');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {



            console.log("validar")
        formulario.classList.add("was-validated");
        formulario.querySelectorAll(".form-element").forEach((e1) => {
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
                case "price":
                    salida = validarPrecio(input);
                    break;
                case "product":
                    salida = validarNombreProducto(input);
                    break;
                case "discount":
                    salida = validarDescuento(input);
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

        if (!formulario.checkValidity()){ 
            e.preventDefault()
            return;
        };


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
    appendAlert('Genial, se han guardado los cambios', 'success')

            formulario.reset();
        });
    }
});



