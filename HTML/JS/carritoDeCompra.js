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
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  // Inicializamos el modal de Bootstrap
  const successModal = new bootstrap.Modal(document.getElementById('successModal'))

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault(); // Detenemos el envío para validar primero

      const tarjeta = document.getElementById('validationCustom01').value;
      const mes = form.querySelector('input[placeholder="MM"]').value;
      const anio = form.querySelector('input[placeholder="YY"]').value;
      const cvv = document.getElementById('cvv').value;

      // Validación de longitudes
      const esValido = (
        tarjeta.length === 16 && 
        mes.length === 2 && 
        anio.length === 2 && 
        cvv.length === 3
      );

      if (!form.checkValidity() || !esValido) {
        event.stopPropagation();
        if(!esValido) {
            alert("Por favor, verifica los datos:\n- Tarjeta: 16 dígitos\n- Fecha: 2 dígitos por campo\n- CVV: 3 dígitos");
        }
      } else {
        successModal.show();
        form.reset();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();


