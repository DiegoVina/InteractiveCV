// Obtenemos la referencia al elemento de la carpeta y al postIt
const folderElement = document.getElementById('folder');
const postItElement = document.getElementById('post-it');
const pageElement = document.getElementById('paper');

// Agregamos un evento de clic a la carpeta para abrir y cerrar
folderElement.addEventListener('click', function() {
  folderElement.classList.toggle('open'); // Alternamos la clase "closed" al hacer clic
});

// Agregamos un evento de clic al postIt para pasar de página
postItElement.addEventListener('click', function(event) {
  // Evitamos que el clic en postIt active también el evento de la carpeta
  event.stopPropagation();

  // Alternamos la clase "page" para pasar de página
  pageElement.classList.toggle('page');
});