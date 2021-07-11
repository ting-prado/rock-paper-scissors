console.log('Welcome to rock, paper, scissors game');

function computerPlay(){
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random()*3)];
}

function playerPlay() {
    let playerChoice = prompt('Rock, paper or scissors? ');
    return playerChoice.toLowerCase();
}

function singleRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'Rock') || 
        (playerSelection === 'paper' && computerSelection === 'Paper') ||
        (playerSelection === 'scissors' && computerSelection === 'Scissors')
    ) {
        return "It's a tie!";
    }
    else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return "You Lose! Paper beats Rock.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return "You Win! Paper beats Rock.";
    }
    else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return "You Win! Rock beats Scissors.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return "You Lose! Rock beats Scissors.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return "You Win! Scissors beats Paper.";
    }
    else return "Invalid input.";
}

function game(){
    let computerScore = 0,
        playerScore = 0,
        round = 5;
}