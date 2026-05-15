/* MAITTE */

/* LUIS */

let selected = 0;



if (!localStorage.getItem("catalogo")) {
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


    localStorage.setItem("catalogo",JSON.stringify(listaProductos))
}

console.log(JSON.parse(localStorage.getItem("catalogo")))



/**@param {Producto} item*/
function generateHTML(item){
    const divRoot = document.createElement("div");
    divRoot.className = "col-md-3 mb-4"


    const divCard = document.createElement("div");
    divCard.className = "card h-100"

        const imgCard = document.createElement("img");
        imgCard.src = item.imagen;
        imgCard.className = "card-img-top"
        imgCard.alt = "Playera Básica"

        const divBody = document.createElement("div")
        divBody.className = "card-body"


            const h5Title = document.createElement("h5")
            h5Title.textContent = item.nombre;
            h5Title.className = "card-title"

            const pCard = document.createElement("p");
            pCard.className = "card-text";

                const spanPrice = document.createElement("span")
                spanPrice.className = "price"
                spanPrice.innerText =  "$"+ item.precio;


                const spanText = document.createElement("span")
                spanText.className = "details"
                spanText.innerHTML =  (item.descripcion.split("\n")).map((e ) => {
                    return "• " + e + "<br>"
                })
            const divActions = document.createElement("div")
            divActions.className = "card-actions d-flex gap-2"

                const buttonEdit = document.createElement("button")
                buttonEdit.className = "btn btn-light btn-edit"
                buttonEdit.innerHTML = "<i class='bi bi-pencil me-2'></i> Editar"
                buttonEdit.addEventListener("click", () => {
                    editarCarrito(item.id_producto)
                } )

                const buttonBorrar = document.createElement("button")
                buttonBorrar.className = "btn btn-danger btn-delete"
                buttonBorrar.innerHTML = "<i class='bi bi-trash me-2'></i> Eliminar"
                buttonBorrar.addEventListener("click", () => { 
                    selected = item;
                    mostrarAlerta()
                })


    divActions.append(buttonEdit,buttonBorrar);
    pCard.append(spanPrice,spanText);
    divBody.append(h5Title,pCard,divActions)
    divCard.append(imgCard,divBody)
    divRoot.append(divCard)


    return divRoot

}


async function render() {

    let addLink = document.getElementById("contenedor-playeras").getElementsByClassName("card-add")[0].cloneNode(true)
    addLink.addEventListener("click",agregarCarrito)

    document.getElementById("contenedor-playeras").innerHTML = "";
    document.getElementById("contenedor-playeras").append(addLink);

    addLink = document.getElementById("contenedor-playeras").getElementsByClassName("card-add")[0].cloneNode(true)
    addLink.addEventListener("click",agregarCarrito)
    document.getElementById("contenedor-tazas").innerHTML = "";
    document.getElementById("contenedor-tazas").append(addLink);

    addLink = document.getElementById("contenedor-playeras").getElementsByClassName("card-add")[0].cloneNode(true)
    addLink.addEventListener("click",agregarCarrito)
    document.getElementById("contenedor-sudaderas").innerHTML = "";
    document.getElementById("contenedor-sudaderas").append(addLink);

    addLink = document.getElementById("contenedor-playeras").getElementsByClassName("card-add")[0].cloneNode(true)
    addLink.addEventListener("click",agregarCarrito)
    document.getElementById("contenedor-vasos").innerHTML = "";
    document.getElementById("contenedor-vasos").append(addLink);



    addLink = document.getElementById("contenedor-playeras").getElementsByClassName("card-add")[0].cloneNode(true)
    addLink.addEventListener("click",agregarCarrito)
    document.getElementById("contenedor-pins").innerHTML = "";
    document.getElementById("contenedor-pins").append(addLink);

    

    addLink = document.getElementById("contenedor-playeras").getElementsByClassName("card-add")[0].cloneNode(true)
    addLink.addEventListener("click",agregarCarrito)
    document.getElementById("contenedor-plumas").innerHTML = "";
    document.getElementById("contenedor-plumas").append(addLink);
    

    /**@type {Producto[]} */
    const lista = await fetchJson(URL_BASE+"/api/v1/productos");


    let tmp = (lista).filter((v) => v.categoria.categoria === "Playeras")
    tmp.forEach(e => document.getElementById("contenedor-playeras").append(generateHTML(e)))

    tmp = (lista).filter((v) => v.categoria.categoria === "Tazas")
    tmp.forEach(e => document.getElementById("contenedor-tazas").append(generateHTML(e)))
    
    tmp = (lista).filter((v) => v.categoria.categoria === "Sudaderas")
    tmp.forEach(e => document.getElementById("contenedor-sudaderas").append(generateHTML(e)))

    tmp = (lista).filter((v) => v.categoria.categoria === "Vasos")
    tmp.forEach(e => document.getElementById("contenedor-vasos").append(generateHTML(e)))

    tmp = (lista).filter((v) => v.categoria.categoria=== "Plumas")
    tmp.forEach(e => document.getElementById("contenedor-plumas").append(generateHTML(e)))

    tmp = (lista).filter((v) => v.categoria.categoria === "Pines")
    tmp.forEach(e => document.getElementById("contenedor-pins").append(generateHTML(e)))
    
}

function addProducto(item) {
    const lista = JSON.parse(localStorage.getItem("catalogo"));
    lista.push(lista);
    render();
}


function editProducto(item){
    const lista = JSON.parse(localStorage.getItem("catalogo"));
    const index = (lista).findIndex((v) => v.idProducto === item.idProducto);
    lista[index] = item;
    render();
}

/**@param {Producto} item */
async function deleteProducto(item){

    console.log(URL_BASE+"/api/v1/productos/"+item.id_producto)
    
    try {
     
    const salida = await fetchJson(URL_BASE+"/api/v1/productos/"+item.id_producto,{
      method: 'DELETE'
    })   
    } catch (error) {
        
    }

    render();
}

render();
/* LEI */

/* ERICK */

/* FER */

/* GIO */
// funcion para redirigir a añadir nuevo producto
function agregarCarrito() {
    window.location.href = "masteradd.html";
}

function editarCarrito(id) {
    window.location.href = "masteredit.html?id="+id;
}

/* CHUCHO */

/* OSWALDO */
function mostrarAlerta() {
    document.getElementById("miAlerta").style.display = "block";
}

function cerrarAlerta() {
    document.getElementById("miAlerta").style.display = "none";
}

function borrarAlerta() {
    deleteProducto(selected)
    document.getElementById("miAlerta").style.display = "none";
}

/* ALE */
