

/**@param {Producto} element*/
function generateHTML(element) {
    const divPrincipal = document.createElement("div");
    divPrincipal.className = "col-md-3 mb-4";

    const divCard = document.createElement("div");
    divCard.className = "card h-100";



    const divDescuento = document.createElement("div");
    if(element.descuento !== 0){
        divDescuento.className = "descuento";
        divDescuento.innerText = `${element.descuento}% DTO`
    }

    const img = document.createElement("img");
    img.src = element.imagen;
    img.className = "card-img-top";
    img.alt = element.nombre;

    const divBody = document.createElement("div");
    divBody.className = "card-body";

    const h5 = document.createElement("h5");
    h5.innerText = element.nombre;
    h5.className = "card-title";

    const pBody = document.createElement("p");
    pBody.className = "card-text";

    const spanPrice = document.createElement("span");
    spanPrice.className = "price";
    spanPrice.innerText ="$"+ parseFloat(element.precio * (1- element.descuento*0.01) ).toFixed(2);


    if (element.descuento !== 0) {
        const spanDiscount = document.createElement("span");
        spanDiscount.className = "price-discount";
        spanDiscount.innerText ="$"+ parseFloat(element.precio).toFixed(2);
        spanPrice.append(spanDiscount)
    }

    const spanDetails = document.createElement("span");
    spanDetails.className = "details";
    spanDetails.innerHTML = element.descripcion.split("\n").map((e) => {
        return "• " + e + "<br>";
    });

    const button = document.createElement("button");
    button.className =
        "btn btn-custom d-flex justify-content-between align-items-center";
    button.addEventListener("click", (e) => {
        // El carrito se maneja a través de la API
        window.location.href = "./agregarCarrito.html?id="+element.id_producto

    });

    const spanButton = document.createElement("span");
    spanButton.innerHTML =
        '<i class="bi bi-plus-circle me-2"></i> Agregar al carrito';

    const iButton = document.createElement("i");
    iButton.className = "bi bi-chevron-down";

    button.append(spanButton, iButton);
    pBody.append(spanPrice, spanDetails);
    divBody.append(h5, pBody, button);
    divCard.append(img, divBody,divDescuento);
    divPrincipal.append(divCard);

    return divPrincipal;
}


/**@param {Producto} producto*/
function crearTarjetaProducto(producto) {
    // 1. Crear el contenedor principal (<article>)
    const article = document.createElement('article');
    article.className = 'col producto-item';

    // 2. Crear la tarjeta (<div>)
    const card = document.createElement('div');
    card.className = 'card producto-card h-100';

    // 3. Crear la imagen (<img>)
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.alt = producto.nombre;
    img.src = producto.imagen;

    // 4. Crear el cuerpo de la tarjeta (<div>)
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // 5. Crear el título (<h5>)
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = producto.nombre;

    // 6. Crear el texto/descripción (<p>)
    const cardText = document.createElement('p');
    cardText.className = 'card-text';

    // Precio (<span>)
    const spanPrice = document.createElement('span');
    spanPrice.className = "price";
    spanPrice.innerText ="$"+ parseFloat(producto.precio * (1- producto.descuento*0.01) ).toFixed(2);


    if (producto.descuento !== 0) {
        const spanDiscount = document.createElement("span");
        spanDiscount.className = "price-discount";
        spanDiscount.innerText ="$"+ parseFloat(producto.precio).toFixed(2);
        spanPrice.append(spanDiscount)
    }


    // Detalles (<span>)
    const spanDetails = document.createElement('span');
    spanDetails.className = "details";
    spanDetails.innerHTML = producto.descripcion.split("\n").map((e) => {
        return "• " + e + "<br>";
    });
    // Agregar spans al texto de la tarjeta
    cardText.appendChild(spanPrice);
    cardText.appendChild(spanDetails);

    // 7. Crear el botón (<button>)
    const button = document.createElement('button');
    button.type = 'button';
    button.addEventListener("click", (e) => {
        // El carrito se maneja a través de la API
        window.location.href = "./agregarCarrito.html?id="+producto.id_producto

    });
    button.className = 'btn btn-custom d-flex justify-content-between align-items-center';

    // Contenido izquierdo del botón (<span> con icono y texto)
    const btnSpan = document.createElement('span');
    const iconPlus = document.createElement('i');
    iconPlus.className = 'bi bi-plus-circle me-2';
    
    btnSpan.appendChild(iconPlus);
    btnSpan.appendChild(document.createTextNode('Agregar al carrito'));

    // Icono derecho del botón (<i>)
    const iconChevron = document.createElement('i');
    iconChevron.className = 'bi bi-chevron-down';

    // Agregar elementos al botón
    button.appendChild(btnSpan);
    button.appendChild(iconChevron);

    // 8. Ensamblar toda la estructura
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(button);

    card.appendChild(img);
    card.appendChild(cardBody);

    article.appendChild(card);

    // Retornamos el nodo completo listo para ser insertado en el HTML
    return article;
}



async function render() {

    /**@type {Producto[]} */
    const lista = await (( fetchJson(URL_BASE +"/api/v1/productos")))



    console.log(lista)

    let tmp = lista.filter((v) => v.categoria.categoria === "Playeras");
    tmp.forEach((e) =>
        document.getElementById("contenedor-playeras").append(crearTarjetaProducto(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria === "Tazas");
    tmp.forEach((e) =>
        document.getElementById("contenedor-tazas").append(crearTarjetaProducto(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria === "Sudaderas");
    tmp.forEach((e) =>
        document.getElementById("contenedor-sudaderas").append(crearTarjetaProducto(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria === "Vasos");
    tmp.forEach((e) =>
        document.getElementById("contenedor-vasos").append(crearTarjetaProducto(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria === "Plumas");
    tmp.forEach((e) =>
        document.getElementById("contenedor-plumas").append(crearTarjetaProducto(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria=== "Pines");
    tmp.forEach((e) =>
        document.getElementById("contenedor-pins").append(crearTarjetaProducto(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria=== "Stickers");
    tmp.forEach((e) =>
        document.getElementById("contenedor-stickers").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.descuento > 0);
    tmp.forEach((e) =>
        document.getElementById("contenedor-descuento").append(generateHTML(e)),
    );
}

render();
