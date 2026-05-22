

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
        const storage = localStorage.getItem("carrito");

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



async function render() {

    /**@type {Producto[]} */
    const lista = await (( fetchJson(URL_BASE +"/api/v1/productos")))



    console.log(lista)

    let tmp = lista.filter((v) => v.categoria.categoria === "Playeras");
    tmp.forEach((e) =>
        document.getElementById("contenedor-playeras").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria === "Tazas");
    tmp.forEach((e) =>
        document.getElementById("contenedor-tazas").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria === "Sudaderas");
    tmp.forEach((e) =>
        document.getElementById("contenedor-sudaderas").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria === "Vasos");
    tmp.forEach((e) =>
        document.getElementById("contenedor-vasos").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria === "Plumas");
    tmp.forEach((e) =>
        document.getElementById("contenedor-plumas").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.categoria.categoria=== "Pines");
    tmp.forEach((e) =>
        document.getElementById("contenedor-pins").append(generateHTML(e)),
    );
}

render();
