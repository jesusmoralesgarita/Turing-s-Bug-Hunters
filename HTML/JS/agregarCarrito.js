//  Erick
const inputImagen = document.getElementById('file-input-ale');
const preview = document.getElementById("preview");

inputImagen.addEventListener("change", function(event) {
  const archivo = event.target.files[0];
  if (archivo) {
    const imagenURL = URL.createObjectURL(archivo);
    preview.src = imagenURL;
    preview.classList.remove("d-none");
  }
});
/*


const guardarBtn = document.getElementById("guardarBtn");




guardarBtn.addEventListener("click", function() {
  inputImagen.click();
});
*/

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