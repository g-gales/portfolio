document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the document
    document.addEventListener('click', function (event) {
      var menu = document.querySelector('.menu');
      var menuBtn = document.querySelector('.menu-btn');
  
      // Check if the click target is not within the menu or the menu button
      if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.style.display = 'none';
        menu.style.left = '-250px';
      }
    });
  });

function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
      menu.style.left = '-250px';
    } else {
      menu.style.display = 'flex';
      menu.style.left = '0';
    }
  }