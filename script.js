document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos el botón de menú hamburguesa y el menú de navegación
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    // Añadimos un event listener al botón de menú hamburguesa
    menuToggle.addEventListener('click', function () {
        // Alternamos la clase 'active' en el menú para mostrarlo u ocultarlo
        menu.classList.toggle('active');

    });
    // Mensaje de depuración para confirmar que el script se ha cargado
    console.log('Sisa\'s Restaurant page loaded successfully!');
});
