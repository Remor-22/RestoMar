// Particles Component
class Particles {
    constructor() {
        this.init();
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 ? '#ff8c42' : '#f4d03f';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 10;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: particle.style.opacity },
            { transform: `translate(${Math.random() * 200 - 100}px, -${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 8000 + 5000,
            easing: 'linear'
        });
        
        animation.onfinish = () => particle.remove();
    }

    init() {
        // Create particles periodically
        setInterval(() => this.createParticle(), 2000);

        // Add some initial particles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => this.createParticle(), i * 400);
        }
    }
}