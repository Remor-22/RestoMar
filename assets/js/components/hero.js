/*contact*/
class Hero {
    constructor() {
        this.heroSection = document.querySelector('.hero-section');
        this.init();
    }

    init() {
        this.addScrollEffect();
    }

    addScrollEffect() {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const opacity = 1 - Math.min(scrollPosition / 300, 1);
            this.heroSection.style.opacity = opacity;
        });
    }
}

// Initialize the Hero component when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Hero();
});