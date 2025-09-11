/*contact*/
class Features {
    constructor() {
        this.init();
    }

    init() {
        // Initialize feature cards interactions
        this.setupFeatureCards();
    }

    setupFeatureCards() {
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
            });
        });
    }
}