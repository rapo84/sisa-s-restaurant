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

    // Añadimos un event listener al enlace de "Carta"
    menuLink.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar la recarga de página
        submenu.classList.toggle('show-submenu'); // Mostrar/ocultar submenú
    });

    // Opcional: Cerrar el submenú si se hace clic fuera del área del menú
    document.addEventListener('click', function (event) {
        if (!menuLink.contains(event.target) && !submenu.contains(event.target)) {
            submenu.classList.remove('show-submenu'); // Ocultar el submenú si se hace clic fuera
        }
    });

    // Mensaje de depuración para confirmar que el script se ha cargado correctamente
    console.log('Sisa\'s Restaurant page loaded successfully!');
});
