let playerScore = 0,
    computerScore = 0;

let displayMessages = document.querySelector('#display-messages');
displayMessages.textContent= 'Welcome!';

let displayScore = document.querySelector('#score');
displayScore.textContent = `Current score: ${playerScore}-${computerScore}`;

let resultGif = document.querySelector('#default-gif');
resultGif.setAttribute('src', 'images/default.gif');

const playerChoices = document.querySelectorAll('.playerChoice');
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
    const computerChoices = document.getElementsByClassName("compChoice");
    let compChoice = computerChoices[Math.floor(Math.random()*3)];
    compChoice.classList.add('afterChoose');
    return compChoice.id;
}

function selection(selected) {
    const playerSelection = selected;
    const computerSelection = computerPlay();
    console.log(`${playerSelection}, ${computerSelection}`);
}
// playerChoice.addEventListener('click', computerPlay);
// const computerSelection = computerPlay();
// console.log(computerSelection);

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
// }