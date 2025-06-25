document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;  // Starting number of attempts
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const resultGif = document.getElementById('resultGif');
    const attemptsDisplay = document.getElementById('attemptCount');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const closeBtn = document.querySelector('.close');

    attemptsDisplay.textContent = attempts;

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);

        if (attempts > 0) {
            if (userGuess === randomNumber) {
                message.textContent = "Congratulations! You've guessed the correct number!";
                resultGif.src = "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"; // Happy GIF
                showPopup("You Win! 🎉");
                attempts += 1;  // Increase attempts on win
                randomNumber = Math.floor(Math.random() * 10) + 1;  // Generate new number
            } else {
                attempts -= 1;  // Decrease attempts on loss
                if (attempts > 0) {
                    message.textContent = `Sorry, that's not it. Try again! You have ${attempts} attempts left.`;
                    resultGif.src = "https://media.giphy.com/media/3og0IPZ6Y1e4hSMJgY/giphy.gif"; // Sad GIF
                    showPopup("You Lose! 😢");
                } else {
                    message.textContent = `Sorry, that's not it. The correct number was ${randomNumber}. You have 0 attempts left.`;
                    resultGif.src = "https://media.giphy.com/media/3og0IPZ6Y1e4hSMJgY/giphy.gif"; // Sad GIF
                    showPopup("No Attempts Left! 😢");
                    guessButton.disabled = true; // Disable the button if attempts are 0
                }
            }
        } else {
            message.textContent = "No attempts left! Please refresh the page to play again.";
        }
        resultGif.style.display = "block";
        attemptsDisplay.textContent = attempts;
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        if (attempts > 0) {
            guessInput.value = '';  // Clear the input field
        } else {
            location.reload();  // Reload the page to restart the game if out of attempts
        }
    });

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.style.display = 'block';
    }
});