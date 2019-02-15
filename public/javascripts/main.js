
function main() {
  const menuDropped = document.getElementById('menulist');
  const navButton = document.getElementById('closebtn');

  navButton.addEventListener('click', () => {
    menuDropped.classList.toggle('show-menu');
    navButton.classList.toggle('open');
  });
}

// const ex = document.querySelector('.touchAndHide');
// const lis = document.querySelectorAll('.petsProfile');
// ex.addEventListener('click', () => {
//   console.log(lis);
//   lis.classList.toggle('hideme');
// });

window.addEventListener('load', main);
