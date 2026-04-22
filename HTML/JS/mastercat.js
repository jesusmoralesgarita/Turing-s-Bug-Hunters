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
    
}

if (!localStorage.getItem("catalogo")) {

    const listaProductos = [
        new Producto(
            0,
            "Playera",
            "Polo basica",
            200,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
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
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        ),
        new Producto(
            2,
            "Playera 3",
            "Playera en V",
            2300,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["no se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        ),
        new Producto(
            3,
            "Playera 4",
            "Playera invisible",
            99999,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        ),
        new Producto(
            4,
            "Playera 5",
            "Playera con tirantes",
            300,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        ),
        new Producto(
            5,
            "Playera 6",
            "Pollo",
            450,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["se lava", "no huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        ),
        new Producto(
            6,
            "Playera 7",
            "Playera que vuela",
            777,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        ),
        new Producto(
            7,
            "Playera 8",
            "Playa",
            888,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        ),
        new Producto(
            8,
            "Playera 9",
            "Plancha",
            999,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        ),
        new Producto(
            9,
            "Playera 10",
            "Plancha",
            10000,
            ["P", "M", "G"],
            ["azul", "blanco"]
            [""],
            ["imagen1", "imagen2"],
            ["se lava", "huele"],
            3,
            "../HTML/Pictures/playeragris.jpeg", 0
        )
    ];

    localStorage.setItem("catalogo", JSON.stringify(listaProductos))
}


function edit(form) {
    const lista = JSON.parse( localStorage.getItem("catalogo"));
    lista[] = new Producto(

    );

    localStorage.setItem("catalogo", JSON.stringify(lista))
}

/* LEI */



/* ERICK */



/* FER */



/* GIO */



/* CHUCHO */



/* OSWALDO */



/* ALE */


