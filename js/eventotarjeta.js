// Obtener todos los botones que abren una ventana emergente
const openModalButtons = document.querySelectorAll(".open-modal"); // Asume que todos los botones tienen esta clase

// Obtener todos los modales y botones de cierre correspondientes
const modals = document.querySelectorAll(".modal");
const closeModalButtons = document.querySelectorAll(".close");

// Función para abrir un modal específico
openModalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].style.display = "block"; // Abrir el modal correspondiente
  });
});

// Función para cerrar un modal específico al hacer clic en la "x"
closeModalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].style.display = "none"; // Cerrar el modal correspondiente
  });
});

// Función para cerrar el modal al hacer clic fuera de la ventana emergente
window.addEventListener('click', (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Obtener las imágenes del carrusel para cada carrusel
const carousels = document.querySelectorAll('.carousel-container');

// Función para inicializar carruseles
carousels.forEach((carousel) => {
  const images = carousel.querySelectorAll('.carousel-image');
  const nextButton = carousel.querySelector('.next-btn');
  const prevButton = carousel.querySelector('.prev-btn');
  let currentIndex = 0;

  // Función para mostrar la imagen actual en el carrusel
  function showImage(index) {
    images.forEach((img, i) => {
      img.style.transform = `translateX(-${index * 100}%)`;
    });
  }

  // Avanzar al siguiente slide
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Retroceder al slide anterior
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
});
