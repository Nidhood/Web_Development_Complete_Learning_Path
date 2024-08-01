'use strict'

document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar todos los enlaces dentro de la lista de navegación
    const links = document.querySelectorAll('.navbar-resume a');

    // Agregar un event listener a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function(e) {

            // Prevenir el comportamiento por defecto del enlace
            e.preventDefault();

            // Obtener el id del elemento al que apunta el enlace
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Si el elemento existe, realizar el desplazamiento suave
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

