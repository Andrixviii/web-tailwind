const burgerButton = document.getElementById('burger-button');
const mobileMenu = document.getElementById('mobile-menu');

burgerButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden'); // Toggle menu visibility
});