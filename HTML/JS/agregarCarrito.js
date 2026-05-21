let imagen;


//  Erick
const inputImagen = document.getElementById('file-input-ale');
const preview = document.getElementById("preview");

inputImagen.addEventListener("change", function(event) {
  imagen = event.target.files[0];
  const archivo = event.target.files[0];
  if (archivo) {
    const imagenURL = URL.createObjectURL(archivo);
    preview.src = imagenURL;
    preview.classList.remove("d-none");
  }
});

// Fer



// Ale
const dropZoneAle = document.getElementById('drop-zone-ale');
const fileInputAle = document.getElementById('file-input-ale');

dropZoneAle.addEventListener('click', () => fileInputAle.click());

fileInputAle.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.querySelector('.img-preview-ale');
            preview.src = e.target.result;
        };
        reader.readAsDataURL(this.files[0]);
    }
});


/**@type {Producto} */
let producto;

async function loadImage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  const entrada = await fetchJson(URL_BASE+"/api/v1/productos/"+id)
  
  /**@type {Producto} */
  producto = entrada;
  console.log(producto)

  document.getElementById("imagen-place").src = producto.imagen;

  document.getElementById("talla").innerText = producto.talla
  document.getElementById("color").innerText = producto.color


  producto.descripcion.split("\n").map((e) => {
    let lista = document.createElement("li")
    lista.innerHTML =e
    document.getElementById("descripcion").append(lista)
  })

  document.getElementById("precio").innerText = "$"+ producto.precio

  document.getElementById("nombre").innerText = producto.nombre
}

let db;

const request = indexedDB.open("miAplicacionDB", 1);
request.onupgradeneeded = (event) => {
    db = event.target.result;

    if (!db.objectStoreNames.contains("imagenes")) {
        db.createObjectStore("imagenes", {
            keyPath: "id",
            autoIncrement: true
        });
    }
};

request.onsuccess = (event) => {
    db = event.target.result;

    console.log("IndexedDB lista");
};

request.onerror = (event) => {
    console.error("Error DB", event);
};

async function agregar() {

    const transaction = db.transaction(["imagenes"], "readwrite");

    const store = transaction.objectStore("imagenes");



    store.add({
        archivo: imagen
    });

    transaction.oncomplete = () => {
        console.log("Imagen guardada");
    };
    

  console.log(fileInputAle)
  console.log(imagen)
  const salida = {
    cantidad_producto: 1,
    estado_pedido: "Recepción",
    imagen: imagen.name,
    precio_total: producto.precio,
    rastreador: "ASDVVGBASD",
    producto: producto, 
  }
  
 const carrito = localStorage.getItem("detalles")

  if(carrito){
    const storage = JSON.parse( localStorage.getItem("detalles"))
    storage.push(salida)
    localStorage.setItem("detalles", JSON.stringify(storage))
  }else{
    localStorage.setItem("detalles", JSON.stringify([salida]))
  }  
  alert("Tu producto fue agregado a tu carrito")

}


loadImage();