'use strict'

// Experiencia laboral, de estudios, premios, producción intelectual Al seleccionar una sección en el índice, el navegador debe deslizarse suavemente hacia dicha sección
// en resume,  al  cliquear el indice (lista de referencias que van al id) se desplaza suavemente hacia la sección correspondiente

// <li><a href="#formacion-academica" class="navbar-resume-link">Formación académica</a></li>
document.querySelectorAll('.navbar-resume-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target.getAttribute('href'); // '#formacion-academica'
        const targetElement = document.querySelector(target); // <section id="formacion-academica">...</section>
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
