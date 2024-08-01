'use strict'


// 1. Crear una función que al dar clic en el vínculo del índice de secciones, este se desplace suavemente hacia la sección escogida.
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


// 2. Crear una función que al dar clic en el botón de enviar mensaje, este se agregue a la sección de mensajes.
function sendMessage() {

    // Obtener los valores de los campos
    const sender = document.getElementById('sender').value.trim(); // trim() elimina los espacios en blanco al inicio y al final
    const message = document.getElementById('message').value.trim();

    // Elementos de error
    const senderError = document.getElementById('sender-error');
    const messageError = document.getElementById('message-error');

    // Resetear mensajes de error (para que no se acumulen)
    senderError.textContent = '';
    messageError.textContent = '';
    let hasError = false;

    // Validación
    if (sender === '') {
        senderError.textContent = 'El nombre del remitente no puede estar vacío.';
        hasError = true;
    }

    if (message === '') {
        messageError.textContent = 'El texto del mensaje no puede estar vacío.';
        hasError = true;
    }

    // Si hay errores, no enviar el mensaje
    if (hasError) {
        return;
    }

    // Asignar un color al remitente si aún no tiene uno
    if (!senderColors[sender]) {
        senderColors[sender] = getRandomColor();
    }

    // Crear el mensaje
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong style="color:${senderColors[sender]}">${sender}:</strong> ${message}`;

    // Añadir el mensaje a la sección de mensajes
    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageElement);

    // Limpiar los campos de entrada
    document.getElementById('sender').value = '';
    document.getElementById('message').value = '';

    // Desplazar el contenedor de mensajes hacia abajo
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Objeto para almacenar colores asociados con nombres
const senderColors = {};

// Función para generar un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Math.random() * 16 genera un número entre 0 y 15, para obtener un índice válido en la cadena de letras y así obtener un color hexadecimal aleatorio
    }
    return color;
}

