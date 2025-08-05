/* ============================== */
/*   DESPLAZAMIENTO A PRODUCTOS  */
/* ============================== */
function verProductos() {
  const productosSection = document.getElementById("productos");
  if (productosSection) {
    const yOffset = -100; // Reducción del offset para visibilidad completa
    const y = productosSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/* ============================== */
/*  ENLACES DE NAVEGACIÓN SUAVE  */
/* ============================== */
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      const offset = -100;
      const posicion = destino.offsetTop + offset;
      window.scrollTo({
        top: posicion,
        behavior: "smooth",
      });
    }
  });
});

/* ============================== */
/*     FUNCIÓN DE PAGO SIMULADO  */
/* ============================== */
function realizarPago() {
  const mensaje = document.createElement("div");
  mensaje.setAttribute("role", "status"); // accesibilidad
  mensaje.setAttribute("aria-live", "polite");
  mensaje.setAttribute("tabindex", "0"); // para poder ser enfocado si es necesario
  mensaje.innerText = "¡Gracias por tu compra! 💵🍰";

  // Estilos del mensaje
  Object.assign(mensaje.style, {
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
    transition: "opacity 0.3s ease",
  });

  document.body.appendChild(mensaje);

  // Desvanecer y eliminar el mensaje con transición
  setTimeout(() => {
    mensaje.style.opacity = "0";
    setTimeout(() => mensaje.remove(), 500);
  }, 1500);
}
