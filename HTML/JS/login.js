/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(() => {
    'use strict'

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value.trim();
            
            const resultado = validarLogin(email, pass);
            
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

function validarLogin(emailIngresado, passIngresada) {
    const datosSrt = localStorage.getItem('usuarioRegistrado');
    if (!datosSrt) return "No hay usuarios registrados.";

    const usuario = JSON.parse(datosSrt);

    if (usuario.email === emailIngresado && usuario.password === passIngresada) {
        return "success";
    } else {
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

    const sesionActiva = localStorage.getItem("sesionActiva");

    if (sesionActiva === "true") {
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
                    window.location.reload();
                };
            }
        }, 100);
        
    } else {
        container.innerHTML = `
            <div class="d-flex gap-2">
                <a href="login.html" class="btn btn-outline-light btn-sm">Iniciar Sesión</a>
                <a href="registro.html" class="btn btn-sm" style="background-color: #b07d54; color: white; border: none;">Registrate</a>
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

