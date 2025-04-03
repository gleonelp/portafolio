document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));

  // Scroll suave desde el menú
  document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        const targetId = anchor.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) throw new Error(`Sección '${targetId}' no encontrada.`);
        targetElement.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        console.error("Error al desplazarse a la sección:", error.message);
        alert("Sección no disponible. Verifica que el enlace esté bien escrito.");
      }
    });
  });

  // Botones con atributo data-alert (para mostrar demo no disponible)
  document.querySelectorAll("button[data-alert]").forEach(button => {
    button.addEventListener("click", () => {
      alert("Demo no disponible aún. Pronto estará en línea.");
    });
  });

  // Botón para copiar comando git
  const copyButton = document.querySelector("button[onclick*='clipboard']");
  if (copyButton) {
    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText('git clone https://github.com/gleonelp/portafolio.git');
      alert("¡Comando copiado!");
    });
  }
});

