document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuMobile = document.querySelector('.menu-mobile');
  
    // Manejar el click del botón de menú hamburguesa
    menuToggle.addEventListener('click', function() {
      menuMobile.classList.toggle('show');
    });
  
    // Manejar el click en las opciones con submenú
    const menuItemsWithSubmenu = document.querySelectorAll('.menu-mobile li > a');
  
    menuItemsWithSubmenu.forEach(function(menuItem) {
      menuItem.addEventListener('click', function(event) {
        const submenu = menuItem.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
          event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
          submenu.classList.toggle('show');
        }
      });
    });
  
    // Manejar el clic fuera del menú móvil para cerrar el menú
    document.addEventListener('click', function(event) {
      if (!menuMobile.contains(event.target) && !menuToggle.contains(event.target)) {
        menuMobile.classList.remove('show');
      }
    });
  });



