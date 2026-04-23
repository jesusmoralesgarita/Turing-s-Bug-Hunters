/* Gio */


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
        tarjeta.length === 18 && 
        mes.length === 2 && 
        anio.length === 2 && 
        cvv.length === 3
      );

      if (!form.checkValidity() || !esValido) {
        event.stopPropagation();
        if(!esValido) {
            alert("Por favor, verifica los datos:\n- Tarjeta: 18 dígitos\n- Fecha: 2 dígitos por campo\n- CVV: 3 dígitos");
        }
      } else {
        successModal.show();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();


