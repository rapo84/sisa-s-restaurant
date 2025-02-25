document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos el botón de menú hamburguesa y el menú de navegación
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    // Añadimos un event listener al botón de menú hamburguesa
    menuToggle.addEventListener('click', function () {
        // Alternamos la clase 'active' en el menú para mostrarlo u ocultarlo
        menu.classList.toggle('active');
    });

    // Seleccionamos el enlace de "Carta" y el submenú
    const menuLink = document.querySelector('li > a[href="#"]'); // Enlace "Carta"
    const submenu = document.querySelector('.submenu'); // Submenú que contiene las opciones de carta

    const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
    const avisoCookies = document.getElementById('aviso-cookies');
    const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

    dataLayer = [];

    if (!localStorage.getItem('cookies-aceptadas')) {
        avisoCookies.classList.add('activo');
        fondoAvisoCookies.classList.add('activo');
    } else {
        dataLayer.push({ 'event': 'cookies-aceptadas' });
    }

    botonAceptarCookies.addEventListener('click', () => {
        avisoCookies.classList.remove('activo');
        fondoAvisoCookies.classList.remove('activo');

        localStorage.setItem('cookies-aceptadas', true);

        dataLayer.push({ 'event': 'cookies-aceptadas' });
    });

    // Mensaje de depuración para confirmar que el script se ha cargado correctamente
    console.log('Sisa\'s Restaurant page loaded successfully!');
});
