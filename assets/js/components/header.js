// Header Component
class Header {
    constructor() {
        this.header = document.getElementById('header');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.navMenu = document.getElementById('navMenu');
        this.init();
    }

    init() {
        // Mobile Menu Toggle
        this.mobileMenu.addEventListener('click', () => {
            this.mobileMenu.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.mobileMenu.contains(e.target)) {
                this.navMenu.classList.remove('active');
                this.mobileMenu.classList.remove('active');
            }
        });
    }
}

// Inicializar el header cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Header();
});