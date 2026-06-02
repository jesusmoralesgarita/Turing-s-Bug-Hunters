/* Gio */
const productos = document.querySelectorAll(".producto");
const totalElement = document.getElementById("total");

/**@type {DetallePedido[]} */
let detalles = [];

function calcularTotal() {
    let total = 0;

    detalles.forEach((detalle) => {
        let precio = parseFloat(detalle.precio_total);
        let cantidad = parseInt(detalle.cantidad_producto);

        total += precio * cantidad;
    });

    return total;
}

/**@type {DetallePedido[]} */
detalles = JSON.parse(localStorage.getItem("detalles"));
// Los detalles del carrito se cargarán desde la API
// TODO: Implementar llamada a API para obtener detalles del carrito del usuario autenticado
console.log(detalles);

var usuario;

/**@param {DetallePedido} pedido */
function crearProductoDOM(pedido, id) {
    // CONTENEDOR PRINCIPAL
    const card = document.createElement("div");
    card.className =
        "card-product d-flex justify-content-between align-items-center mb-3 producto";

    // =========================
    // SECCIÓN IZQUIERDA
    // =========================

    const leftSection = document.createElement("div");
    leftSection.className = "d-flex align-items-center gap-3";

    // IMAGEN
    const img = document.createElement("img");
    img.src = pedido.producto.imagen;
    img.width = 80;

    // CONTENEDOR TEXTO
    const textContainer = document.createElement("div");

    // TÍTULO
    const title = document.createElement("h6");
    title.textContent = pedido.producto.nombre;

    // SUBTÍTULO
    const subtitle = document.createElement("small");
    subtitle.className = "text-muted";
    subtitle.textContent = pedido.producto.talla;

    // APPEND TEXTO
    textContainer.appendChild(title);
    textContainer.appendChild(subtitle);

    // APPEND LEFT
    leftSection.appendChild(img);
    leftSection.appendChild(textContainer);

    // =========================
    // SECCIÓN DERECHA
    // =========================

    const rightSection = document.createElement("div");
    rightSection.className = "text-end";

    // PRECIO
    const priceTitle = document.createElement("h6");

    const dollar = document.createTextNode("$");

    const priceSpan = document.createElement("span");
    priceSpan.className = "precio";
    priceSpan.textContent = parseFloat(pedido.precio_total).toFixed(2);

    priceTitle.appendChild(dollar);
    priceTitle.appendChild(priceSpan);

    // CONTROLES CANTIDAD
    const controls = document.createElement("div");
    controls.className = "d-flex align-items-center gap-2 mt-2";

    // BOTÓN +
    const btnPlus = document.createElement("button");
    btnPlus.className = "btn btn-success btn-circle btn-plus";
    btnPlus.textContent = "+";
    btnPlus.addEventListener("click", () => {
        updateCount(id, 1);
    });

    // INPUT CANTIDAD
    const qtyInput = document.createElement("input");
    qtyInput.type = "text";
    qtyInput.value = pedido.cantidad_producto;
    qtyInput.readOnly = true;
    qtyInput.className = "qty-box cantidad";

    // BOTÓN -
    const btnMinus = document.createElement("button");
    btnMinus.className = "btn btn-success btn-circle btn-minus";
    btnMinus.textContent = "-";
    btnMinus.addEventListener("click", () => {
        updateCount(id, -1);
    });

    // APPEND CONTROLES
    controls.appendChild(btnMinus);
    controls.appendChild(qtyInput);
    controls.appendChild(btnPlus);

    // APPEND RIGHT
    rightSection.appendChild(priceTitle);
    rightSection.appendChild(controls);

    // =========================
    // APPEND FINAL
    // =========================

    card.appendChild(leftSection);
    card.appendChild(rightSection);

    return card;
}

async function render() {
    const token = JSON.parse(localStorage.getItem("token"));
    usuario = await fetchJson(URL_BASE + "/api/v1/auth", {
        headers: {
            Authorization: `Bearer ${token.token}`,
        },
    });

    console.log(usuario);

    document.getElementById("dir").value = usuario.direccion;

    document.getElementById("lista-productos").innerHTML = "";
    detalles.forEach((e, i) => {
        document
            .getElementById("lista-productos")
            .append(crearProductoDOM(e, i));
    });

    document.getElementById("total").innerText = calcularTotal();
}

function updateCount(id, add) {
    detalles[id].cantidad_producto += add;
    render();
}

async function pago(ev) {
    ev.preventDefault();

    if (detalles.length === 0) {
        alert("Tu carrito esta vacio");
    } else {
       const subir = new Pedido({
    direccion: document.getElementById("dir").value,
    fecha_pedido: new Date(),
    rastreador: "ssadsad",
    usuario: {
        id_usuario: usuario.id_usuario,
    },
});

const token = JSON.parse(localStorage.getItem("token"));


/**@type {Pedido} */
const responsePedido = await fetch(URL_BASE + "/api/v1/pedidos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
    },
    body: JSON.stringify(subir),
});

const fetchPedido = await responsePedido.json();
console.log(fetchPedido);



// --- 1. PASO NUEVO: LEER TODAS LAS IMÁGENES PRIMERO ---
// Creamos una función promesa para vaciar IndexedDB rápidamente a un array
const obtenerImagenesDeDB = () => {
    return new Promise(async (resolve, reject) => {
        const db = await conectarDB();
        const transaction = db.transaction(["imagenes"], "readonly");
        const objectStore = transaction.objectStore("imagenes");
        const request = objectStore.openCursor();
        const listaImagenes = [];

        request.onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                // Guardamos los datos en memoria (esto es rapidísimo y no cierra la transacción)
                listaImagenes.push({
                    id: cursor.value.id,
                    blob: cursor.value.archivo
                });
                cursor.continue();
            } else {
                // Cuando el cursor termina, devolvemos la lista
                resolve(listaImagenes);
            }
        };

        request.onerror = (event) => reject(event.target.error);
    });
};

try {
    // Obtenemos las imágenes de IndexedDB de forma segura
    const imagenesGuardadas = await obtenerImagenesDeDB();
    console.log(imagenesGuardadas)

    // --- 2. PASO NUEVO: HACER LOS FETCHS UNO A UNO DESDE EL ARRAY ---
    for (let i=0; i < detalles.length; i++) {
        const e = detalles[i];
        const formData = new FormData();

        if (e.producto.diseno) {
            console.log(imagenesGuardadas)
            const imagenData = imagenesGuardadas.find(val => val.id == (i+1))
            const idImagen = imagenData.id;
            const blobImagen = imagenData.blob;
            formData.append("imagenFile", blobImagen); // El blob recuperado
        }


        // Buscamos el detalle correspondiente
        
        
        if (!e) continue; // Si no existe el detalle para este ID, saltamos


        e.pedido = {
            id_pedido: fetchPedido.id_pedido,
        };

        e.producto = {
            id_producto: e.producto.id_producto,
        };

        console.log(e);

        formData.append("cantidad_producto", e.cantidad_producto);
        formData.append("estado_pedido", e.estado_pedido);
        formData.append("imagen", e.imagen);
        formData.append("pedido.id_pedido", e.pedido.id_pedido);
        formData.append("precio_total", e.precio_total);
        formData.append("producto.id_producto", e.producto.id_producto);
        formData.append("rastreador", e.rastreador);

        try {
            if (e.cantidad_producto >0) {
                const responseDetalle = await fetch(
                    URL_BASE + "/api/v1/detalles-pedidos",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token.token}`,
                        },
                        body: formData,
                    },
                );

                console.log(await responseDetalle.text());
            }
        } catch (error) {
            console.error(`Error enviando el detalle ${idImagen}:`, error);
        }
    }

    // --- 3. PROCESO FINAL (Se ejecuta tras enviar todo con éxito) ---
    localStorage.setItem("detalles", "[]");
    detalles = [];

    // Nota: Corregí un pequeño error de sintaxis que tenías aquí (.onsuccess no es una función, es un evento)
    const eliminarDBRequest = indexedDB.deleteDatabase("miAplicacionDB");
    eliminarDBRequest.onsuccess = () => {
        console.log("Base de datos de imágenes eliminada con éxito");
    };

    render();

    const modal = new bootstrap.Modal(
        document.getElementById("successModal"),
    );
    modal.show();

} catch (error) {
    console.error("Error general en el proceso de subida:", error);
}
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

render();

function conectarDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("miAplicacionDB", 1);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}
