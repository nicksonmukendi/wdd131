// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.textContent = nav.classList.contains('active') ? '✕' : '☰';
});

// Footer dynamic content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastupdated').textContent += lastModified;