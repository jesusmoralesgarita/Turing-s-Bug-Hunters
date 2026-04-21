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
        descuento
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
    

    generateHTML(){
        const divPrincipal = document.createElement("div");
        divPrincipal.className = "col-md-3 mb-4";

        const divCard = document.createElement("div");
        divCard.className = "card h-100";

        const img = document.createElement("img");
        img.src = this.imagen;
        img.className = "card-img-top";
        img.alt = this.nombreProducto;

        const divBody = document.createElement("div");
        divBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.innerText = this.nombreProducto;
        h5.className = "card-title";

        const pBody = document.createElement("p");
        pBody.className = "card-text";

        const spanPrice = document.createElement("span");
        spanPrice.className = "price";
        spanPrice.innerText = this.precio;

        const spanDetails = document.createElement("span");
        spanDetails.className = "details";
        spanDetails.innerHTML = this.descripcion.map((e ) => {
            return "• " + e + "<br>"
        })

        const button = document.createElement("button");
        button.className = "btn btn-custom d-flex justify-content-between align-items-center";
        button.addEventListener("click", (e) => {
            const storage = localStorage.getItem("carrito");
            if(storage){
                const carritoStorage = JSON.parse(storage);
                carritoStorage.push(new ProductoCarrito(2,"imagen1",0,this));
                localStorage.setItem("carrito", JSON.stringify(carritoStorage));
            }else{
                localStorage.setItem("carrito", JSON.stringify([new ProductoCarrito(2,"imagen1",0,this)]));
            }
            console.log(JSON.parse(localStorage.getItem("carrito")));
        })

        const spanButton = document.createElement("span");
        spanButton.innerHTML  = '<i class="bi bi-plus-circle me-2"></i> Agregar al carrito';

        const iButton = document.createElement("i");
        iButton.className = "bi bi-chevron-down";


        button.append(spanButton,iButton);
        pBody.append(spanPrice, spanDetails);
        divBody.append(h5,pBody,button);
        divCard.append(img,divBody);
        divPrincipal.append(divCard);

        return divPrincipal;
    }
}


class ProductoCarrito {
  constructor(
    cantidad,
    imagenCargada,
    tallaSeleccionada,
    producto
  ) {
    this.cantidad = cantidad;
    this.imagenCargada = imagenCargada;
    this.tallaSeleccionada = tallaSeleccionada;
    this.producto = producto;
  }
}


const listaProductos = [
    new Producto(
        0,
        "Playera",
        "Polo basica",
        200,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg",
        0
    ), 
    new Producto(
        1,
        "Playera 2",
        "Polo no basica",
        200,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    ), 
    new Producto(
        2,
        "Playera 3",
        "Playera en V",
        2300,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["no se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    ), 
    new Producto(
        3,
        "Playera 4",
        "Playera invisible",
        99999,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    ), 
    new Producto(
        4,
        "Playera 5",
        "Playera con tirantes",
        300,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    ), 
    new Producto(
        5,
        "Playera 6",
        "Pollo",
        450,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "no huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    ), 
    new Producto(
        6,
        "Playera 7",
        "Playera que vuela",
        777,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    ), 
    new Producto(
        7,
        "Playera 8",
        "Playa",
        888,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    ), 
    new Producto(
        8,
        "Playera 9",
        "Plancha",
        999,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    ), 
    new Producto(
        9,
        "Playera 10",
        "Plancha",
        10000,
        [ "P", "M", "G"],
        [ "azul" , "blanco"]
        [""],
        ["imagen1","imagen2"],
        ["se lava", "huele"],
        3,
        "../HTML/Pictures/playeragris.jpeg", 0
    )
];


const carrito = [
    new ProductoCarrito(
        2,
        "imagen1",
        0,
        listaProductos[0]
    ),
    new ProductoCarrito(
        4,
        "imagen2",
        1,
        listaProductos[1]
    ),
]

console.log(listaProductos)
console.log(carrito)




listaProductos.forEach((e) => {
    document.getElementById("contenedor").append(e.generateHTML());
})


 