document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
  
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove('open');
      }
    });
  });
  
  function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }