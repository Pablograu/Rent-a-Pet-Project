
function main() {
  const menuDropped = document.getElementById('menulist');
  const navButton = document.getElementById('closebtn');

  function navToggle() {
    menuDropped.classList.toggle('show-menu');
  }

  navButton.addEventListener('click', navToggle);
}

window.addEventListener('load', main);
