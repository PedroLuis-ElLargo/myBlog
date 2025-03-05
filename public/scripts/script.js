var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// JavaScript para manejar el menú de navegación móvil
document.addEventListener("DOMContentLoaded", function () {
  const listaMenu = document.querySelector("nav ul"); // Cambiado de '.listaMenu' a 'nav ul'

  document.querySelector(".fa-bars").addEventListener("click", function () {
    if (listaMenu.style.display === "flex") {
      listaMenu.style.display = "none"; // Ocultar si ya está visible
    } else {
      listaMenu.style.display = "flex"; // Mostrar si está oculto
    }
  });

  document.querySelector(".fa-xmark").addEventListener("click", function () {
    listaMenu.style.display = "none"; // Ocultar al hacer clic en la "X"
  });

  // Agregar evento click a cada enlace dentro del menú
  const enlacesMenu = document.querySelectorAll("nav ul a"); // Cambiado de '.listaMenu a' a 'nav ul a'
  enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (screenWidth <= 700) {
        listaMenu.style.display = "none"; // Ocultar al hacer clic en un enlace en pantallas pequeñas
      }
    });
  });
});

//funcion para que el usuario envie el correo

document
  .querySelector("#contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      let result = await response.json();
      if (result.success) {
        alert("Correo enviado correctamente");
      } else {
        alert("Error al enviar el correo: " + result.error);
      }
    } catch (error) {
      alert("Error en la solicitud: " + error.message);
    }

    limpiarCampos();
  });
