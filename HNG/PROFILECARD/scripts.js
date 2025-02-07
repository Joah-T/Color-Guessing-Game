document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.profile-card');
    const showMoreBtn = document.querySelector('.show-more');
    const hideDetailsBtn = document.querySelector('.hide-details');
    const details = document.querySelector('.details');
    const utcTime = document.querySelector('.utc-time');

    function updateUTCTime() {
        const now = new Date();
        utcTime.textContent = now.toUTCString();
    }

    updateUTCTime();
    setInterval(updateUTCTime, 1000);

    showMoreBtn.addEventListener('click', () => {
        card.classList.add('expanded');
        details.classList.add('visible');
        hideDetailsBtn.style.display = 'block';
        setTimeout(() => {
            hideDetailsBtn.style.opacity = '1';
        }, 100);
        showMoreBtn.style.display = 'none';
    });

    hideDetailsBtn.addEventListener('click', () => {
        card.classList.remove('expanded');
        details.classList.remove('visible');
        hideDetailsBtn.style.opacity = '0';
        setTimeout(() => {
            hideDetailsBtn.style.display = 'none';
            showMoreBtn.style.display = 'block';
        }, 300);
    });
});