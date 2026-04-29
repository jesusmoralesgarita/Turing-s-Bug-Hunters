class Producto {
    constructor(
        idProducto,
        tipoProducto,
        nombreProducto,
        precio,
        talla,
        color,
        diseño,
        descripcion,
        cantidad,
        imagen,
        descuento,
    ) {
        this.tipoProducto = tipoProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.talla = talla;
        this.color = color;
        this.diseño = diseño;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.descuento = descuento;
    }
}

class ProductoCarrito {
    constructor(cantidad, imagenCargada, tallaSeleccionada, producto) {
        this.cantidad = cantidad;
        this.imagenCargada = imagenCargada;
        this.tallaSeleccionada = tallaSeleccionada;
        this.producto = producto;
    }
}

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


const listaProductos = [
    new Producto(
        0,
        "Playera",
        "Playera Basica",
        199.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        ["100 % algodón", "Unisex", "Lavar a máquina en frío con colores similares, secar a baja temperatura"],
        3,
        "../HTML/Pictures/playbasica.png",
        0,
    ),
    new Producto(
        1,
        "Playera",
        "Polo Basica",
        199.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        ["100 % algodón", "Unisex", "Lavar a máquina en frío con colores similares, secar a baja temperatura"],
        3,
        "../HTML/Pictures/playpolo.png",
        0,
    ),
    new Producto(
        2,
        "Playera",
        "Juego de Playeras",
        379.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        ["100 % algodón", "Unisex", "Lavar a máquina en frío con colores similares, secar a baja temperatura"],
        3,
        "../HTML/Pictures/playjuego.png",
        0,
    ),
    new Producto(
        3,
        "Playera",
        "Playera de Mangas Raglan",
        229.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        ["100 % algodón", "Unisex", "Lavar a máquina en frío con colores similares, secar a baja temperatura"],
        3,
        "../HTML/Pictures/playraglan.png",
        0,
    ),
    new Producto(
        4,
        "Playera",
        "Playera de Compresión Deportiva",
        259.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        ["100 % algodón", "Unisex", "Lavar a máquina en frío con colores similares, secar a baja temperatura"],
        3,
        "../HTML/Pictures/playdeportiva.png",
        0,
    ),
    new Producto(
        5,
        "Taza",
        "Taza clásica (12 Oz)",
        149.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % ceramica",
            "Apta para microondas y lavavajillas"
        ],
        3,
        "../HTML/Pictures/tazaclasica.png",
        0,
    ),
    new Producto(
        6,
        "Taza",
        "Taza Personalizable (12 Oz)",
        199.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % ceramica",
            "Apta para microondas y lavavajillas"
        ],
        3,
        "../HTML/Pictures/tazapersonalizable.png",
        0,
    ),
    new Producto(
        7,
        "Taza",
        "Taza Mágica Rick & Morty (12Oz, Termosensible)",
        299.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % ceramica",
            "Apta para microondas y lavavajillas"
        ],
        3,
        "../HTML/Pictures/tazarickmorty.png",
        0,
    ),
    new Producto(
        8,
        "Taza",
        "Taza Mágica Personalizable (12 Oz, Termosensible)",
        279.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % ceramica",
            "Apta para microondas y lavavajillas"
        ],
        3,
        "../HTML/Pictures/tazatermopers.png",
        0,
    ),
    new Producto(
        9,
        "Taza",
        "Taza Para Parejas (Personalizables)",
        249.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % ceramica",
            "Apta para microondas y lavavajillas"
        ],
        3,
        "../HTML/Pictures/tazaparejas.png",
        0,
    ),
    new Producto(
        10,
        "Sudadera",
        "Classic Pullover Hoodie",
        259.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % algodón",
            "Unisex",
            "Lavar a máquina en frío con colores similares, secar a baja temperatura"
        ],
        3,
        "../HTML/Pictures/ClassicPulloverHoodie.png",
        0,
    ),
    new Producto(
        11,
        "Sudadera",
        "Full Zip Up Hoodie",
        259.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % algodón",
            "Unisex",
            "Lavar a máquina en frío con colores similares, secar a baja temperatura"
        ],
        3,
        "../HTML/Pictures/FullZipUpHoodie.png",
        0,
    ),
    new Producto(
        12,
        "Sudadera",
        "Mock Neck Half Zip",
        259.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % algodón",
            "Unisex",
            "Lavar a máquina en frío con colores similares, secar a baja temperatura"
        ],
        3,
        "../HTML/Pictures/MockNeckHalfZip.png",
        0,
    ),
    new Producto(
        13,
        "Sudadera",
        "Classic Crewneck Sweatshirt",
        259.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % algodón",
            "Unisex",
            "Lavar a máquina en frío con colores similares, secar a baja temperatura"
        ],
        3,
        "../HTML/Pictures/ClassicCrewneckSweatshirt.png",
        0,
    ),
    new Producto(
        14,
        "Sudadera",
        "Button Front Cardigan Hoodie",
        259.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "100 % algodón",
            "Unisex",
            "Lavar a máquina en frío con colores similares, secar a baja temperatura"
        ],
        3,
        "../HTML/Pictures/ButtonFrontCardiganHoodie.png",
        0,
    ),
    new Producto(
        15,
        "Vaso",
        "Termo de viaje",
        189.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Acero inoxidable",
            "Mantiene bebidas calientes por 12 horas y frías por 24 horas"
        ],
        3,
        "../HTML/Pictures/TermodeViaje.png",
        0,
    ),
    new Producto(
        16,
        "Vaso",
        "Vaso Doble Pared con Popote",
        99.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Resistente al impacto",
            "Apto para bebidas frías",
        ],
        3,
        "../HTML/Pictures/VasoDobleParedconPopote.png",
        0,
    ),
    new Producto(
        17,
        "Vaso",
        "Botella de Agua de Acero (750 ml)",
        199.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Resistente al impacto",
            "Mantiene bebidas calientes por 12 horas y frías por 24 horas"
        ],
        3,
        "../HTML/Pictures/BotelladeAguadeAcero.png",
        0,
    ),
    new Producto(
        18,
        "Vaso",
        "Frasco Mason Esmerilado con Popote (32 Oz)",
        149.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Apto para bebidas frías",
            "Cierre hermético para evitar derrames"
        ],
        3,
        "../HTML/Pictures/FrascoMasonEsmeriladoconPopote.png",
        0,
    ),
    new Producto(
        19,
        "Vaso",
        "Termo Insulado con Panel (750 ml)",
        189.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Aislamiento térmico superior",
            "Mantiene bebidas calientes por 12 horas y frías por 24 horas"
        ],
        3,
        "../HTML/Pictures/TermoInsuladoconPanel.png",
        0,
    ),
    new Producto(
        20,
        "Pluma",
        "Bolígrafo Táctico de Agarre",
        39.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Táctico",
            "Diseño ergonómico con agarre antideslizante"
        ],
        3,
        "../HTML/Pictures/BoligrafoTAgarre.png",
        0,
    ),
    new Producto(
        21,
        "Pluma",
        "Portaminas Táctico Multicolor",
        29.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Táctico",
            "Diseño ergonómico con agarre antideslizante"
        ],
        3,
        "../HTML/Pictures/PortaminasMulticolor.png",
        0,
    ),
    new Producto(
        22,
        "Pluma",
        "Pluma Rollerball Luxe",
        69.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Táctico",
            "Diseño ergonómico con agarre antideslizante"
        ],
        3,
        "../HTML/Pictures/PlumaRollerball.png",
        0,
    ),
    new Producto(
        23,
        "Pluma",
        "Bolígrafo Retractil de Aluminio",
        59.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Táctico",
            "Diseño ergonómico con agarre antideslizante"
        ],
        3,
        "../HTML/Pictures/BoligrafoRAluminio.png",
        0,
    ),
    new Producto(
        24,
        "Pluma",
        "Pluma Fuente Clasica",
        99.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Táctico",
            "Diseño ergonómico con agarre antideslizante"
        ],
        3,
        "../HTML/Pictures/BoligrafoTAgarre.png",
        0,
    ),
    new Producto(
        25,
        "Pin",
        "Paquetes de Pines (10piezas)",
        199.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Estampado resistente",
            "Material de alta calidad con acabado brillante"
        ],
        3,
        "../HTML/Pictures/PaquetePines10.png",
        0,
    ),
    new Producto(
        26,
        "Pin",
        "Pin Personalizable (1 pieza)",
        199.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Estampado resistente",
            "Material de alta calidad con acabado brillante"
        ],
        3,
        "../HTML/Pictures/PinPersonalizable.png",
        0,
    ),
    new Producto(
        27,
        "Pin",
        "Pines Metálicos (10 piezas)",
        299.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Estampado resistente",
            "Material de alta calidad con acabado brillante"
        ],
        3,
        "../HTML/Pictures/PinesMetalicos.png",
        0,
    ),
    new Producto(
        28,
        "Pin",
        "Pines de Graduación (1 pieza)",
        99.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Estampado resistente",
            "Material de alta calidad con acabado brillante"
        ],
        3,
        "../HTML/Pictures/PinesGraduacion.png",
        0,
    ),
    new Producto(
        29,
        "Pin",
        "Pines de Recuerdo (1 pieza)",
        29.99,
        ["P", "M", "G"],
        ["azul", "blanco"],
        false,
        [
            "Estampado resistente",
            "Material de alta calidad con acabado brillante"
        ],
        3,
        "../HTML/Pictures/PinesRecuerdo.png",
        0,
    ),
];


if(!localStorage.getItem("catalogo")){
    localStorage.setItem("catalogo",JSON.stringify(listaProductos))
}


const carrito = [
    new ProductoCarrito(2, "imagen1", 0, listaProductos[0]),
    new ProductoCarrito(4, "imagen2", 1, listaProductos[1]),
];

function render() {
    const lista = JSON.parse(localStorage.getItem("catalogo"));

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
