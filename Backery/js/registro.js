document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("boton-registro");

  if (boton) {
    boton.addEventListener("click", function (e) {
      e.preventDefault();

      const texto = boton.querySelector(".texto-boton");
      const icono = boton.querySelector(".icono-boton");

      // Accesibilidad: Oculta visualmente pero no elimina del árbol
      texto.style.opacity = "0";
      boton.classList.add("mostrando-icono");

      setTimeout(() => {
        boton.classList.remove("mostrando-icono");
        icono.style.opacity = "0";

        // Redirige luego de confirmación visible
        window.location.href = "inicioPasteleria.html";
      }, 1000);
    });
  }

  const switchBtn = document.getElementById("enlace-login");
  const formContainer = document.querySelector(".form-container");

  if (switchBtn && formContainer) {
    switchBtn.addEventListener("click", (e) => {
      e.preventDefault();

      formContainer.innerHTML = `
        <h1 class="titulo-pagina">🎂 Bienvenidos a Dulce Tentación 🍩</h1>
        <h2>Iniciar Sesión</h2>
        <form action="/login" method="POST" aria-labelledby="form-login">
          <label for="login-correo">Correo electrónico</label>
          <input type="email" id="login-correo" name="correo" required aria-required="true" />

          <label for="login-contraseña">Contraseña</label>
          <input type="password" id="login-contraseña" name="contraseña" required aria-required="true" />

          <button type="submit" id="boton-login" aria-label="Iniciar sesión">
            <span class="texto-boton">🔐 Iniciar Sesión</span>
            <img class="icono-boton" src="/img/registro/ok-check.png" alt="" aria-hidden="true" />
          </button>
        </form>
        <div class="switch-form">
          ¿No tienes cuenta? <a href="#" id="volver-a-registro" aria-label="Volver al formulario de registro">Crear una</a>
        </div>
      `;

      activarAnimacionBoton("boton-login");
      activarCambioFormulario();

      // Accesibilidad: Foco automático al primer input del nuevo formulario
      const primerInput = document.getElementById("login-correo");
      if (primerInput) primerInput.focus();
    });
  }

  function activarAnimacionBoton(idBoton) {
    const nuevoBoton = document.getElementById(idBoton);
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

  function activarCambioFormulario() {
    const volver = document.getElementById("volver-a-registro");
    if (volver) {
      volver.addEventListener("click", (e) => {
        e.preventDefault();
        location.reload(); // Recarga para volver al formulario original con accesibilidad
      });
    }
  }
});


