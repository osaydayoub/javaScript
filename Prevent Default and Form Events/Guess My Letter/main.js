const letterToGuess = document.querySelector(".letter-to-guess");
const message = document.querySelector(".message");
const playAgainContainer = document.querySelector(".play-again-container");
const yesButton = document.querySelector("button");
const wrongLetters = document.querySelector(".wrong-letters");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let gameON = true;
let wrongGuessesArray = [];
let randomLetter = getRandomLetter();

window.addEventListener('keyup', function (event) {
    let key = event.key.toLocaleLowerCase();
    if (!gameON) {
        return;
    }
    if (alphabet.includes(key) && key === randomLetter) {
        rightGuess();
    } else {
        wrongGuess(key);
    }
})
yesButton.addEventListener('click', function () {
    startNewGame();
})
function getRandomLetter() {
    let optionsNumber = alphabet.length;
    return alphabet.charAt(Math.floor(Math.random() * optionsNumber));
}

function rightGuess() {
    gameON = false;
    message.textContent = "Right letter!";
    message.style.color = "green";
    letterToGuess.textContent = randomLetter;
    playAgainContainer.style.display = "flex";
}
function wrongGuess(key) {
    message.style.color = "red";
    if(!alphabet.includes(key)){
        message.textContent ="this is not allowed"
        return;
    }
    if (wrongGuessesArray.includes(key)) {
        message.textContent = `Nope, Already Guessed ${key}`
    } else {
        message.textContent = "Nope, wrong letter";
        wrongGuessesArray.push(key);
        if (wrongLetters.textContent === "") {
            wrongLetters.textContent = key;
        } else {
            wrongLetters.textContent = wrongLetters.textContent + `,${key}`
        }
    }
}

function startNewGame() {
    gameON = true;
    randomLetter = getRandomLetter();
    playAgainContainer.style.display = 'none';
    wrongLetters.textContent = "";
    wrongGuessesArray = [];
    message.textContent = "Guess a key";
    letterToGuess.textContent = "?";
    message.style.color = "black";
}