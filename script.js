let currentRandomAlpha = '';
let playerPoint = 0;
let playerLife = 10;
let isHomeScreen = true;

function scoreSaver(bool) {
    if (bool) {
        playerPoint++;
        document.getElementById('scoreId').innerText = playerPoint;
        continueGame();
    } else {
        playerLife--;
        if (playerLife <= 0) {
            document.getElementById('playground').classList.add('hidden');
            gameOver(playerPoint);
        } else {
            document.getElementById('lifeId').innerText = playerLife;
        }
    }
}
function randomAlphabetGenerator() {
    let difference = 90 - 65;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = String.fromCodePoint(rand + 65);
    return rand;
}

function play() {
    hideElementByID('home');
    showElementByID('playground');
    continueGame();
}

function handleKeyboardEvent(event) {
    const pressedKey = event.key;
    const randKey = document.getElementById('randAlpha');
    if (pressedKey == "Enter") {
        play();
    } else {
        if (pressedKey == randKey.innerText.toLowerCase()) {
            removeBgColor(randKey.innerText.toLowerCase())
            scoreSaver(true);
        } else {
            scoreSaver(false);
        }

    }

}

document.addEventListener('keyup', handleKeyboardEvent);

function continueGame() {
    const alphaBet = randomAlphabetGenerator();
    const currentAlpha = document.getElementById('randAlpha');
    currentAlpha.innerText = alphaBet;
    addBgColor(alphaBet.toLowerCase());
}
function playAgain() {
    score.classList.add('hidden');
    const randKey = document.getElementById('randAlpha');
    removeBgColor(randKey.innerText.toLowerCase());
    playerLife = 10;
    document.getElementById('lifeId').innerText = playerLife;
    playerPoint = 0;
    document.getElementById('scoreId').innerText = playerPoint;
    document.addEventListener('keyup', handleKeyboardEvent);
    play();
}
function gameOver(playerPoint) {
    const score = document.getElementById('score');
    score.classList.remove('hidden');
    const finalScore = document.getElementById('finalScore');
    finalScore.innerText = playerPoint;
    const playNowBtn = document.getElementById('playAgain');
    document.removeEventListener('keyup', handleKeyboardEvent);
    playNowBtn.addEventListener('click', function () {
        playAgain();
    });
}

