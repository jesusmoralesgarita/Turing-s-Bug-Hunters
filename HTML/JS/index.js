//Erick


//Fernando
// Variable global para mantener la referencia
let swiperInstance = null;

async function renderCarrusel() {
  try {
    const detalles = await fetchJson(URL_BASE + "/api/v1/detalles-pedidos/last");
    console.log(detalles);

    const wrapper = document.querySelector(".swiper-wrapper");
    if (!wrapper) return; // Guard clause por seguridad
    
    wrapper.innerHTML = ""; 
    console.log(wrapper);


    detalles.forEach(item => {
      wrapper.append(generateCarrusel(item));
    });

    // 1. Destruir instancia previa si existe
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
    }


    // 2. Inicializar nueva instancia
    swiperInstance = new Swiper(".mySwiper", {
slidesPerView: 3, // Asegúrate de que el fetch devuelva más elementos que este número
            slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 20,
      loop: detalles.length > 1, // Solo hacer loop si hay más de 1 item
      observer: true,            // Ayuda a Swiper a detectar cambios en el DOM
      observeParents: true,
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

  } catch (error) {
    console.error("Error al renderizar el carrusel:", error);
  }
}


/**
 * 
 * @param {Pedido} item 
 */
function generateCarrusel(item) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  // Agregando validación simple para la imagen y el texto
  const producto = item;
  
  slide.innerHTML = `
    <div class="card">
      <img src="${producto.imagen || 'placeholder.jpg'}" alt="${producto.nombre}">
      <div class="info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
      </div>
    </div>
  `;
  return slide;
}

// Ejecución
renderCarrusel();

//Oswaldo

//Giovani

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
  const reviewContainer = document.getElementById("bloque-resenas-dinamicas")


  
  //BORRAMOS EL CONTENIDO DEL CONTENERDOR
  reviewContainer.innerHTML = ""

  //COLOCAMOS LA INFORMACION USANDO LA FUNCION GENERATE
  reviews.forEach((e,i) => {
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
      star.className = "bi bi-star";
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

  // reviewDate.textContent = new Date( review.fecha_review );
  const fecha = new Date(review.fecha_review);

  reviewDate.textContent = fecha.toLocaleDateString("es-MX"
  // , {day: "numeric", month: "long", year: "numeric"}
  );

  // Construcción jerárquica
  userInfo.appendChild(reviewerName);
  userInfo.appendChild(reviewDate);

  footer.appendChild(userInfo);

  card.appendChild(stars);
  card.appendChild(reviewBody);


  const reviewBreak = document.createElement("hr");

  card.appendChild(reviewBreak);
  card.appendChild(footer);

  col.appendChild(card);

  return col
}

//LLAMAMOS NUESTRAS FUNCIONES RENDER

renderReview();