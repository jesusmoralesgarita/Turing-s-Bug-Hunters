/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(async () => {
    'use strict'

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value.trim();
            
            const resultado = await validarLogin(email, pass);
            
            if (resultado === "success") {
                alert("¡Bienvenido de nuevo!");
                localStorage.setItem('sesionActiva', 'true'); // Usamos la misma llave siempre
                window.location.href = "index.html";
            } else {
                alert(resultado);
            }
        });
    }
})();

async function validarLogin(emailIngresado, passIngresada) {

    try{
        //const token = JSON.parse( localStorage.getItem("token"));
        const usuario = await fetchJson(URL_BASE+"/api/v1/auth/login",
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //"Authorization": `Bearer ${token.token}`,
            },
            body: JSON.stringify({ username: emailIngresado, password: passIngresada }),
            }
        )
        

        localStorage.setItem("token", JSON.stringify( usuario))
        return "success"
    }catch(e){
        return "Correo o contraseña incorrectos.";
    }

}

// --- FUNCIONES DE VALIDACIÓN ---
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarNombre(input) {
    const nombre = input.value.trim();
    return nombre === "" ? "El nombre es obligatorio." : (!/\d/.test(nombre) ? "" : "El nombre sin números");
}

function validarEmail1(input) {
    const email = input.value.trim();
    return email === "" ? "El email es obligatorio." : (!validarEmail(email) ? "Formato de email inválido." : "");
}

function validarNumCel(input) {
    const cel = input.value.trim();
    if (cel.length < 10) return "El número de telefono debe tener al menos 10 digitos.";
    return "";
}

// --- MANEJO DINÁMICO DEL NAVBAR ---
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("user-menu-container");
    if (!container) return;

     const token = localStorage.getItem("token");

    if (token && JSON.parse( token).roles === "[ROLE_ADMIN]") {
        container.innerHTML = `
            <div class="dropdown">
                <button class="btn text-white p-0 border-0" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-person-circle fs-4"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end p-0" style="background-color: #b07d54; border: none; min-width: 150px; overflow: hidden;">
                    <li class="text-center pt-2 pb-1">
                        <span class="fw-bold" style="color: #2c1a10; font-size: 0.85rem; letter-spacing: 1px;">PERFIL</span>
                    </li>
                    <li class="p-3">
                        <button id="btn-cerrar-sesion" class="btn w-100" style="background-color: white; color: #555; border-radius: 8px; font-size: 0.8rem; font-weight: bold; border: none;">
                            cerrar sesión
                        </button>
                    </li>
                </ul>
            </div>`;

            console.log(document.querySelector(".carrito-menu"))
            document.querySelector(".carrito-menu").innerHTML += `
                <a href="mastercat.html" class="dropdown-item text-center">Administrar Catalogo</a>
                <a href="masterstate.html" class="dropdown-item text-center">Administrar Pedidos</a>
            `
            

        // Configurar el click manualmente para que siempre funcione
        setTimeout(() => {
            const btn = document.getElementById('btn-cerrar-sesion');
            if (btn) {
                btn.onclick = () => {
                    localStorage.removeItem("sesionActiva");
                    localStorage.removeItem("token");
                    window.location.reload();
                };
            }
        }, 100);
    }else if(token && JSON.parse( token).roles === "[ROLE_USER]"){

        container.innerHTML = `
            <div class="dropdown">
                <button class="btn text-white p-0 border-0" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-person-circle fs-4"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end p-0" style="background-color: #b07d54; border: none; min-width: 150px; overflow: hidden;">
                    <li class="text-center pt-2 pb-1">
                        <span class="fw-bold" style="color: #2c1a10; font-size: 0.85rem; letter-spacing: 1px;">PERFIL</span>
                    </li>
                    <li class="p-3">
                        <button id="btn-cerrar-sesion" class="btn w-100" style="background-color: white; color: #555; border-radius: 8px; font-size: 0.8rem; font-weight: bold; border: none;">
                            cerrar sesión
                        </button>
                    </li>
                </ul>
            </div>`;

        // Configurar el click manualmente para que siempre funcione
        setTimeout(() => {
            const btn = document.getElementById('btn-cerrar-sesion');
            if (btn) {
                btn.onclick = () => {
                    localStorage.removeItem("sesionActiva");
                    localStorage.removeItem("token");
                    window.location.reload();
                };
            }
        }, 100);
        
    } else {
        container.innerHTML = `
            <div class="d-flex gap-2">
                <a href="login.html" class="btn btn-outline-light btn-sm">Iniciar Sesión</a>
                <a href="registro.html" class="btn btn-sm" style="background-color: #8A3D9E; color: white; border: none;">Registrate</a>
            </div>
        `;
    }
});

// Validación de formularios general
Array.from(document.getElementsByTagName("form")).forEach((e) => {
    e.addEventListener("submit", (el) => {
        e.classList.add("was-validated");
        // ... resto de tu lógica de validación de campos ...
    });
});




const URL_BASE = "http://localhost:8080"


/**
 * Representa un categoria.
 */
class Categoria {
    /**
     * @param {number} id_categoria
     * @param {string} categoria
     */
    constructor(id_categoria, categoria) {
        /** @type {number} */
        this.id_categoria = id_categoria;

        /** @type {string} */
        this.categoria = categoria;
    }
}


/**
 * Representa un producto.
 */
class Producto {
    /**
     * @param {Object} data
     * @param {number} data.id_producto
     * @param {string} data.color
     * @param {string} data.descripcion
     * @param {number} data.descuento
     * @param {boolean} data.diseno
     * @param {string} data.imagen
     * @param {string} data.nombre
     * @param {number} data.precio
     * @param {number} data.stock
     * @param {string} data.talla
     * @param {Categoria} data.categoria
     * @param {number} data.id_Productos
     */
    constructor(data) {
        /** @type {number} */
        this.id_producto = data.id_producto;

        /** @type {string} */
        this.color = data.color;

        /** @type {string} */
        this.descripcion = data.descripcion;

        /** @type {number} */
        this.descuento = data.descuento;

        /** @type {boolean} */
        this.diseno = data.diseno;

        /** @type {string} */
        this.imagen = data.imagen;

        /** @type {string} */
        this.nombre = data.nombre;

        /** @type {number} */
        this.precio = data.precio;

        /** @type {number} */
        this.stock = data.stock;

        /** @type {string} */
        this.talla = data.talla;

        /** @type {Categoria} */
        this.categoria = new Categoria(
            data.categoria.id_categoria,
            data.categoria.categoria
        );

        /** @type {number} */
        this.id_Productos = data.id_Productos;
    }
}


/**
 * Representa un usuario.
 */
class Usuario {
    /**
     * @param {Object} data
     */
    constructor(data) {
        /** @type {number} */
        this.id_usuario = data.id_usuario;

        /** @type {string} */
        this.nombre = data.nombre;

        /** @type {string} */
        this.apellidos = data.apellidos;

        /** @type {string} */
        this.correo_electronico = data.correo_electronico;

        /** @type {string} */
        this.direccion = data.direccion;

        /** @type {string} */
        this.numero_telefonico = data.numero_telefonico;

        /** @type {string} */
        this.contrasena = data.contrasena;
    }
}

/**
 * Representa un pedido.
 */
class Pedido {
    /**
     * @param {Object} data
     * @param {number} data.id_pedido
     * @param {Usuario} data.usuario
     * @param {string} data.fecha_pedido
     * @param {string} data.direccion
     * @param {string} data.rastreador
     */
    constructor(data) {
        /** @type {number} */
        this.id_pedido = data.id_pedido;

        /** @type {Usuario} */
        this.usuario = new Usuario(data.usuario);

        /** @type {string} */
        this.fecha_pedido = data.fecha_pedido;

        /** @type {string} */
        this.direccion = data.direccion;

        /** @type {string} */
        this.rastreador = data.rastreador;
    }
}

/**
 * Representa el detalle de un pedido.
 */
class DetallePedido {
    /**
     * @param {Object} data
     * @param {number} data.id_detalle
     * @param {Pedido} data.pedido
     * @param {number} data.cantidad_producto
     * @param {number} data.precio_total
     * @param {string} data.rastreador
     * @param {string} data.imagen
     * @param {string} data.estado_pedido
     * @param {number} data.producto
     */
    constructor(data) {
        /** @type {number} */
        this.id_detalle = data.id_detalle;

        /** @type {Pedido} */
        this.pedido = new Pedido(data.pedido);

        /** @type {number} */
        this.cantidad_producto = data.cantidad_producto;

        /** @type {number} */
        this.precio_total = data.precio_total;

        /** @type {string} */
        this.rastreador = data.rastreador;

        /** @type {string} */
        this.imagen = data.imagen;

        /** @type {string} */
        this.estado_pedido = data.estado_pedido;

        /** @type {Producto} */
        this.producto = new Producto(data.producto);
    }
}

/**
 * Representa una review de producto.
 */
class Review {
    /**
     * @param {Object} data
     * @param {number} data.id_reviews
     * @param {number} data.calificacion
     * @param {string} data.comentario
     * @param {string} data.fecha_review
     * @param {Pedido} data.pedido
     */
    constructor(data) {
        /** @type {number} */
        this.id_reviews = data.id_reviews;

        /** @type {number} */
        this.calificacion = data.calificacion;

        /** @type {string} */
        this.comentario = data.comentario;

        /** @type {string} */
        this.fecha_review = data.fecha_review;

        /** @type {Pedido} */
        this.pedido = new Pedido(data.pedido);
    }
}


async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  return await response.json();
}