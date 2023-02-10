let elements = document.getElementsByClassName('element');
elements = Array.from(elements);


let playerScore = 0;
let enemyScore = 0;
let pScore = document.getElementById('player-score');
let eScore = document. getElementById('enemy-score')
let enemyChoice = document.getElementById('enemy-choice');
let playerScoreBoard = document.getElementById('footer-left');
let enemyScoreBoard = document.getElementById('footer-right');
let roundAlert = document.getElementById('round-alert');
let reset = document.getElementById('reset-button');
let clickAudio = document.getElementById('click-sound');

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
    elements.forEach((element) => {
        element.addEventListener('click', playRoundHandler);
    });
}

function checkScore() {
    if (playerScore === 5) {
        document.getElementById('reset-button').style.display = 'block';
        elements.forEach((element) => {
            element.removeEventListener('click', playRoundHandler);
        });
        pScore.style.color = 'var(--green)';
        eScore.style.color = 'var(--red)';
        roundAlert.innerText = 'VICTORY! \nYou have brought balance to the elements'
        pScore.innerText = 'WINNER';
        eScore.innerText = 'LOSER';
    } else if (enemyScore === 5) {
        document.getElementById('reset-button').style.display = 'block';
        elements.forEach((element) => {
            element.removeEventListener('click', playRoundHandler);
        });
        eScore.style.color = 'var(--green)';
        pScore.style.color = 'var(--red)';
        roundAlert.innerText = 'You have been defeated! \nElemental chaos remains'
        eScore.innerText = 'WINNER';
        pScore.innerText = 'LOSER';
    } else  {
        return;
    }
};

reset.addEventListener('click', () => {
    event.stopImmediatePropagation();
    playerScore = 0;
    enemyScore = 0;
    pScore.innerText = 'Player: 0';
    eScore.innerText = '0 :Enemy';
    roundAlert.innerText = '';
    playerScoreBoard.style.border = '4px solid var(--off-white)';
    enemyScoreBoard.style.border = '4px solid var(--off-white)';
    enemyChoice.classList.remove('fa-solid', 'fa-brands', 'fa-question', 
    'fa-fire-flame-curved', 'fa-droplet', 'fa-envira');
    enemyChoice.classList.add('fa-solid', 'fa-question');
    reset.style.display = 'none';
    pScore.style.color = 'var(--off-white)';
    eScore.style.color = 'var(--off-white)';
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
        roundAlert.innerText = 'It\s a tie';
        playerScoreBoard.style.border = '4px solid var(--off-white)';
        enemyScoreBoard.style.border = '4px solid var(--off-white)';
    } else if (playerSelection === 'fire' && enemySelection === 'earth') {
        roundAlert.innerText = 'Fire incinerates earth! \nYou win this round.';
        playerScore++;
        pScore.innerText = `Player: ${playerScore}`;
        playerScoreBoard.style.border = '4px solid var(--green)';
        enemyScoreBoard.style.border = '4px solid var(--red)';
    } else if (playerSelection === 'fire' && enemySelection === 'water') {
        roundAlert.innerText = 'Water extinguishes fire! \nYou lose this round.';
        enemyScore++;
        eScore.innerText = `${enemyScore} :Enemy`;
        playerScoreBoard.style.border = '4px solid var(--red)';
        enemyScoreBoard.style.border = '4px solid var(--green)';
    } else if (playerSelection === 'water' && enemySelection === 'fire') {
        roundAlert.innerText = 'Water extinguishes fire! \nYou win this round.';
        playerScore++;
        pScore.innerText = `Player: ${playerScore}`;
        playerScoreBoard.style.border = '4px solid var(--green)';
        enemyScoreBoard.style.border = '4px solid var(--red)';
    } else if (playerSelection === 'water' && enemySelection === 'earth') {
        roundAlert.innerText = 'Earth overpowers water! \nYou lose this round.';
        enemyScore++;
        eScore.innerText = `${enemyScore} :Enemy`;
        playerScoreBoard.style.border = '4px solid var(--red)';
        enemyScoreBoard.style.border = '4px solid var(--green)';
    } else if (playerSelection === 'earth' && enemySelection === 'water') {
        roundAlert.innerText = 'Earth overpowers water! \nYou win this round.';
        playerScore++;
        pScore.innerText = `Player: ${playerScore}`;
        playerScoreBoard.style.border = '4px solid var(--green)';
        enemyScoreBoard.style.border = '4px solid var(--red)';
    } else if (playerSelection === 'earth' && enemySelection === 'fire') {
        roundAlert.innerText = 'Fire incinerates earth! \nYou lose this round.';
        enemyScore++;
        eScore.innerText = `${enemyScore} :Enemy`;
        playerScoreBoard.style.border = '4px solid var(--red)';
        enemyScoreBoard.style.border = '4px solid var(--green)';
    };

    checkScore();
};

function playRoundHandler(event) {
    targetElement = event.target.closest('.element')
    playRound(targetElement.id);
    clickAudio.play();
}

startGame();













