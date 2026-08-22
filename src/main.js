import './style.css';

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.querySelector('.sr-only').textContent = open ? 'Open menu' : 'Close menu';
  nav.classList.toggle('is-open', !open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.querySelector('.sr-only').textContent = 'Open menu';
  nav.classList.remove('is-open');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
