/* --- INTEGRACIÓN LUIS, Maitte & ALEX --- */
(() => {
    'use strict'

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value.trim();
            
            // Reutilizamos la lógica de validación
            const resultado = validarLogin(email, pass);
            
            if (resultado === "success") {
                alert("¡Bienvenido de nuevo!");
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
        localStorage.setItem('sesionActiva', 'true');
        return "success";
    } else {
        return "Correo o contraseña incorrectos.";
    }
}
