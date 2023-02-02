let elements = document.getElementsByClassName('element');
elements = Array.from(elements);


let playerScore = 0;
let enemyScore = 0;
let pScore = document.getElementById('player-score');
let eScore = document. getElementById('enemy-score')
let enemyChoice = document.getElementById('enemy-choice');
let playerScoreBoard = document.getElementById('footer-left');
let enemyScoreBoard = document.getElementById('footer-right');
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
    };
};

function startGame() {
    elements.forEach((element) => 
    element.addEventListener('click', () => {
        playRound(element.id);
    })
  );
  console.log('begin')
};

function checkScore() {
    if (playerScore === 5) {
        document.getElementById('reset-button').style.display = 'block';
    } else if (enemyScore === 5) {
        document.getElementById('reset-button').style.display = 'block'; 
    } else  {
        return;
    }
};

reset.addEventListener('click', () => {
    event.stopPropagation();
    playerScore = 0;
    enemyScore = 0;
    pScore.innerText = 'Player: 0';
    eScore.innerText = '0 :Enemy';
    playerWin.innerText = '';
    enemyWin.innerText = '';
    tie.innerText = '';
    playerScoreBoard.style.border = '4px solid var(--off-white)';
    enemyScoreBoard.style.border = '4px solid var(--off-white)';
    enemyChoice.classList.remove('fa-solid', 'fa-brands', 'fa-question', 
    'fa-fire-flame-curved', 'fa-droplet', 'fa-envira');
    enemyChoice.classList.add('fa-solid', 'fa-question');
    reset.style.display = 'none';
    startGame();
});

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
        enemyChoice.classList.add('fa-solid', 'fa-question');
    };

    if (playerSelection === enemySelection) {
        playerWin.innerText = '';
        enemyWin.innerText = '';
        tie.innerText = 'It\s a tie';
        playerScoreBoard.style.border = '4px solid var(--off-white)';
        enemyScoreBoard.style.border = '4px solid var(--off-white)';
    } else if (playerSelection === 'fire' && enemySelection === 'earth') {
        tie.innerText = '';
        enemyWin.innerText = '';
        playerWin.innerText = 'Fire incinerates earth!'
        playerScore++;
        pScore.innerText = `Player: ${playerScore}`;
        playerScoreBoard.style.border = '4px solid var(--green)';
        enemyScoreBoard.style.border = '4px solid var(--red)';
    } else if (playerSelection === 'fire' && enemySelection === 'water') {
        tie.innerText = '';
        playerWin.innerText = '';
        enemyWin.innerText = 'Water extinguishes fire!'
        enemyScore++;
        eScore.innerText = `${enemyScore} :Enemy`;
        playerScoreBoard.style.border = '4px solid var(--red)';
        enemyScoreBoard.style.border = '4px solid var(--green)';
    } else if (playerSelection === 'water' && enemySelection === 'fire') {
        tie.innerText = '';
        enemyWin.innerText = '';
        playerWin.innerText = 'Water extinguishes fire!';
        playerScore++;
        pScore.innerText = `Player: ${playerScore}`;
        playerScoreBoard.style.border = '4px solid var(--green)';
        enemyScoreBoard.style.border = '4px solid var(--red)';
    } else if (playerSelection === 'water' && enemySelection === 'earth') {
        tie.innerText = '';
        playerWin.innerText = '';
        enemyWin.innerText = 'Earth overpowers water!';
        enemyScore++;
        eScore.innerText = `${enemyScore} :Enemy`;
        playerScoreBoard.style.border = '4px solid var(--red)';
        enemyScoreBoard.style.border = '4px solid var(--green)';
    } else if (playerSelection === 'earth' && enemySelection === 'water') {
        tie.innerText = '';
        enemyWin.innerText = '';
        playerWin.innerText = 'Earth overpowers water!';
        playerScore++;
        pScore.innerText = `Player: ${playerScore}`;
        playerScoreBoard.style.border = '4px solid var(--green)';
        enemyScoreBoard.style.border = '4px solid var(--red)';
    } else if (playerSelection === 'earth' && enemySelection === 'fire') {
        tie.innerText = '';
        playerWin.innerText = '';
        enemyWin.innerText = 'Fire incinerates earth!';
        enemyScore++;
        eScore.innerText = `${enemyScore} :Enemy`;
        playerScoreBoard.style.border = '4px solid var(--red)';
        enemyScoreBoard.style.border = '4px solid var(--green)';
    };

    checkScore();
}

startGame();













