/* MAITTE */

/* LUIS */

let selected = 0;



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
  const token = JSON.parse( localStorage.getItem("token"));
    const lista = await fetchJson(URL_BASE+"/api/v1/productos",{
        
      headers: {
                "Authorization": `Bearer ${token.token}`,
      },
    });


    console.log(lista)
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

async function addProducto(item) {
    // Agregar producto a la base de datos a través de la API
    try {
        const response = await fetch(URL_BASE + "/api/v1/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        if (!response.ok) {
            throw new Error("Error al agregar el producto");
        }
        render();
    } catch (error) {
        console.error("Error:", error);
    }
}


async function editProducto(item){
    // Editar producto en la base de datos a través de la API
    try {
        const response = await fetch(URL_BASE + "/api/v1/productos/" + item.idProducto, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        if (!response.ok) {
            throw new Error("Error al editar el producto");
        }
        render();
    } catch (error) {
        console.error("Error:", error);
    }
}

/**@param {Producto} item */
async function deleteProducto(item){

    console.log(URL_BASE+"/api/v1/productos/"+item.id_producto)
    
    try {
     
  const token = JSON.parse( localStorage.getItem("token"));
    const salida = await fetchJson(URL_BASE+"/api/v1/productos/"+item.id_producto,{
      method: 'DELETE',
      headers: {
                "Authorization": `Bearer ${token.token}`,
      },
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
