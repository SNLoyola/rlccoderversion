// Seleccionamos todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

// Recorremos cada tarjeta
tarjetas.forEach(tarjeta => {
    const tarjetaFrontal = tarjeta.querySelector('.tarjeta-frontal');

    // Evento de clic en la parte frontal de la tarjeta
    tarjetaFrontal.addEventListener('click', () => {
        tarjeta.classList.add('volteada');
    });

    // Evento de clic fuera de la parte frontal para quitar la clase 'volteada'
    tarjeta.addEventListener('click', (event) => {
        if (event.target !== tarjetaFrontal && !tarjetaFrontal.contains(event.target)) {
            tarjeta.classList.remove('volteada');
        }
    });
});