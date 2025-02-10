let wins = 0;
let loses = 0;
let targetColorHex;

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateScores() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('loses').textContent = loses;
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

function checkGuess(guessedColor) {
    if (guessedColor === targetColorHex) {
        wins++;
        updateScores();
        setTimeout(() => createColorBoxes(), 500); // Short delay before next round
    } else {
        loses++;
        updateScores();
    }
}

function resetGame() {
    wins = 0;
    loses = 0;
    updateScores();
    createColorBoxes();
}

// Initialize game
createColorBoxes();