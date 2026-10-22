const config = window.SOLAME;
const setText = (selector, value) => document.querySelectorAll(selector).forEach((node) => { node.textContent = value; });

if (config) {
  const { event, contact } = config;
  setText('[data-city]', event.city);
  setText('[data-venue]', event.venue);
  setText('[data-dates]', event.dates);
  setText('[data-arrival]', event.arrival);
  setText('[data-hours]', event.hours);
  setText('[data-participants]', event.participants);
  setText('[data-price]', event.price);
  setText('[data-duration]', event.duration);
  document.querySelectorAll('[data-booking]').forEach((link) => { link.href = event.bookingUrl; });
  document.querySelectorAll('[data-phone]').forEach((link) => { link.href = `tel:${contact.phoneLink}`; });
  setText('[data-phone-text]', contact.phone);
  document.querySelectorAll('[data-email]').forEach((link) => { link.href = `mailto:${contact.email}`; });
  setText('[data-email-text]', contact.email);
  document.querySelectorAll('[data-website]').forEach((link) => { link.href = contact.website; });
  setText('[data-website-text]', new URL(contact.website).hostname.replace(/^www\./, ''));
  document.querySelectorAll('[data-facebook]').forEach((link) => { link.href = contact.facebook; });
  document.querySelectorAll('[data-instagram]').forEach((link) => { link.href = contact.instagram; });
  setText('[data-instagram-text]', contact.instagramName);
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Ouvrir le menu' : 'Fermer le menu');
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Ouvrir le menu');
  nav.classList.remove('open');
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-photo').forEach((photo) => photo.addEventListener('click', () => {
  lightboxImage.src = photo.dataset.full;
  lightboxImage.alt = photo.querySelector('img').alt;
  lightbox.showModal();
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
