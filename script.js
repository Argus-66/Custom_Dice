function rollDice() {
    const maxNumber = document.getElementById('max-number').value;
    const result = Math.floor(Math.random() * maxNumber) + 1;
    const resultDiv = document.getElementById('result');
    
    resultDiv.textContent = `You rolled a ${result}`;
    resultDiv.classList.remove('fadeIn');
    void resultDiv.offsetWidth;  // Trigger reflow to restart the animation
    resultDiv.classList.add('fadeIn');
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeIcon = document.getElementById('mode-icon');
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.src = 'moon.png';
    } else {
        modeIcon.src = 'sun.png';
    }
}
