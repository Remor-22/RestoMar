// Main Application
class App {
    constructor() {
        this.components = {};
        this.init();
    }

    init() {
        // Initialize all components
        this.components.header = new Header();
        this.components.animations = new Animations();
        this.components.particles = new Particles();
        this.components.cards = new Cards();
        /*contact*/
        this.components.contactForm = new ContactForm();

        console.log('🍖 Resto Grill website loaded successfully!');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});