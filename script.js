// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');
const frontal = tarjeta.querySelector('.frontal');
const posterior = tarjeta.querySelector('.posterior');

// Función para voltear la tarjeta
function voltearTarjeta() {
    tarjeta.style.transform = 'rotateY(180deg)';
    verDetallesButton.style.display = 'none';
    volverButton.style.display = 'block';
}

// Función para volver a la cara frontal
function volverCaraFrontal() {
    tarjeta.style.transform = 'rotateY(0deg)';
    verDetallesButton.style.display = 'block';
    volverButton.style.display = 'none';
}

// Evento click en el botón ver detalles
verDetallesButton.addEventListener('click', voltearTarjeta);

// Evento click en el botón volver
volverButton.addEventListener('click', volverCaraFrontal);