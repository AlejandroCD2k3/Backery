/* ===================================== */
/*       FUNCIÓN DE PAGO SIMULADO       */
/* ===================================== */

function realizarPago() {
  // Ocultar carrito y formulario
  const contenedorCarrito = document.querySelector('.carrito-wrapper');
  contenedorCarrito.style.display = 'none';

  // Mostrar mensaje de agradecimiento final
  const mensajeFinal = document.getElementById('mensaje-final');
  mensajeFinal.style.display = 'block';

  // Crear y mostrar aviso flotante
  const mensajeFlotante = document.createElement("div");
  mensajeFlotante.innerText = "¡Gracias por tu compra! 💵🍰";

  // Estilos del mensaje flotante
  Object.assign(mensajeFlotante.style, {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#ffc7d4",
    color: "#6a1f35",
    padding: "1.2rem 2.5rem",
    border: "3px solid #e6738f",
    borderRadius: "25px",
    boxShadow: "0 10px 25px rgba(255, 105, 135, 0.5)",
    zIndex: "9999",
    fontFamily: "'Cherry Swash', cursive",
    fontSize: "1.4rem",
    fontWeight: "bold",
    transition: "opacity 0.3s ease"
  });

  document.body.appendChild(mensajeFlotante);

  // Desvanecer y eliminar mensaje después de 1s
  setTimeout(() => {
    mensajeFlotante.style.opacity = "0";
    setTimeout(() => mensajeFlotante.remove(), 500);
  }, 1000);
}

