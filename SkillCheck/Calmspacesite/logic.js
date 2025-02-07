document.addEventListener('DOMContentLoaded', () => {
    // Initial landing page animations
    const landingElements = document.querySelectorAll('.hero-title, .hero-subtitle, .cta-buttons, .app-preview');
    landingElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        element.style.transitionDelay = `${index * 0.4}s`;
        
        // Trigger animation after a short delay
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    });
});