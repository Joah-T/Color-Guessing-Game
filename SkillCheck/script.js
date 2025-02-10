document.querySelectorAll('.card').forEach(card => {
    const icons = card.querySelectorAll('lord-icon');
    
    card.addEventListener('mouseenter', () => {
        icons.forEach(icon => {
            icon.setAttribute('trigger', 'loop');
        });
    });

    card.addEventListener('mouseleave', () => {
        icons.forEach(icon => {
            icon.removeAttribute('trigger');
        });
    });
});