let elements = document.getElementsByClassName('element');
elements = Array.from(elements)

let playerScore = 0;
let enemyScore = 0;
let pScore = document.getElementById('player-score');
let eScore = document. getElementById('enemy-score')
let enemyChoice = document.getElementById('enemy-choice');
let playerScoreBoard = document.getElementById('footer-left');
let enemeyScoreBoard = document.getElementById('footer-right');
let playerWin = document.getElementById('player-win-alert');
let tie = document.getElementById('tie-alert');
let enemyWin = document.getElementById('enemy-win-alert');
let reset = document.getElementById('reset-button');

function getEnemyChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0) {
        return 'fire';
    } else if (randomNumber == 1) {
        return 'water';
    } else {
        return 'earth';
    } 
}

function startGame() {
    elements.forEach((element) => 
    element.addEventListener('click', () => {
        playRound(element.id);
    })
  );
}

function checkScore() {
    // create a function to check the score after each round
}

function resetGame() {
    // create a function to reset the game once the reset button is pressed
}

function playRound(playerSelection) {
    let enemySelection = getEnemyChoice();
    enemyChoice.classList.remove('fa-solid', 'fa-brands', 'fa-question', 
            'fa-fire-flame-curved', 'fa-droplet', 'fa-envira');
    if (enemySelection === 'fire') {
            enemyChoice.classList.add('fa-solid', 'fa-fire-flame-curved');
    } else if (enemySelection === 'water') {
        enemyChoice.classList.add('fa-solid', 'fa-droplet');
    } else if(enemySelection === 'earth') {
        enemyChoice.classList.add('fa-brands', 'fa-envira');
    } else {
        enemyChoice.classList.add('fa-solid', 'fa-question')
    }
}

startGame();













