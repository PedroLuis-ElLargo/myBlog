
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
    document.querySelector('.fa-bars').addEventListener('click', function () {
        const listaMenu = document.querySelector('.listaMenu');
        listaMenu.style.visibility = 'visible';
    });

    document.querySelector('.fa-xmark').addEventListener('click', function () {
        const listaMenu = document.querySelector('.listaMenu');
        listaMenu.style.visibility = 'hidden';
    });

    // Agregar evento click a cada enlace dentro del menú
    const enlacesMenu = document.querySelectorAll('.listaMenu a');
    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            const listaMenu = document.querySelector('.listaMenu');
            listaMenu.style.visibility = 'hidden';
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