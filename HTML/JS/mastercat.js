/* MAITTE */

/* LUIS */

let selected = 0;
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
        this.idProducto = idProducto; 
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



if (!localStorage.getItem("catalogo")) {
    const listaProductos = [
        new Producto(
            0,
            "Playera",
            "Polo basica",
            200,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            1,
            "Playera",
            "Polo no basica",
            200,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            2,
            "Playera",
            "Playera en V",
            2300,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["no se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            3,
            "Playera",
            "Playera invisible",
            99999,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            4,
            "Playera",
            "Playera con tirantes",
            300,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            5,
            "Playera",
            "Pollo",
            450,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "no huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            6,
            "Playera",
            "Playera que vuela",
            777,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            7,
            "Playera",
            "Playa",
            888,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            8,
            "Playera",
            "Plancha",
            999,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            9,
            "Playera",
            "Plancha",
            10000,
            ["P", "M", "G"],
            ["Azul", "Blanco"],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
    ];

    localStorage.setItem("catalogo",JSON.stringify(listaProductos))
}

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
            h5Title.textContent = item.nombreProducto;
            h5Title.className = "card-title"

            const pCard = document.createElement("p");
            pCard.className = "card-text";

                const spanPrice = document.createElement("span")
                spanPrice.className = "price"
                spanPrice.innerText =  "$"+ item.precio;


                const spanText = document.createElement("span")
                spanText.className = "details"
                spanText.innerHTML =  (item.descripcion).map((e ) => {
                    return "• " + e + "<br>"
                })
            const divActions = document.createElement("div")
            divActions.className = "card-actions d-flex gap-2"

                const buttonEdit = document.createElement("button")
                buttonEdit.className = "btn btn-light btn-edit"
                buttonEdit.innerHTML = "<i class='bi bi-pencil me-2'></i> Editar"
                buttonEdit.addEventListener("click", () => {
                    editarCarrito(item.idProducto)
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


function render() {

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


    const lista = JSON.parse(localStorage.getItem("catalogo"));


    let tmp = (lista).filter((v) => v.tipoProducto === "Playera")
    tmp.forEach(e => document.getElementById("contenedor-playeras").append(generateHTML(e)))

    tmp = (lista).filter((v) => v.tipoProducto === "Taza")
    tmp.forEach(e => document.getElementById("contenedor-tazas").append(generateHTML(e)))
    
    tmp = (lista).filter((v) => v.tipoProducto === "Sudadera")
    tmp.forEach(e => document.getElementById("contenedor-sudaderas").append(generateHTML(e)))

    tmp = (lista).filter((v) => v.tipoProducto === "Vaso")
    tmp.forEach(e => document.getElementById("contenedor-vasos").append(generateHTML(e)))

    
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

function deleteProducto(item){
    console.log(item)
    const lista = JSON.parse(localStorage.getItem("catalogo"));
    const index = (lista).findIndex((v) => v.idProducto === item.idProducto);

    console.log(index)
    lista.splice(index,1);

    localStorage.setItem("catalogo", JSON.stringify(lista))
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
