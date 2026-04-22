/* MAITTE */



/* LUIS */



/* LEI */



/* ERICK */
 const inputImagen = document.getElementById("inputImagen");
  const preview = document.getElementById("preview");
  const guardarBtn = document.getElementById("guardarBtn");

  // Mostrar vista previa al subir
  inputImagen.addEventListener("change", function(event) {
    const archivo = event.target.files[0];
    if (archivo) {
      const imagenURL = URL.createObjectURL(archivo);
      preview.src = imagenURL;
      preview.classList.remove("d-none");
    }
  });

  // Botón para cambiar imagen (abre el selector otra vez)
  guardarBtn.addEventListener("click", function() {
    inputImagen.click();
  });





/* FER */



/* GIO */



/* CHUCHO */



/* OSWALDO */



/* ALE */


