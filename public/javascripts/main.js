
function test() {
  console.log('linked');
}
test();

const menuDropped = document.querySelector('#menulist');
const navButton = document.querySelector('#closebtn');

function navToggle() {
  console.log('click');

  if (menuDropped.classList.value === 'show-menu') {
    menuDropped.classList.remove('show-menu');
  } else {
    menuDropped.classList.add('show-menu');
  }
}
navButton.addEventListener('click', navToggle());
