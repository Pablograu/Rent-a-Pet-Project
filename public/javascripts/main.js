
function main() {
  const menuDropped = document.getElementById('menulist');
  const navButton = document.getElementById('closebtn');

  function navToggle() {
    menuDropped.classList.toggle('show-menu');
  }

  navButton.addEventListener('click', navToggle);
}

// const ex = document.querySelector('.touchAndHide');
// const lis = document.querySelectorAll('.petsProfile');
// ex.addEventListener('click', () => {
//   console.log(lis);
//   lis.classList.toggle('hideme');
// });

window.addEventListener('load', main);
