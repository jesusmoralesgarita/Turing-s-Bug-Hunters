/* MAITTE */

/* LUIS */
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
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            1,
            "Playera 2",
            "Polo no basica",
            200,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            2,
            "Playera 3",
            "Playera en V",
            2300,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["no se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            3,
            "Playera 4",
            "Playera invisible",
            99999,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            4,
            "Playera 5",
            "Playera con tirantes",
            300,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            5,
            "Playera 6",
            "Pollo",
            450,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["se lava", "no huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            6,
            "Playera 7",
            "Playera que vuela",
            777,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            7,
            "Playera 8",
            "Playa",
            888,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            8,
            "Playera 9",
            "Plancha",
            999,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg",
            0,
        ),
        new Producto(
            9,
            "Playera 10",
            "Plancha",
            10000,
            ["P", "M", "G"],
            ["azul", "blanco"][""],
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

                const buttonBorrar = document.createElement("button")
                buttonBorrar.className = "btn btn-danger btn-delete"
                buttonBorrar.innerHTML = "<i class='bi bi-trash me-2'></i> Eliminar"
                buttonBorrar.addEventListener("click", mostrarAlerta)


    divActions.append(buttonEdit,buttonBorrar);
    pCard.append(spanPrice,spanText);
    divBody.append(h5Title,pCard,divActions)
    divCard.append(imgCard,divBody)
    divRoot.append(divCard)


    return divRoot

}

const lista = JSON.parse(localStorage.getItem("catalogo"));
(lista).forEach(e => document.getElementById("contenedor").append(generateHTML(e)))

/* LEI */

/* ERICK */

/* FER */

/* GIO */
// funcion para redirigir a añadir nuevo producto
function agregarCarrito() {
    window.location.href = "masteradd.html";
}

/* CHUCHO */

/* OSWALDO */
function mostrarAlerta() {
    document.getElementById("miAlerta").style.display = "block";
}

function cerrarAlerta() {
    document.getElementById("miAlerta").style.display = "none";
}

/* ALE */
