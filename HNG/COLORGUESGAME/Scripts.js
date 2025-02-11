let wins = 0;
let loses = 0;
let targetColorHex;


function showFeedback(isCorrect) {
    const feedbackText = document.getElementById('feedbackText');
    feedbackText.textContent = isCorrect ? 'Correct!' : 'Wrong!';
    feedbackText.className = 'feedback-text ' + (isCorrect ? 'correct' : 'wrong');
    
    setTimeout(() => {
        feedbackText.className = 'feedback-text';
        feedbackText.textContent = '';
    }, 1000);
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    
    const sizes = ['small', 'medium', 'large'];
    star.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
    
    star.style.left = Math.random() * window.innerWidth + 'px';
    
    // Slower animation duration (between 8 and 12 seconds)
    star.style.animationDuration = (Math.random() * 4 + 8) + 's';
    
    document.body.appendChild(star);
    
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

function startStarAnimation() {
    // Create stars less frequently (every 150ms)
    setInterval(createStar, 150);
    
    // Initial burst of stars
    for(let i = 0; i < 30; i++) {
        setTimeout(createStar, Math.random() * 1000);
    }
}

function showResultIcon(isWin) {
    const iconContainer = document.getElementById('resultIcon');
    // Remove previous icon if exists
    iconContainer.innerHTML = '';
    
    // Create new lord-icon element
    const lordIcon = document.createElement('lord-icon');
    lordIcon.setAttribute('colors', 'primary:#e95139');
    lordIcon.setAttribute('trigger', 'loop');
    lordIcon.setAttribute('state', 'loop');
    
    if (isWin) {
        lordIcon.setAttribute('src', 'https://cdn.lordicon.com/tqywkdcz.json'); // thumbs up icon
    } else {
        lordIcon.setAttribute('src', 'https://cdn.lordicon.com/cllunfud.json'); // thumbs down icon
    }
    
    iconContainer.appendChild(lordIcon);
    iconContainer.classList.add('visible');
    
    // Hide after 2 seconds
    setTimeout(() => {
        iconContainer.classList.remove('visible');
    }, 2000);
}

function updateScores() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('loses').textContent = loses;

}

function checkGuess(guessedColor) {
    if (guessedColor === targetColorHex) {
        wins++;
        showFeedback(true);
        showResultIcon(true);
        updateScores();
        setTimeout(() => createColorBoxes(), 500);
    } else {
        loses++;
        showFeedback(false);
        showResultIcon(false);
        updateScores();
    }
}


function resetGame() {
    wins = 0;
    loses = 0;
    consecutiveWins = 0;
    consecutiveLoses = 0;
    updateScores();
    createColorBoxes();

    const feedbackText = document.getElementById('feedbackText');
    feedbackText.className = 'feedback-text';
    feedbackText.textContent = '';  
}

function createColorBoxes() {
    const grid = document.getElementById('colorGrid');
    grid.innerHTML = '';
    
    targetColorHex = generateRandomColor();
    document.getElementById('targetColor').style.backgroundColor = targetColorHex;

    const colors = [targetColorHex];
    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }

    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    colors.forEach(color => {
        const box = document.createElement('div');
        box.className = 'color-box';
        box.style.backgroundColor = color;
        box.onclick = () => checkGuess(color);
        grid.appendChild(box);
    });
}

// Initialize game and start animations
document.addEventListener('DOMContentLoaded', () => {
    createColorBoxes();
    startStarAnimation();
});