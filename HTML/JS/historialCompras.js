
async function render() {
    let pedidos;
    // Cargar pedidos desde la API
    try {
        const response = await fetch(URL_BASE + "/api/v1/pedidos");
        if (response.ok) {
            pedidos = await response.json();
        } else {
            pedidos = [];
        }
    } catch (error) {
        console.error("Error al cargar pedidos:", error);
        pedidos = [];
    }

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

    const filtrado = pedidos.filter((value) => {
        switch(value.estado){
            case "Recepcion del pedido":
                return check1;
                break;
            case "Creación del pedido":
                return check2;
                break;
            case "Envio del pedido":
                return check3;
                break;
            case "Entregado":
                return check4;
                break;
        }
    });

    const container = document.getElementsByClassName("state-container").item(0);
    container.innerHTML = "";    
    filtrado.forEach((e) => {
        container.append(generateHMTL(e))
    })

}



function generateHMTL(pedido) {


    const states = [
        { text: "Recepcion del pedido", class: "check-res" },
        { text: "Creación del pedido", class: "check-cre" },
        { text: "Envío del pedido", class: "check-env" },
        { text: "Entregado", class: "check-ent" }
    ];
    const indexPedido = states.findIndex((va) => va.text === pedido.estado)

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
    title.textContent = pedido.producto.nombreProducto;

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
    cantidadValue.textContent = pedido.cantidad;

    const totalValue = document.createElement("div");
    totalValue.className = "state-row-value";
    totalValue.textContent = pedido.precio;

    row2.appendChild(cantidadValue);
    row2.appendChild(totalValue);

    statePrice.appendChild(row1);
    statePrice.appendChild(row2);

    /* STATUS */
    const stateStatus = document.createElement("div");
    stateStatus.className = "state-stateesc";

    /* STATUS TITLE */
    const statusTitle = document.createElement("div");
    statusTitle.className = "state-stateesc-title";
    statusTitle.textContent = "Estado";

    /* CURRENT STATUS */
    const currentStatus = document.createElement("div");
    currentStatus.className = "state-stateesc-current "+states[indexPedido].class;
    currentStatus.textContent = pedido.estado;

    /* STATUS LIST */
    const statusList = document.createElement("div");
    statusList.className = "state-stateesc-list";

    /* ITEMS */
    states.forEach((state,index) => {
        const p = document.createElement("p");

        if (index <= indexPedido) {
            const icon = document.createElement("i");
            icon.className = `bi bi-check check ${state.class}`;

            p.appendChild(icon);
            p.append(" " + state.text);

            statusList.appendChild(p);   
        }else{
            const icon = document.createElement("i");
            icon.className = `bi bi-check ${state.class}`;

            p.appendChild(icon);
            p.append(" " + state.text);

            statusList.appendChild(p);   
        }
    });

    stateStatus.appendChild(statusTitle);
    stateStatus.appendChild(currentStatus);
    stateStatus.appendChild(statusList);

    /* APPEND ALL */
    container.appendChild(stateImg);
    container.appendChild(stateName);
    container.appendChild(statePrice);
    container.appendChild(stateStatus);

    return container;
}

function update() {
    
}


render();