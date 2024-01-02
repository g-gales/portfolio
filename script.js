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