

function render() {
    let pedidos;
    if (localStorage.getItem("pedidos")) {
        pedidos = JSON.parse( localStorage.getItem("pedidos"))
    }else{
        pedidos = []
        pedidos.push({
            id: 0,
            precio: 300,
            cantidad: 3,
            imagen:"a.png",
            estado: "Entregado",
            fecha : "2016",
            direccion: "Algun lugar",
            rastreador: "dsfdsf",
            producto: {
        idProducto:0,
        tipoProducto: "Playera",
        nombreProducto: "Playera Basica",
        precio:199.99,
        talla:["P", "M", "G"],
        color:["azul", "blanco"],
        diseño:false,
        descripcion:["100 % algodón", "Unisex", "Lavar a máquina en frío con colores similares, secar a baja temperatura"],
        cantidad:3,
        imagen:"../HTML/Pictures/playbasica.png",
        descuento:0,
            }
        })
        localStorage.setItem("pedidos",JSON.stringify(pedidos));
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
            case "Envío del pedido":
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
    select.id = "selector-"+pedido.id

    /* BUTTON CONTAINER */
    const buttonGrid = document.createElement("div");
    buttonGrid.className = "d-grid gap-2";

    /* BUTTON */
    const button = document.createElement("button");
    button.className = "m-2 btn btn-primary "+states[indexPedido].class;
    button.textContent = "Actualizar";
    button.addEventListener("click", (e) => {
        update(pedido.id, document.getElementById("selector-"+pedido.id).value);
    })

    /* APPEND */
    buttonGrid.appendChild(button);

    statusContainer.appendChild(select);
    statusContainer.appendChild(buttonGrid);

    stateStatus.appendChild(statusTitle);
    stateStatus.appendChild(statusContainer);

    /* APPEND ALL */
    container.appendChild(stateImg);
    container.appendChild(stateName);
    container.appendChild(statePrice);
    container.appendChild(stateStatus);

    return container;
}

function update(id,state) {
    let pedidos = JSON.parse( localStorage.getItem("pedidos"));
    const index = pedidos.findIndex((val) => val.id === id );
    pedidos[index].estado = state;

    localStorage.setItem("pedidos", JSON.stringify(pedidos) )
    render();
}


render();