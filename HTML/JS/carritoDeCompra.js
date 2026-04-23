/* Gio */
const productos = document.querySelectorAll(".producto");
const totalElement = document.getElementById("total");

function calcularTotal() {
    let total = 0;

    productos.forEach(producto => {
        let precio = parseFloat(producto.querySelector(".precio").innerText);
        let cantidad = parseInt(producto.querySelector(".cantidad").value);

        total += precio * cantidad;
    });

    totalElement.innerText = total.toFixed(2);
}

// Eventos
productos.forEach(producto => {
    const btnPlus = producto.querySelector(".btn-plus");
    const btnMinus = producto.querySelector(".btn-minus");
    const inputCantidad = producto.querySelector(".cantidad");

    btnPlus.addEventListener("click", () => {
        inputCantidad.value++;
        calcularTotal();
    });

    btnMinus.addEventListener("click", () => {
        if (inputCantidad.value > 0) {
            inputCantidad.value--;
            calcularTotal();
        }
    });
});

// Inicializar total en 0
calcularTotal();  
/* Oswa */
