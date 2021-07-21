let playerScore = 0,
    computerScore = 0;


let displayMessages = document.querySelector('#display-messages');
displayMessages.textContent= 'Welcome! Rock, paper, or scissors?';

let scoreDisplay = document.querySelector('#score');
scoreDisplay.textContent = `Current score: ${playerScore}-${computerScore}`;

let resultGif = document.querySelector('#result-gif');
resultGif.setAttribute('src', 'images/default.gif');

const playerChoices = document.querySelectorAll('.playerChoice');
const computerChoices = document.querySelectorAll('.compChoice');
playerChoices.forEach(playerChoice => {
    playerChoice.addEventListener('click', clickedEffect);
    playerChoice.addEventListener('click', getId);
});

function clickedEffect(e) {
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
    resultEvaluator(playerSelection, computerSelection);
}

function resultEvaluator(playerSelection, computerSelection) {
    const winner = determineWinner(playerSelection, computerSelection);
    changeResultGif(playerSelection, computerSelection);
    const duration = getDuration(playerSelection, computerSelection);
    setTimeout(returnDefaultGif, duration);
    displayMessage(winner, playerSelection, computerSelection);
    addScore(winner);
    setTimeout(removeEffects, duration);
    setTimeout(displayScore, duration);
    checkScore(duration);
}

function checkScore(duration) {
    if (playerScore + computerScore == 5) {
        playerChoices.forEach(playerChoice => {
            playerChoice.removeEventListener('click', clickedEffect);
            playerChoice.removeEventListener('click', getId);
            playerChoice.classList.add('noHover');
        });
    setTimeout(displayFinal, duration);
    }
}

function displayFinal(){
    if (playerScore > computerScore){
        displayMessages.textContent= 'Congratulations! You won the game!';
        resultGif.setAttribute('src', 'images/celebrate.gif');
    }
    else{ 
        displayMessages.textContent= 'You lost. Better luck next time!';
        resultGif.setAttribute('src', 'images/sad.gif');
    }
    scoreDisplay.textContent = `Final score: ${playerScore}-${computerScore}`;
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

function returnDefaultGif() {
    resultGif.setAttribute('src', 'images/default.gif');
}

function changeResultGif(playerSelection, computerSelection) {
    if (playerSelection === 'playerRock' && computerSelection === 'compRock') { //Rock vs Rock
        resultGif.setAttribute('src', 'images/rock-tie.gif');
    }
    else if  (playerSelection === 'playerPaper' && computerSelection === 'compPaper') { //Paper vs Paper
        resultGif.setAttribute('src', 'images/paper-tie.gif');
    }    
    else if   (playerSelection === 'playerScissor' && computerSelection === 'compScissor') { //Scissors vs Scissors
        resultGif.setAttribute('src', 'images/scissors-tie.gif');
    }
    else if (playerSelection === 'playerRock' && computerSelection === 'compPaper') { //Rock vs Paper
        resultGif.setAttribute('src', 'images/rock vs paper.gif');
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compRock') { //Paper vs Rock
        resultGif.setAttribute('src', 'images/paper vs rock.gif');
    }
    else if (playerSelection === 'playerRock' && computerSelection === 'compScissor') { //Rock vs Scissors
        resultGif.setAttribute('src', 'images/rock vs scissor.gif');
    }
    else if (playerSelection === 'playerScissor' && computerSelection === 'compRock') { //Scissors vs Rock
        resultGif.setAttribute('src', 'images/scissor vs rock.gif');
    }
    else if (playerSelection === 'playerPaper' && computerSelection === 'compScissor') { //Paper vs Scissors
        resultGif.setAttribute('src', 'images/paper vs scissor.gif');
    }
    else if (playerSelection === 'playerScissor' && computerSelection === 'compPaper') { //Scissors vs Paper
        resultGif.setAttribute('src', 'images/scissor vs paper.gif');
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

// function playerPlay() { //Asks the user which choice will he/she picks
//     let playerChoice = prompt('Rock, paper, or scissors? ');
//     return playerChoice.toLowerCase();
// }

// function singleRound(playerSelection, computerSelection) { //Print result in each round
//     if ((playerSelection === 'rock' && computerSelection === 'Rock') || //Rock vs Rock || Paper vs Paper || Scissors vs Scissors
//         (playerSelection === 'paper' && computerSelection === 'Paper') ||
//         (playerSelection === 'scissors' && computerSelection === 'Scissors')
//     ) { 
//         return `Computer selected ${computerSelection.toLowerCase()}.\nIt's a tie!`;
//     }
//     else if (playerSelection === 'rock' && computerSelection === 'Paper') { //Rock vs Paper
//         return "Computer selected paper.\nYou Lose! Paper beats Rock.";
//     }
//     else if (playerSelection === 'paper' && computerSelection === 'Rock') { //Paper vs Rock
//         return "Computer selected rock.\nYou Win! Paper beats Rock.";
//     }
//     else if (playerSelection === 'rock' && computerSelection === 'Scissors') { //Rock vs Scissors
//         return "Computer selected scissors.\nYou Win! Rock beats Scissors.";
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'Rock') { //Scissors vs Rock
//         return "Computer selected rock.\nYou Lose! Rock beats Scissors.";
//     }
//     else if (playerSelection === 'paper' && computerSelection === 'Scissors') { //Paper vs Scissors
//         return "Computer selected scissors.\nYou Lose! Scissors beats Paper.";
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'Paper') { //Scissors vs Paper
//         return "Computer selected paper.\nYou Win! Scissors beats Paper.";
//     }
//     else return "Invalid input."; //Typo errors/Not one of the choices
// }

// function game(){
//     let round = 5,
//         playerScore = 0,
//         computerScore = 0;

//     for (let i=1; i<=round; i++){
//         const playerSelection = playerPlay(); //Asks for player choice
//         const computerSelection = computerPlay(); //Asks for computer choice
//         console.log('Round: '+ i); //Displays each round
//         console.log(singleRound(playerSelection, computerSelection)); //Play each round

//     if ((playerSelection === 'rock' && computerSelection === 'Rock') || //If it's a tie, no points added. Round added by 1
//         (playerSelection === 'paper' && computerSelection === 'Paper') ||
//         (playerSelection === 'scissors' && computerSelection === 'Scissors')
//     ) {
//         ++round;
//         console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`); //Displays current score
//     }
//     else if (playerSelection === 'rock' && computerSelection === 'Paper') { //Rock vs Paper, computer wins. Computer points + 1
//         ++computerScore;
//         console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
//     }
//     else if (playerSelection === 'paper' && computerSelection === 'Rock') { //Paper vs Rock, player wins. Player points + 1
//         ++playerScore;
//         console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
//     }
//     else if (playerSelection === 'rock' && computerSelection === 'Scissors') { //Rock vs Scissors, player wins. Player points + 1
//         ++playerScore;
//         console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'Rock') { //Scissors vs Rock, computer wins. Computer points + 1
//         ++computerScore;
//         console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
//     }
//     else if (playerSelection === 'paper' && computerSelection === 'Scissors') { //Paper vs Scissors, computer wins. Computer points + 1
//         ++computerScore;
//         console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'Paper') { //Scissors vs Paper, player wins. Player points + 1
//         ++playerScore;
//         console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
//     }
//     else ++round //If there was a typo, no points added. Round added by 1
// }

// if (playerScore > computerScore){ //Displays congratulatory message if player won
//     console.log(`Congratulations! You won!\nFinal score: ${playerScore} - ${computerScore}`);
// }
// else if (playerScore < computerScore) { //Displays consolatory message if player lost
//     console.log(`You lost. Better luck next time!\nFinal score: ${playerScore} - ${computerScore}`);
// }