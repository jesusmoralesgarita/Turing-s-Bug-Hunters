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
async function editProducto(item) {
  // Editar producto en la base de datos a través de la API
  try {
    const response = await fetch(URL_BASE + "/api/v1/productos/" + item.idProducto, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
    if (!response.ok) {
      throw new Error("Error al editar el producto");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function deleteProducto(item) {
  // Eliminar producto de la base de datos a través de la API
  try {
    const response = await fetch(URL_BASE + "/api/v1/productos/" + item.idProducto, {
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
  const precio = parseInt(input.value.trim());
  if (precio && precio > 0) {
    return "";
  } else {
    return "El numero debe ser mayor a 0.";
  }
}
function validarDescuento(input) {
  const precio = parseInt(input.value.trim());
  console.log(precio)
  if (precio >= 0 && precio <= 100) {
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
  } else {
    return "Coloca un mensaje";
  }
}
/* LEI */
/* ERICK */
const inputImagen = document.getElementById("inputImagen");
const preview = document.getElementById("preview");
const guardarBtn = document.getElementById("guardarBtn");
inputImagen.addEventListener("change", function (event) {
  const archivo = event.target.files[0];
  if (archivo) {
    const imagenURL = URL.createObjectURL(archivo);
    preview.src = imagenURL;
    preview.classList.remove("d-none");
    const uploadIcon = document.querySelector(".upload-icon");
    const uploadText = document.querySelector(".upload-area p");
    if (uploadIcon) uploadIcon.classList.add("d-none");
    if (uploadText) uploadText.classList.add("d-none");
  }
});
guardarBtn.addEventListener("click", function (e) {
  e.preventDefault();
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
    ` <div>${message}</div>`,
    ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder.append(wrapper);
};
/* OSWALDO */
//<------Alex------>
/* ALE */
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-agregar-producto");
  if (formulario) {
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
      console.log("validar");
      formulario.classList.add("was-validated");
      formulario.querySelectorAll(".form-element").forEach((e1) => {
        const input = e1.getElementsByTagName("input")[0];
        let salida = "";
        console.log(input);
        if (input) {
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
        }
      });
      if (!formulario.checkValidity()) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      let talla = [];
      if (data["size-c"]) talla.push("CH");
      if (data["size-g"]) talla.push("G");
      if (data["size-m"]) talla.push("M");
      let color = [];
      if (data["color-azul"]) color.push("Azul");
      if (data["color-blanco"]) color.push("Blanco");
      if (data["color-gris"]) color.push("Gris");
      if (data["color-negro"]) color.push("Negro");
      if (data["color-rojo"]) color.push("Rojo");
      if (talla.length === 0) {
        talla = [null];
      }
      if (color.length === 0) {
        color = [null];
      }
      let guardadoExitoso = true;
      talla.forEach((t) => {
        color.forEach(async(c) => {


          const form = new FormData();
          form.append("descripcion",data.descripcion);
          form.append("color",c);
          form.append("diseno",data.diseno ? true : false);
          form.append("descuento", parseInt(data.descuento) || 0);
          console.log(document.getElementById("inputImagen").files[0])
          form.append("imagenFile",document.getElementById("inputImagen").files[0]);
          form.append("imagen",data.imagen.name);
          form.append("nombre",data.nombre);
          form.append("precio",parseFloat(data.precio));
          form.append("stock",parseInt(data.stock) || 0);
          form.append("talla",t);
          form.append("categoria.id_categoria",parseInt(data.categoria))
/*
const nuevo = new Producto({
categoria: {
    id_categoria: parseInt(data.categoria),
},
descripcion: data.descripcion,
color: c,
diseno: data.diseno ? true : false,
descuento: parseInt(data.descuento) || 0,
imagen: data.imagen && data.imagen.name ? "/images/" + data.imagen.name : "/images/placeholder.png",
nombre: data.nombre,
precio: parseFloat(data.precio),
stock: parseInt(data.stock) || 0,
talla: t,

      });
      */
       guardadoExitoso = guardadoExitoso && await addProducto(form);
        });
      });
      /*{
        tipoProducto: data.categoria,
        nombreProducto: data.nombre,
        precio: parseFloat(data.precio),
        talla: talla,
        color: color,
        diseño: data.diseno ? true : false,
        descripcion: data.descripcion ? data.descripcion.split("\n") : [],
        cantidad: parseInt(data.stock) || 0,
        imagen:
          data.imagen && data.imagen.name
            ? "/images/" + data.imagen.name
            : "/images/placeholder.png",
        descuento: data.descuento,
      };*/
      if (guardadoExitoso) {
        appendAlert(
          "Genial, se han guardado los cambios en el servidor",
          "success",
        );
        formulario.reset();
        if (preview) preview.classList.add("d-none");
        const uploadIcon = document.querySelector(".upload-icon");
        const uploadText = document.querySelector(".upload-area p");
        if (uploadIcon) uploadIcon.classList.remove("d-none");
        if (uploadText) uploadText.classList.remove("d-none");
      } else {
        appendAlert(
          "Error al intentar guardar el producto en el servidor",
          "danger",
        );
      }
    });
  }
});
//<------Alex------>
