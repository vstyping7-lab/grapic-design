const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  const service = document.querySelector('#service');
  service.value = link.dataset.service;
}));

document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#contactForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Project inquiry — ${data.get('service')}`);
  const body = encodeURIComponent(
    `Hello VS Typing & Design,\n\nMy name is ${data.get('name')}.\nContact: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message') || 'I would like to discuss a project.'}\n\nThank you!`
  );
  // Replace this placeholder with your real business email address.
  const businessEmail = 'YOUR-EMAIL@example.com';
  if (businessEmail === 'YOUR-EMAIL@example.com') {
    document.querySelector('#formNote').textContent = 'Your form is working, but it needs your real business email. Open script.js and replace YOUR-EMAIL@example.com with your email address, then the form will open an email draft.';
    return;
  }
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
