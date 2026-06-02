/* MAITTE */

// Función que se dispara al querer editar un producto
function prepararEdicion(id) {
    // 1. Buscar los datos del producto por su ID
    // (Simulación de búsqueda)
    const productoAEditar = { id: 1, descuento: "15", personalizado: true };

    // 2. Rellenar los campos de tu HTML
    const inputDescuento = document.getElementById("descuento");
    const switchDiseno = document.getElementById("customDesign");

    inputDescuento.value = productoAEditar.descuento;
    switchDiseno.checked = productoAEditar.personalizado;
}

async function addProducto(item) {
  try {
  const token = JSON.parse( localStorage.getItem("token"));
    const response = await fetch(URL_BASE + "/api/v1/productos", {
      method: "POST",
      headers: {
                "Authorization": `Bearer ${token.token}`,
      },
      body: item,
    });
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    console.log("Datos cargados a la base de datos:", item);
    return true;
  } catch (error) {
    console.error("No se pudo conectar con el backend:", error);
    return false;
  }
}

/**@param {Producto} item */
async function editProducto(item,id) {

  try {
    console.log(item)
  const token = JSON.parse( localStorage.getItem("token"));
    const response = await fetch(URL_BASE+"/api/v1/productos/"+id,{
      method: 'PUT',
      headers: {
                "Authorization": `Bearer ${token.token}`,
      },
      body: item,
    })
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    console.log("Datos cargados a la base de datos:", item);
    return true;
  } catch (error) {
    console.error("No se pudo conectar con el backend:", error);
    return false;
  }
}

async function deleteProducto(item) {
    // Eliminar producto de la base de datos a través de la API
    try {
        const response = await fetch(URL_BASE + "/api/v1/productos/" + item.id, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error("Error al eliminar el producto");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function validarNombre() {
    const nombre = document.getElementById("contact-name").value.trim();
    if (nombre === "") {
        return "El nombre es obligatorio.";
    }
    if (!/\d/.test(nombre)) {
        return "";
    } else {
        return "El nombre sin números";
    }
}

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
}

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
    const precio = parseFloat(input.value.trim());

    if (precio && precio > 0) {
        return "";
    } else {
        return "El numero debe ser mayor a 0.";
    }
}

function validarDescuento(input) {
    const precio = parseInt(input.value.trim());
    if (!isNaN(precio) && precio >= 0 && precio <= 100) {
        return "";
    } else {
        return "El descuento debe ser un numero entre 0 y 100.";
    }
}

// Validar mensaje
function validarMensaje(input) {
    const mensaje = input.value.trim();
    if (mensaje.length > 0 && mensaje.length <= 250) {
        return "";
    } else {
        return "Coloca un mensaje";
    }
}

const params = new URLSearchParams(window.location.search);

/*const lista = JSON.parse(localStorage.getItem("catalogo"));
const index = (lista).findIndex((v) => v.id === parseInt(params.get("id")));
const elementoActual = lista[index];*/

/* LEI */

/* ERICK */
const inputImagen = document.getElementById("inputImagen");
const preview = document.getElementById("preview");
const guardarBtn = document.getElementById("guardarBtn");

// Mostrar vista previa al subir
inputImagen.addEventListener("change", function (event) {
    const archivo = event.target.files[0];
    if (archivo) {
        const imagenURL = URL.createObjectURL(archivo);
        preview.src = imagenURL;
        preview.classList.remove("d-none");
    }
});

// Botón para cambiar imagen (abre el selector otra vez)
guardarBtn.addEventListener("click", function () {
    inputImagen.click();
});

/* FER */

/* GIO */

/* CHUCHO */
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
};

/* OSWALDO */

/* ALE */

document.addEventListener("DOMContentLoaded", async () => {
    const formulario = document.getElementById("form-edit-producto");
    const id = params.get("id");

    const response = await fetch(`${URL_BASE}/api/v1/productos/${id}`);

    /**@type {Producto} */
    const elementoActual = await response.json();

    console.log(elementoActual);

    if (formulario) {
        formulario.querySelector('select[name="categoria"]').value =
            elementoActual.categoria.id_categoria;
        formulario.querySelector('input[name="color-azul"]').checked =
            elementoActual.color === "Azul";
        formulario.querySelector('input[name="color-blanco"]').checked =
            elementoActual.color === "Blanco";
        formulario.querySelector('input[name="color-gris"]').checked =
            elementoActual.color === "Gris";
        formulario.querySelector('input[name="color-negro"]').checked =
            elementoActual.color === "Negro";
        formulario.querySelector('input[name="color-rojo"]').checked =
            elementoActual.color === "Rojo";
        formulario.querySelector('textarea[name="descripcion"]').value =
            elementoActual.descripcion;
        formulario.querySelector('input[name="descuento"]').value =
            elementoActual.descuento;
        formulario.querySelector('input[name="nombre"]').value =
            elementoActual.nombre;
        formulario.querySelector('input[name="precio"]').value =
            elementoActual.precio;
        formulario.querySelector('input[name="size-c"]').checked =
            elementoActual.talla === "C";
        formulario.querySelector('input[name="size-m"]').checked =
            elementoActual.talla === "M";
        formulario.querySelector('input[name="size-g"]').checked =
            elementoActual.talla === "G";
        formulario.querySelector('input[name="stock"]').value =
            elementoActual.stock;

        formulario.addEventListener("submit", async (e) => {
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
                    default:
                        salida = "";
                }
                if (salida !== "") {
                    const feedback = e1.querySelector(".invalid-feedback");
                    if (feedback) feedback.innerText = salida;
                    input.setCustomValidity(salida);
                } else {
                    input.setCustomValidity("");
                }
            });

            if (!formulario.checkValidity()) {
                e.preventDefault();
                return;
            }

            e.preventDefault();

            const data = Object.fromEntries(new FormData(e.target).entries());

            // Los datos del catálogo se obtienen de la API
            // const lista = JSON.parse(localStorage.getItem("catalogo"));

            let talla = [];
            if (data["size-c"]) talla.push("C");
            if (data["size-g"]) talla.push("G");
            if (data["size-m"]) talla.push("M");

            let color = [];
            if (data["color-azul"]) color.push("Azul");
            if (data["color-blanco"]) color.push("Blanco");
            if (data["color-gris"]) color.push("Gris");
            if (data["color-negro"]) color.push("Negro");
            if (data["color-rojo"]) color.push("Rojo");

            if (color.length === 0) {
                color = [null];
            }
            if (talla.length === 0) {
                talla = [null];
            }

            let cuenta = 1;

            color.forEach((c) => {
                talla.forEach((t) => {

                    const nuevo = new Producto({
                        id_producto: parseInt(params.get("id")),
                        categoria:{
                            id_categoria: data.categoria
                        },
                        nombre: data.nombre,
                        precio: data.precio,
                        talla: t,
                        color: c,
                        diseno: data.diseno,
                        descripcion: data.descripcion,
                        stock: data.stock,
                        imagen: inputImagen.files[0]?.name || "",
                        descuento: data.descuento,
                    });

                    const formData = new FormData();
                    formData.append("id_producto",parseInt(params.get("id")));
                    formData.append("categoria.id_categoria", data.categoria);
                    formData.append("nombre",data.nombre);
                    formData.append("precio",data.precio);
                    formData.append("talla",t);
                    formData.append("color",c);
                    formData.append("diseno",data.diseno? true : false);
                    formData.append("descripcion",data.descripcion);
                    formData.append("stock",data.stock);
                    formData.append("imagen",inputImagen.files[0]?.name || "");
                    formData.append("descuento",data.descuento);
                    formData.append("imagenFile",inputImagen.files[0]);
                    console.log(data.categoria)
                    if(cuenta == 1){
                        editProducto(formData,parseInt(params.get("id")));
                    }else{
                        addProducto(formData);
                    }
                    cuenta++;

                });
            });

            /* Conexion con el backend */

            appendAlert("Genial, se han guardado los cambios", "success");
        });
    }
});

/*parseInt(params.get("id")),
                data.categoria,
                data.nombre,
                data.precio,
                talla,
                color,
                data.diseno,
                data.descripcion.split("\n"),
                data.stock,
                data.imagen.name,
                data.descuento*/

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

/*
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
}*/
