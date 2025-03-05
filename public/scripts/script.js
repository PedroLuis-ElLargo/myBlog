
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// JavaScript para manejar el menú de navegación móvil
document.addEventListener('DOMContentLoaded', function () {
    const listaMenu = document.querySelector('nav ul'); // Cambiado de '.listaMenu' a 'nav ul'

    document.querySelector('.fa-bars').addEventListener('click', function () {
        if (listaMenu.style.display === 'flex') {
            listaMenu.style.display = 'none'; // Ocultar si ya está visible
        } else {
            listaMenu.style.display = 'flex'; // Mostrar si está oculto
        }
    });

    document.querySelector('.fa-xmark').addEventListener('click', function () {
        listaMenu.style.display = 'none'; // Ocultar al hacer clic en la "X"
    });

    // Agregar evento click a cada enlace dentro del menú
    const enlacesMenu = document.querySelectorAll('nav ul a'); // Cambiado de '.listaMenu a' a 'nav ul a'
    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            if (screenWidth <= 700) {
                listaMenu.style.display = 'none'; // Ocultar al hacer clic en un enlace en pantallas pequeñas
            }
        });
    });
});


//funcion para que el usuario envie el correo

const form = document.querySelector('#contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const subject = `New message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    const mailto = `mailto:pedroluisvp99@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    limpiarCampos(); 
  });
  
const limpiarCampos = () =>{
    document.querySelector( '#name' ).value = "";
    document.querySelector( '#email' ).value = "";
    document.querySelector( '#message' ).value = "";
}