let playerScore = 0,
    computerScore = 0;

const startBtn = document.querySelector('#start-btn');
const restartBtn = document.querySelector('#restart-btn');

let displayMessages = document.querySelector('#display-messages');
displayMessages.textContent= 'Rock, Paper, or Scissors?';

let scoreDisplay = document.querySelector('#score');
scoreDisplay.textContent = `Current score: ${playerScore}-${computerScore}`;

const video = document.querySelector('video');
video.src = "images/default.webm";

const playerChoices = document.querySelectorAll('.playerChoice');
const computerChoices = document.querySelectorAll('.compChoice');

restartBtn.style.visibility = 'hidden';
displayMessages.style.visibility = 'hidden';
scoreDisplay.style.visibility = 'hidden';
video.style.visibility = 'hidden';
playerChoices.forEach(playerChoice => {
    playerChoice.style.visibility = 'hidden';
});
computerChoices.forEach(computerChoice => {
    computerChoice.style.visibility = 'hidden';
});
document.getElementById("playerChoices").style.visibility = 'hidden';
document.getElementById("compChoices").style.visibility = 'hidden';
document.getElementById("player-title").style.visibility = 'hidden';
document.getElementById("comp-title").style.visibility = 'hidden';

startBtn.addEventListener('click', showUI);

playerChoices.forEach(playerChoice => {
    playerChoice.addEventListener('click', clickedEffect, { once: true });
    playerChoice.addEventListener('click', getId, { once: true });
});

function showUI(){
    startBtn.style.visibility = 'hidden';
    displayMessages.style.visibility = 'visible';
    scoreDisplay.style.visibility = 'visible';
    video.style.visibility = 'visible';
    playerChoices.forEach(playerChoice => {
        playerChoice.style.visibility = 'visible';
    });
    computerChoices.forEach(computerChoice => {
        computerChoice.style.visibility = 'visible';
    });
    document.getElementById("playerChoices").style.visibility = 'visible';
    document.getElementById("compChoices").style.visibility = 'visible';
    document.getElementById("player-title").style.visibility = 'visible';
    document.getElementById("comp-title").style.visibility = 'visible';
}

function clickedEffect(e) {
    video.poster="images/poster.png"
    this.classList.add('afterChoose');
}

function getId(e) {
    selection(this.id);
}

function computerPlay(){
    let compChoice = computerChoices[Math.floor(Math.random()*3)];
    compChoice.classList.add('afterChoose');
    return compChoice.id;
}

function selection(selected) {
    const playerSelection = selected;
    const computerSelection = computerPlay();
    removeHover();
    gameEvaluator(playerSelection, computerSelection);
}

function gameEvaluator(playerSelection, computerSelection) {
    const winner = determineWinner(playerSelection, computerSelection);
    changeResultVid(playerSelection, computerSelection);
    const duration = getDuration(playerSelection, computerSelection);
    setTimeout(returnDefaultVid, duration);
    displayMessage(winner, playerSelection, computerSelection);
    addScore(winner);
    setTimeout(removeEffects, duration);
    setTimeout(displayScore, duration);
    setTimeout(returnDefaultMessage, duration);
    checkScore(duration);
}

function checkScore(duration) {
    if ((playerScore == 5) || (computerScore == 5)) {
        setTimeout(displayFinal, duration);
        setTimeout(hideElements, duration);
    }
    else {
        setTimeout(returnClick, duration);
    }
}

function removeHover(){
    playerChoices.forEach(playerChoice => {
        playerChoice.classList.add('noHover');
    });
}

function returnClick() {
    playerChoices.forEach(playerChoice => {
        playerChoice.addEventListener('click', clickedEffect, { once: true });
        playerChoice.addEventListener('click', getId, { once: true });
        playerChoice.classList.remove('noHover');
    });
}

function returnDefaultMessage(){
    displayMessages.textContent= 'Rock, Paper, or Scissors?';
}

function hideElements() {
    playerChoices.forEach(playerChoice => {
        playerChoice.style.visibility = 'hidden';
    });
    computerChoices.forEach(computerChoice => {
        computerChoice.style.visibility = 'hidden';
    });
    restartBtn.style.visibility = 'visible';
    document.getElementById("playerChoices").style.visibility = 'hidden';
    document.getElementById("compChoices").style.visibility = 'hidden';
    document.getElementById("player-title").style.visibility = 'hidden';
    document.getElementById("comp-title").style.visibility = 'hidden';
}

function displayFinal(){
    if (playerScore > computerScore){
        displayMessages.textContent= 'Congratulations! You won the game!';
        video.src = "images/celebration.webm"
        video.classList.add('endVids');
    }
    else{ 
        displayMessages.textContent= 'You lost. Better luck next time!';
        video.src = "images/sad.webm"
        video.classList.add('endVids');
    }
    scoreDisplay.textContent = `Final score: ${playerScore}-${computerScore}`;
    restartBtn.addEventListener('click', restartGame);
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    video.classList.remove('endVids');
    showUI();
    returnDefaultMessage();
    returnDefaultVid();
    displayScore();
    restartBtn.style.visibility = 'hidden';
    playerChoices.forEach(playerChoice => {
        playerChoice.addEventListener('click', clickedEffect);
        playerChoice.addEventListener('click', getId);
        playerChoice.classList.remove('noHover');
    });
}

function removeEffects(){
    const choosen = document.querySelectorAll('.afterChoose');
    choosen.forEach(choice => {
        choice.classList.remove('afterChoose');
    });
}

function displayScore() {
    scoreDisplay.textContent = `Current score: ${playerScore}-${computerScore}`;
}

function addScore(winner) {
    if (winner == 'player') {
        ++playerScore;
    }
    else if (winner == 'computer') {
        ++computerScore;
    }
    else return;
}

function displayMessage(winner, playerSelection, computerSelection) {
    const playerChoice = playerSelection.slice(6, playerSelection.length); 
    const compChoice = computerSelection.slice(4, computerSelection.length); 
    if (winner == 'player') {
        displayMessages.textContent = `You win! ${playerChoice} beats ${compChoice}.`;
    }
    else if (winner == 'computer') {
        displayMessages.textContent = `You lose. ${compChoice} beats ${playerChoice}.`;
    }
    else {
        displayMessages.textContent = "It's a tie!";
    }
}

function getDuration(playerSelection, computerSelection) {
    if ((playerSelection === 'playerRock' && computerSelection === 'compRock') || //Rock vs Rock
        (playerSelection === 'playerPaper' && computerSelection === 'compPaper')) { //Paper vs Paper
        return 1273;
    }  
    else if  (playerSelection === 'playerScissor' && computerSelection === 'compScissor') { //Scissors vs Scissors
        return 1274;
    }
    else if (playerSelection === 'playerRock' && computerSelection === 'compPaper') { //Rock vs Paper
        return 2304;
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compRock') { //Paper vs Rock
        return 2323;
    }
    else if (playerSelection === 'playerRock' && computerSelection === 'compScissor') { //Rock vs Scissors
        return 2470;
    }
    else if (playerSelection === 'playerScissor' && computerSelection === 'compRock') { //Scissors vs Rock
        return 2404;
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compScissor') { //Paper vs Scissors
        return 2680;
    }
    else if (playerSelection === 'playerScissor' && computerSelection === 'compPaper') { //Scissors vs Paper
        return 2748;
    }
}

function returnDefaultVid() {
    video.src = "images/default.webm";
}

function changeResultVid(playerSelection, computerSelection) {
    if (playerSelection === 'playerRock' && computerSelection === 'compRock') { //Rock vs Rock
        video.src = "images/rock-tie.webm";
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compPaper') { //Paper vs Paper
        video.src = "images/paper-tie.webm";
    }    
    else if (playerSelection === 'playerScissor' && computerSelection === 'compScissor') { //Scissors vs Scissors
        video.src = "images/scissor-tie.webm";
    }
    else if (playerSelection === 'playerRock' && computerSelection === 'compPaper') { //Rock vs Paper
        video.src = "images/rock vs paper.webm";
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compRock') { //Paper vs Rock
        video.src = "images/paper vs rock.webm";
    }
    else if (playerSelection === 'playerRock' && computerSelection === 'compScissor') { //Rock vs Scissors
        video.src = "images/rock vs scissor.webm";
    }
    else if (playerSelection === 'playerScissor' && computerSelection === 'compRock') { //Scissors vs Rock
        video.src = "images/scissor vs rock.webm";
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compScissor') { //Paper vs Scissors
        video.src = "images/paper vs scissor.webm";
    }
    else if (playerSelection === 'playerScissor' && computerSelection === 'compPaper') { //Scissors vs Paper
        video.src = "images/scissor vs paper.webm";
    }
}

function determineWinner(playerSelection, computerSelection) {
    if ((playerSelection === 'playerRock' && computerSelection === 'compRock') || //Rock vs Rock || Paper vs Paper || Scissors vs Scissors
        (playerSelection === 'playerPaper' && computerSelection === 'compPaper') ||
        (playerSelection === 'playerScissor' && computerSelection === 'compScissor')
    ) { 
        return;
    }
    else if (playerSelection === 'playerRock' && computerSelection === 'compPaper') { //Rock vs Paper
        return 'computer';
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compRock') { //Paper vs Rock
        return 'player';
    }
    else if (playerSelection === 'playerRock' && computerSelection === 'compScissor') { //Rock vs Scissors
        return 'player';
    }
    else if (playerSelection === 'playerScissor' && computerSelection === 'compRock') { //Scissors vs Rock
        return 'computer';
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compScissor') { //Paper vs Scissors
        return 'computer';
    }
    else if (playerSelection === 'playerScissor' && computerSelection === 'compPaper') { //Scissors vs Paper
        return 'player';
    }
}
console.log('Welcome to rock, paper, scissors game');