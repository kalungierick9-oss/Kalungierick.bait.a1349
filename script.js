'use strict';

// Mobile menu toggle
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

// Filter menu cards without changing their HTML contents
const filterButtons = document.querySelectorAll('.filter');
const dishes = document.querySelectorAll('.dish-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach(btn => {
      const selected = btn === button;
      btn.classList.toggle('active', selected);
      btn.setAttribute('aria-pressed', String(selected));
    });
    dishes.forEach(dish => {
      dish.hidden = category !== 'all' && dish.dataset.category !== category;
    });
  });
});

// Use the visitor's local date, not UTC, as the earliest possible reservation date.
const dateInput = document.querySelector('#booking-date');
if (dateInput) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${year}-${month}-${day}`;
}

const yearNode = document.querySelector('#year');
if (yearNode) yearNode.textContent = new Date().getFullYear();
