// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');

const menu = document.querySelector('#hamburger-menu');

// Open Menu When Clicked On Hamburger Menu Icon
menu.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

// Close Menu When Clicked Outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
