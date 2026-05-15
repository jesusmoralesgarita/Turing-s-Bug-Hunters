
class ProductoCarrito {
    constructor(cantidad, imagenCargada, tallaSeleccionada, producto) {
        this.cantidad = cantidad;
        this.imagenCargada = imagenCargada;
        this.tallaSeleccionada = tallaSeleccionada;
        this.producto = producto;
    }
}

/**@param {Producto} element*/
function generateHTML(element) {
    const divPrincipal = document.createElement("div");
    divPrincipal.className = "col-md-3 mb-4";

    const divCard = document.createElement("div");
    divCard.className = "card h-100";

    const img = document.createElement("img");
    img.src = element.imagen;
    img.className = "card-img-top";
    img.alt = element.nombreProducto;

    const divBody = document.createElement("div");
    divBody.className = "card-body";

    const h5 = document.createElement("h5");
    h5.innerText = element.nombreProducto;
    h5.className = "card-title";

    const pBody = document.createElement("p");
    pBody.className = "card-text";

    const spanPrice = document.createElement("span");
    spanPrice.className = "price";
    spanPrice.innerText ="$"+ parseFloat(element.precio).toFixed(2);

    const spanDetails = document.createElement("span");
    spanDetails.className = "details";
    spanDetails.innerHTML = element.descripcion.map((e) => {
        return "• " + e + "<br>";
    });

    const button = document.createElement("button");
    button.className =
        "btn btn-custom d-flex justify-content-between align-items-center";
    button.addEventListener("click", (e) => {
        const storage = localStorage.getItem("carrito");

        window.location.href = "./agregarCarrito.html?id="+element.idProducto

        if (storage) {
            const carritoStorage = JSON.parse(storage);
            carritoStorage.push(new ProductoCarrito(2, "imagen1", 0, element));
            localStorage.setItem("carrito", JSON.stringify(carritoStorage));
        } else {
            localStorage.setItem(
                "carrito",
                JSON.stringify([new ProductoCarrito(2, "imagen1", 0, element)]),
            );
        }
        console.log(JSON.parse(localStorage.getItem("carrito")));
    });

    const spanButton = document.createElement("span");
    spanButton.innerHTML =
        '<i class="bi bi-plus-circle me-2"></i> Agregar al carrito';

    const iButton = document.createElement("i");
    iButton.className = "bi bi-chevron-down";

    button.append(spanButton, iButton);
    pBody.append(spanPrice, spanDetails);
    divBody.append(h5, pBody, button);
    divCard.append(img, divBody);
    divPrincipal.append(divCard);

    return divPrincipal;
}



async function render() {

    /**@type {Producto[]} */
    const lista = await (( fetchJson(URL_BASE +"/api/v1/productos")))



    console.log(lista)

    let tmp = lista.filter((v) => v.tipoProducto === "Playera");
    tmp.forEach((e) =>
        document.getElementById("contenedor-playeras").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.tipoProducto === "Taza");
    tmp.forEach((e) =>
        document.getElementById("contenedor-tazas").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.tipoProducto === "Sudadera");
    tmp.forEach((e) =>
        document.getElementById("contenedor-sudaderas").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.tipoProducto === "Vaso");
    tmp.forEach((e) =>
        document.getElementById("contenedor-vasos").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.tipoProducto === "Pluma");
    tmp.forEach((e) =>
        document.getElementById("contenedor-plumas").append(generateHTML(e)),
    );

    tmp = lista.filter((v) => v.tipoProducto === "Pin");
    tmp.forEach((e) =>
        document.getElementById("contenedor-pins").append(generateHTML(e)),
    );
}

render();
