document.querySelectorAll(".flecha").forEach(boton => {
    boton.addEventListener("click", () => {
        const direccion = boton.classList.contains("izquierda") ? -1 : 1;
        const contenedorId = boton.getAttribute("data-target");
        const carrusel = document.getElementById(contenedorId);
        const scrollAmount = carrusel.offsetWidth * 0.8;
        carrusel.scrollBy({
            left: direccion * scrollAmount,
            behavior: "smooth"
        });
    });
});
