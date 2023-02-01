let elements = document.getElementsByClassName('element');
elements = Array.from(elements)

let playerScore = 0;
let enemyScore = 0;
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











