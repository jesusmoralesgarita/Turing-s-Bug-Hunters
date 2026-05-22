/* Gio */
const productos = document.querySelectorAll(".producto");
const totalElement = document.getElementById("total");

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
    priceSpan.textContent = pedido.precio_total;

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
    controls.appendChild(btnPlus);
    controls.appendChild(qtyInput);
    controls.appendChild(btnMinus);

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

function render() {
    console.log(detalles);
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
    ev.preventDefault()
    if (detalles.length === 0) {
        alert("Tu carrito esta vacio");
    } else {
        ev.preventDefault();

        /**@type {Usuario} */
        // El usuario debe obtenerse de la sesión autenticada en el servidor
        const usuario = await fetch(URL_BASE + "/api/v1/usuarios").then(r => r.json())
        const subir = new Pedido({
            direccion: document.getElementById("dir").value,
            fecha_pedido: new Date(),
            rastreador: "ssadsad",
            usuario: {
                id_usuario: usuario.id_usuario,
            },
        });

        /**@type {Pedido} */
        const responsePedido = await fetch(URL_BASE + "/api/v1/pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(subir),
        });

        const fetchPedido = await responsePedido.json();

        for (const e of detalles) {
            console.log(e);

            e.pedido = {
                id_pedido: fetchPedido.id_pedido,
            };

            e.producto = {
                id_producto: e.producto.id_producto,
            };

            console.log(e);

            const responseDetalle = await fetch(
                URL_BASE + "/api/v1/detalles-pedidos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(e),
                },
            );

            console.log(await responseDetalle.text());
        }

        alert("¡Gracias por tu compra!");

        localStorage.setItem("detalles", "[]");
        detalles = [];
        render();
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

render();
