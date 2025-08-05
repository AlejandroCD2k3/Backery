/* ============================== */
/*     INICIALIZACIÓN DOM        */
/* ============================== */
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("boton-registro");

  /* ============================== */
  /*      ANIMACIÓN DE REGISTRO    */
  /* ============================== */
  if (boton) {
    boton.addEventListener("click", function (e) {
      e.preventDefault();

      const texto = boton.querySelector(".texto-boton");
      const icono = boton.querySelector(".icono-boton");

      texto.style.opacity = "0";
      boton.classList.add("mostrando-icono");

      setTimeout(() => {
        boton.classList.remove("mostrando-icono");
        icono.style.opacity = "0";

        // Redirigir a la página de inicio
        window.location.href = "inicioPasteleria.html";
      }, 1000);
    });
  }

  /* ============================== */
  /*     CAMBIO A FORM DE LOGIN    */
  /* ============================== */
  const switchBtn = document.getElementById("cambiar-a-login");
  const formContainer = document.querySelector(".form-container");

  if (switchBtn && formContainer) {
    switchBtn.addEventListener("click", (e) => {
      e.preventDefault();

      formContainer.innerHTML = `
        <h1 class="titulo-pagina">🎂 Bienvenidos a Dulce Encanto 🍩</h1>
        <h2>Iniciar Sesión</h2>
        <form action="/login" method="POST">
          <input type="email" name="correo" placeholder="Correo electrónico" required />
          <input type="password" name="contraseña" placeholder="Contraseña" required />
          <button type="submit" id="boton-login">
            <span class="texto-boton">🔐 Iniciar Sesión</span>
            <img class="icono-boton" src="/img/registro/ok-check.png" alt="Login OK" />
          </button>
        </form>
        <div class="switch-form">
          ¿No tienes cuenta? <a href="#" id="cambiar-a-registro">Crear una</a>
        </div>
      `;

      activarAnimacionBoton("boton-login");
      activarCambioFormulario();
    });
  }

  /* ============================== */
  /*    ANIMACIÓN BOTÓN LOGIN      */
  /* ============================== */
  function activarAnimacionBoton(botonId) {
    const nuevoBoton = document.getElementById(botonId);
    if (nuevoBoton) {
      nuevoBoton.addEventListener("click", function (e) {
        e.preventDefault();

        const texto = nuevoBoton.querySelector(".texto-boton");
        const icono = nuevoBoton.querySelector(".icono-boton");

        texto.style.opacity = "0";
        nuevoBoton.classList.add("mostrando-icono");

        setTimeout(() => {
          nuevoBoton.classList.remove("mostrando-icono");
          icono.style.opacity = "0";

          window.location.href = "inicioPasteleria.html";
        }, 1000);
      });
    }
  }

  /* ============================== */
  /*    VOLVER A FORM DE REGISTRO  */
  /* ============================== */
  function activarCambioFormulario() {
    const volverRegistro = document.getElementById("cambiar-a-registro");
    if (volverRegistro) {
      volverRegistro.addEventListener("click", (e) => {
        e.preventDefault();
        location.reload(); // Recarga la página para volver al formulario de registro original
      });
    }
  }
});

