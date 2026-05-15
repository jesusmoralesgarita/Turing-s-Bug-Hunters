//Erick


//Fernando


//Oswaldo


//Giovani
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


//Alex

console.log("Estructura de testimonios lista.");



//Luis


//Jésus


//Leila - Maitte

/**
 * 
 * CONEXION CON BACKEND
 */


//CREAMOS NUESTRA FUNCION RENDER ASINCRONA
async function renderReview() {

  //HACEMOS FETCH A NUESTRO ENDPOINT Y USAMOS URL_BASE
  //PARA MAS FACIL ESPECIFICAMOS EL TIPO DE DATO

  /**
   * @type {Review[]}
   */
  const reviews = await fetchJson(URL_BASE+"/api/v1/reviews"
    /*
    EN CASO DE SER UN POST/PUT/DELETE PUEDEN UTILIZAR ESTE PARAMETRO

    ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre: 'Juan', edad: 30 }),
    }
  
    */);

  //CONFIRMAMOS QUE RECIBIMOS INFORMACION CON console.log()
  console.log(reviews)

  //HACEMOS UN IASO A LA INTERFAZ

  //CREAMOS NUESTRA FUNCION GENERATE

  //OBTENEMOS EL CONTENEDOR DONDE SE MOSTRARA
  const reviewContainer = document.getElementById("reviews")
  
  //BORRAMOS EL CONTENIDO DEL CONTENERDOR
  reviewContainer.innerHTML = ""

  //COLOCAMOS LA INFORMACION USANDO LA FUNCION GENERATE
  reviews.forEach((e) => {
    reviewContainer.append( generateReview( e))
  })

}

//CREAMOS UNA FUNCION GENERATE PARA MOSTRAR UN OBJETO EN LA INTERFAZ
/**
 * 
 * @param {Review} review 
 */
function generateReview(review) {
  // Contenedor principal
  const col = document.createElement("div");
  col.className = "col-md-4";

  // Card
  const card = document.createElement("div");
  card.className = "custom-review-card p-4";

  // Estrellas
  const stars = document.createElement("div");
  stars.className = "review-stars mb-2";

  for (let i = 0; i < review.calificacion; i++) {
      const star = document.createElement("i");
      star.className = "bi bi-star-fill";
      stars.appendChild(star);
  }

  for (let i = 0; i < 5-review.calificacion; i++) {
      const star = document.createElement("i");
      star.className = "bi bi bi-star";
      stars.appendChild(star);
  }

  // Título

  // Comentario
  const reviewBody = document.createElement("p");
  reviewBody.className = "review-body";
  reviewBody.textContent = review.comentario;

  // Contenedor inferior
  const footer = document.createElement("div");
  footer.className = "d-flex align-items-center mt-auto";

  // Imagen de perfil

  // Info usuario
  const userInfo = document.createElement("div");

  // Nombre
  const reviewerName = document.createElement("p");
  reviewerName.className = "reviewer-name mb-0";
  reviewerName.textContent = review.pedido.usuario.nombre;

  // Fecha
  const reviewDate = document.createElement("p");
  reviewDate.className = "review-date mb-0";
  reviewDate.textContent = new Date( review.fecha_review );

  // Construcción jerárquica
  userInfo.appendChild(reviewerName);
  userInfo.appendChild(reviewDate);

  footer.appendChild(userInfo);

  card.appendChild(stars);
  card.appendChild(reviewBody);
  card.appendChild(footer);

  col.appendChild(card);

  return col
}

//LLAMAMOS NUESTRAS FUNCIONES RENDER

renderReview();