/* ============================== */
/*   DESPLAZAMIENTO A PRODUCTOS  */
/* ============================== */
function verProductos() {
  const productosSection = document.getElementById("productos");
  if (productosSection) {
    const yOffset = -200;
    const y = productosSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}


/* ============================== */
/*  ENLACES DE NAVEGACIÓN SUAVE  */
/* ============================== */
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));
    const offset = -200; // Ajustar según la altura del header

    if (destino) {
      const posicion = destino.offsetTop + offset;
      window.scrollTo({
        top: posicion,
        behavior: 'smooth'
      });
    }
  });
});


/* ============================== */
/*     FUNCIÓN DE PAGO SIMULADO  */
/* ============================== */
function realizarPago() {
  const mensaje = document.createElement("div");
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
    transition: "opacity 0.3s ease"
  });

  document.body.appendChild(mensaje);

  // Desvanecer y eliminar el mensaje
  setTimeout(() => {
    mensaje.style.opacity = "0";
    setTimeout(() => mensaje.remove(), 500);
  }, 1000);
}
