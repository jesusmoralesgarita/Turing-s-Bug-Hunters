

async function render() {

    // 1. Obtener pedidos desde el backend
  const token = JSON.parse( localStorage.getItem("token"));
    let response = await fetch(URL_BASE + "/api/v1/detalles-pedidos");
    let pedidos = await response.json();
    console.log(pedidos);

    // 2. Revisar filtros
    let check1 = document.getElementById("btncheck1").checked;
    let check2 = document.getElementById("btncheck2").checked;
    let check3 = document.getElementById("btncheck3").checked;
    let check4 = document.getElementById("btncheck4").checked;

    
    if (!(check1 || check2 || check3 || check4)) {
        check1 = true;
        check2 = true;
        check3 = true;
        check4 = true;
    }

    // 3. Filtrar según estado_pedido
    const filtrado = pedidos.filter((value) => {
    switch(value.estado_pedido){
        case "Recepcion del pedido":
            return check1;
        case "Creación del pedido":
            return check2;
        case "Envío del pedido":
            return check3;
        case "Entregado":
            return check4;
        default: return true;
    }
});

    // 4. Renderizar
    const container = document.getElementsByClassName("state-container").item(0);
    container.innerHTML = "";    
    filtrado.forEach((e) => {
        container.append(generateHMTL(e))
    })

}


/**@param {DetallePedido} pedido */
function generateHMTL(pedido) {

    const states = [
        { text: "Recepcion del pedido", class: "check-res" },
        { text: "Creación del pedido", class: "check-cre" },
        { text: "Envío del pedido", class: "check-env" },
        { text: "Entregado", class: "check-ent" }
    ];
    let indexPedido = states.findIndex((va) => va.text === pedido.estado_pedido);
    
    if (indexPedido == -1){
        indexPedido = 0;
    }
    const container = document.createElement("div");
    container.className = "state-div " + states[indexPedido].class;

    /* IMG */
    const stateImg = document.createElement("div");
    stateImg.className = "state-img";

    const img = document.createElement("img");
    img.src = pedido.imagen;

    stateImg.appendChild(img);

    /* NAME */
    const stateName = document.createElement("div");
    stateName.className = "state-name";

    const title = document.createElement("h3");
    title.textContent = pedido.producto.nombre;

    const description = document.createElement("p");
    description.textContent = pedido.producto.descripcion;

    stateName.appendChild(title);
    stateName.appendChild(description);

    /* PRICE */
    const statePrice = document.createElement("div");
    statePrice.className = "state-price";

    /* ROW 1 */
    const row1 = document.createElement("div");
    row1.className = "state-row";

    const cantidadTitle = document.createElement("div");
    cantidadTitle.className = "state-row-title";
    cantidadTitle.textContent = "Cantidad:";

    const totalTitle = document.createElement("div");
    totalTitle.className = "state-row-title";
    totalTitle.textContent = "Total:";

    row1.appendChild(cantidadTitle);
    row1.appendChild(totalTitle);

    /* ROW 2 */
    const row2 = document.createElement("div");
    row2.className = "state-row";

    const cantidadValue = document.createElement("div");
    cantidadValue.className = "state-row-value";
    cantidadValue.textContent = pedido.cantidad_producto;

    const totalValue = document.createElement("div");
    totalValue.className = "state-row-value";
    totalValue.textContent = parseFloat( pedido.precio_total).toFixed(2);

    row2.appendChild(cantidadValue);
    row2.appendChild(totalValue);

    statePrice.appendChild(row1);
    statePrice.appendChild(row2);

    
    /* STATUS SECTION */
    const stateStatus = document.createElement("div");
    stateStatus.className = "state-stateesc";

    /* STATUS TITLE */
    const statusTitle = document.createElement("div");
    statusTitle.className = "state-stateesc-title";
    statusTitle.textContent = "Estado";

    /* CONTAINER */
    const statusContainer = document.createElement("div");

    /* SELECT */
    const select = document.createElement("select");
    select.className = "form-select form-select-sm";
    select.setAttribute("aria-label", "Default select example");

    /* OPTIONS */
    const options = [
    "Recepcion del pedido",
    "Creación del pedido",
    "Envío del pedido",
    "Entregado"
    ];

    options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;

    select.appendChild(option);
    });

    select.selectedIndex=(indexPedido)
    select.id = "selector-"+pedido.id_detalle;

    /* BUTTON CONTAINER */
    const buttonGrid = document.createElement("div");
    buttonGrid.className = "d-grid gap-2";

    /* BUTTON */
    const button = document.createElement("button");
    button.className = "m-2 btn btn-primary "+states[indexPedido].class;
    button.textContent = "Actualizar";
    button.addEventListener("click", (e) => {
        update(pedido.id_detalle, document.getElementById("selector-"+pedido.id_detalle).value, pedido);
    })

    /* APPEND */
    buttonGrid.appendChild(button);

    statusContainer.appendChild(select);
    statusContainer.appendChild(buttonGrid);

    stateStatus.appendChild(statusTitle);
    stateStatus.appendChild(statusContainer);

    /* APPEND ALL */
    if (pedido.imagen != null && pedido.imagen != "null") {    
        container.appendChild(stateImg);
    }
    container.appendChild(stateName);
    container.appendChild(statePrice);
    container.appendChild(stateStatus);

    return container;
}

async function update(id, state, detalles_pedidos) {
    console.log({ ... detalles_pedidos, estado_pedido: state });
  const token = JSON.parse( localStorage.getItem("token"));
    await fetch(`${URL_BASE}/api/v1/detalles-pedidos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`,
        },
        body: JSON.stringify({ ... detalles_pedidos, estado_pedido: state })
    });
    render();
}


render();