// Esperamos a que todo el contenido de la página se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Seleccionamos todos los enlaces de proyectos que están dentro de los bloques
  const projectLinks = document.querySelectorAll('.block ul a');

  // 2. Recorremos cada uno de los enlaces que encontramos
  projectLinks.forEach(link => {

    // 3. Añadimos un "escuchador" para cuando el mouse entre en el área del enlace
    link.addEventListener('mouseenter', () => {
      // Obtenemos la ruta de la imagen desde el atributo 'data-bg' que pusimos en el HTML
      const imageUrl = link.dataset.bg;
      
      // Buscamos el bloque (.industrial, .code, .ux) que es el "padre" de este enlace
      const parentBlock = link.closest('.block');
      
      // Si encontramos la ruta y el bloque padre, cambiamos el estilo del fondo
      if (imageUrl && parentBlock) {
        parentBlock.style.backgroundImage = `url('${imageUrl}')`;
      }
    });

    // 4. Añadimos otro "escuchador" para cuando el mouse salga del área del enlace
    link.addEventListener('mouseleave', () => {
      // Buscamos de nuevo el bloque padre
      const parentBlock = link.closest('.block');

      // Si lo encontramos, quitamos la imagen de fondo para que vuelva al color original del CSS
      if (parentBlock) {
        parentBlock.style.backgroundImage = '';
      }
    });

  });

});