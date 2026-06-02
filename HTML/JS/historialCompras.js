let calificacionSeleccionada = 0;

/**@type {Usuario} */
let usuario

/**@type {Review[]} */
let reviews = []

let pedidoSeleccionadoResena = null;

const ESTADOS_PEDIDO = [
  { text: "Recepcion del pedido", aliases: ["Recepción del pedido", "Recepcion del pedido"], class: "check-res" },
  { text: "Creación del pedido", aliases: ["Creación del pedido", "Creacion del pedido"], class: "check-cre" },
  { text: "Envío del pedido", aliases: ["Envío del pedido", "Envio del pedido"], class: "check-env" },
  { text: "Entregado", aliases: ["Entregado"], class: "check-ent" }
];

async function getUsuarioActual() {
  try {

    const token = JSON.parse( localStorage.getItem("token"));
    usuarioON = await fetchJson(URL_BASE+"/api/v1/auth",{
        headers: {
            "Authorization": `Bearer ${token.token}`,
        },
    });

    return usuarioON;
  } catch (error) {
    console.warn("El usuario guardado no es un JSON válido:", error);
    return null;
  }
}

function normalizarEstado(estado = "") {
  const encontrado = ESTADOS_PEDIDO.find((item) => item.aliases.includes(estado));
  return encontrado ? encontrado.text : estado;
}

function getPedidosLocales(usuario) {
  const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos") || "[]");

  if (!usuario) return pedidosGuardados;

  const idUsuario = usuario.idUsuario ?? usuario.id_usuario ?? usuario.id;
  if (!idUsuario) return pedidosGuardados;

  return pedidosGuardados.filter((pedido) => {
    const pedidoIdUsuario = pedido.idUsuario ?? pedido.id_usuario ?? pedido.usuario?.idUsuario ?? pedido.usuario?.id_usuario;
    return !pedidoIdUsuario || String(pedidoIdUsuario) === String(idUsuario);
  });
}

async function getPedidosUsuario(usuario) {
  const idUsuario = usuario?.idUsuario ?? usuario?.id_usuario ?? usuario?.id;

  if (typeof fetchJson === "function" && typeof URL_BASE !== "undefined" && idUsuario) {
    try {
          const token = JSON.parse( localStorage.getItem("token"));

      const pedidosApi = await fetchJson(`${URL_BASE}/api/v1/detalles-pedidos/historial`,{

        headers: {
                "Authorization": `Bearer ${token.token}`,
        },
      });
      if (Array.isArray(pedidosApi)) {
        localStorage.setItem("pedidos", JSON.stringify(pedidosApi));
        return pedidosApi;
      }
    } catch (error) {
      console.warn("No se pudo conectar con el backend. Se usará respaldo local:", error);
    }
  }

  return getPedidosLocales(usuario);
}

function getProductoPedido(pedido) {
  return pedido.producto || pedido.productoDTO || pedido.detalle?.producto || pedido;
}

function getImagenPedido(pedido) {
  const producto = getProductoPedido(pedido);
  return producto.imagen || producto.img || pedido.imagen || pedido.img || "Pictures/productos/sin-imagen.png";
}

/**@param {Pedido} pedido */
function getPedidoId(pedido) {
  return pedido.pedido.id_pedido;
}

function getProductoId(pedido) {
  const producto = getProductoPedido(pedido);
  return producto.idProducto ?? producto.id_producto ?? producto.id ?? producto.sku ?? producto.nombreProducto ?? producto.nombre ?? "producto";
}

function getReviewKey(pedido) {
  
  const idUsuario = usuario.id_usuario;
  const idPedido = getPedidoId(pedido);
  return `${idUsuario}-${idPedido}`;
}

function pedidoYaTieneResena(pedido) {
  const key = getReviewKey(pedido);
  
  return reviews.some((review) => String(review.pedido.id_pedido) === String(getPedidoId(pedido)));
}

function getPrecioPedido(pedido) {
  const valor = pedido.total ?? pedido.precioTotal ?? pedido.precio ?? getProductoPedido(pedido).precio ?? 0;
  const numero = Number(valor);
  return Number.isFinite(numero) ? `$${numero.toFixed(2)}` : valor;
}

async function render() {
    usuario = await getUsuarioActual()

  const container = document.querySelector(".state-container");
  if (!container) return;

  container.innerHTML = "";

  if (!usuario) {
    container.innerHTML = `<div class="text-center p-5"><h3>Por favor, inicia sesión para ver tu historial de compras.</h3></div>`;
    return;
  }

  const pedidos = await getPedidosUsuario(usuario);

  if (!pedidos.length) {
    container.innerHTML = `<div class="text-center p-5"><h3>Aún no has realizado ninguna compra con nosotros.</h3></div>`;
    return;
  }

  let check1 = document.getElementById("btncheck1")?.checked;
  let check2 = document.getElementById("btncheck2")?.checked;
  let check3 = document.getElementById("btncheck3")?.checked;
  let check4 = document.getElementById("btncheck4")?.checked;

  if (!(check1 || check2 || check3 || check4)) {
    check1 = check2 = check3 = check4 = true;
  }

  const filtros = {
    "Recepcion del pedido": check1,
    "Creación del pedido": check2,
    "Envío del pedido": check3,
    "Entregado": check4
  };

  const filtrado = pedidos.filter((pedido) => filtros[normalizarEstado(pedido.estado_pedido)]);

  if (!filtrado.length) {
    container.innerHTML = `<div class="text-center p-5"><h3>No hay pedidos con los filtros seleccionados.</h3></div>`;
  } else {
    filtrado.forEach((pedido) => container.append(generateHMTL(pedido)));
  }

}

/**@param {DetallePedido} pedido*/
function generateHMTL(pedido) {
  const estadoPedido = normalizarEstado(pedido.estado_pedido);
  const indexPedido = ESTADOS_PEDIDO.findIndex((estado) => estado.text === estadoPedido);
  const producto = getProductoPedido(pedido);

  const container = document.createElement("div");
  container.className = "state-div mb-3 " + (indexPedido !== -1 ? ESTADOS_PEDIDO[indexPedido].class : "");

  const stateImg = document.createElement("div");
  stateImg.className = "state-img";
  const img = document.createElement("img");
  img.src = getImagenPedido(pedido);
  img.alt = producto.nombreProducto || producto.nombre || "Producto";
  img.onerror = () => { img.src = "Pictures/productos/sin-imagen.png"; };
  stateImg.appendChild(img);

  const stateName = document.createElement("div");
  stateName.className = "state-name";
  const title = document.createElement("h3");
  title.textContent = producto.nombreProducto || producto.nombre || "Producto";
  const description = document.createElement("p");
  description.textContent = producto.descripcion || pedido.descripcion || "";
  stateName.append(title, description);

  const reviewBox = document.createElement("div");
  reviewBox.className = "state-review";

  if (estadoPedido === "Entregado" && !pedidoYaTieneResena(pedido)) {
    const reviewButton = document.createElement("button");
    reviewButton.type = "button";
    reviewButton.className = "btn-tinta-nomada-degradado btn-review-pedido";
    reviewButton.textContent = "Dejar una reseña";
    reviewButton.addEventListener("click", () => abrirModalResena(pedido));
    reviewBox.appendChild(reviewButton);
  }

  const statePrice = document.createElement("div");
  statePrice.className = "state-price";

  const row1 = document.createElement("div");
  row1.className = "state-row";
  const cantidadTitle = document.createElement("div");
  cantidadTitle.className = "state-row-title";
  cantidadTitle.textContent = "Cantidad:";
  const totalTitle = document.createElement("div");
  totalTitle.className = "state-row-title";
  totalTitle.textContent = "Total:";
  row1.append(cantidadTitle, totalTitle);

  const row2 = document.createElement("div");
  row2.className = "state-row";
  const cantidadValue = document.createElement("div");
  cantidadValue.className = "state-row-value";
  cantidadValue.textContent = pedido.cantidad ?? pedido.detalle?.cantidad ?? 1;
  const totalValue = document.createElement("div");
  totalValue.className = "state-row-value";
  totalValue.textContent = getPrecioPedido(pedido);
  row2.append(cantidadValue, totalValue);
  statePrice.append(row1, row2);

  const stateStatus = document.createElement("div");
  stateStatus.className = "state-stateesc";

  const statusTitle = document.createElement("div");
  statusTitle.className = "state-stateesc-title";
  statusTitle.textContent = "Estado";

  const currentStatus = document.createElement("div");
  currentStatus.className =  (indexPedido !== -1 ? ESTADOS_PEDIDO[indexPedido].class : "") + " " + "state-stateesc-current ";
  currentStatus.textContent = estadoPedido || "Sin estado";

  const statusList = document.createElement("div");
  statusList.className = "state-stateesc-list";

  ESTADOS_PEDIDO.forEach((state, index) => {
    const p = document.createElement("p");
    const icon = document.createElement("i");
    icon.className = index <= indexPedido ? `bi bi-check check ${state.class}` : `bi bi-check check uncheck ${state.class}`;
    p.append(icon, " " + state.text);
    statusList.appendChild(p);
  });

  stateStatus.append(statusTitle, currentStatus, statusList);
  container.append(stateImg, stateName, reviewBox, statePrice, stateStatus);
  return container;
}

function abrirModalResena(pedido = null) {
  pedidoSeleccionadoResena = pedido;

  const producto = pedido ? getProductoPedido(pedido) : null;
  const descripcionProducto = document.getElementById("modal-descripcion-producto");
  if (descripcionProducto && producto) {
    descripcionProducto.textContent = producto.descripcion || pedido.descripcion || "Comparte cómo fue tu experiencia con este producto.";
  }

  const modalOverlay = document.getElementById("modal-resena-steam");
  if (modalOverlay) modalOverlay.style.display = "flex";
}

function cerrarModalResena() {
  const modalOverlay = document.getElementById("modal-resena-steam");
  if (modalOverlay) modalOverlay.style.display = "none";
}

async function enviarResenaFlotante(event) {
  event.preventDefault();

  const inputNombre = document.getElementById("modal-nombre");
  const inputComentario = document.getElementById("modal-comentario");
  const estrellas = document.querySelectorAll(".selector-estrellas-modal span");

  if (calificacionSeleccionada === 0) {
    alert("Por favor, selecciona una calificación con las estrellas.");
    return;
  }

  /**@type {Review} */
  const datosResena = {
    calificacion: calificacionSeleccionada,
    comentario: inputComentario?.value || "",
    fecha_review: new Date(),
    pedido: {
      id_pedido: pedidoSeleccionadoResena ? getPedidoId(pedidoSeleccionadoResena) : null
    }
  }
  

  try {
    if (typeof fetchJson === "function" && typeof URL_BASE !== "undefined") {



    const token = JSON.parse( localStorage.getItem("token"));
      await fetch(`${URL_BASE}/api/v1/reviews`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" ,
            "Authorization": `Bearer ${token.token}`,
        },
        body: JSON.stringify(datosResena)
      });
    }
  } catch (error) {
    console.warn("No se pudo enviar la reseña al backend. Se guardará localmente:", error);
  }

  const reviewsLocales = JSON.parse(localStorage.getItem("reviews") || "[]");
  const existe = reviewsLocales.some((review) => review.reviewKey === datosResena.reviewKey);
  if (!existe) {
    reviewsLocales.push(datosResena);
    localStorage.setItem("reviews", JSON.stringify(reviewsLocales));
  }

  alert("¡Muchas gracias! Tu reseña ha sido publicada con éxito.");
  cerrarModalResena();
  if (inputNombre) inputNombre.value = "";
  if (inputComentario) inputComentario.value = "";
  calificacionSeleccionada = 0;
  pedidoSeleccionadoResena = null;
  estrellas.forEach((e) => e.style.color = "#ccc");
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  const token = JSON.parse( localStorage.getItem("token"));

  fetchJson(URL_BASE+"/api/v1/reviews/user",{
    headers: {
      "Authorization": `Bearer ${token.token}`,
    }
  }).then(val => {
    reviews = val
  })

  const estrellas = document.querySelectorAll(".selector-estrellas-modal span");

  estrellas.forEach((estrella, index) => {
    estrella.addEventListener("mouseover", () => {
      estrellas.forEach((e, idx) => {
        e.style.color = idx <= index ? "#FFD700" : "#ccc";
      });
    });

    estrella.addEventListener("mouseleave", () => {
      estrellas.forEach((e, idx) => {
        e.style.color = idx < calificacionSeleccionada ? "#FFD700" : "#ccc";
      });
    });

    estrella.addEventListener("click", () => {
      calificacionSeleccionada = index + 1;
      estrellas.forEach((e, idx) => {
        e.style.color = idx < calificacionSeleccionada ? "#FFD700" : "#ccc";
      });
    });
  });
});
