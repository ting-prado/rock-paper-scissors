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
        return `Computer selected ${computerSelection.toLowerCase()}.\nIt's a tie!`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return "Computer selected paper.\nYou Lose! Paper beats Rock.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return "Computer selected rock.\nYou Win! Paper beats Rock.";
    }
    else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return "Computer selected scissors.\nYou Win! Rock beats Scissors.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return "Computer selected rock.\nYou Lose! Rock beats Scissors.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return "Computer selected scissors.\nYou Lose! Scissors beats Paper.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return "Computer selected paper.\nYou Win! Scissors beats Paper.";
    }
    else return "Invalid input.";
}

function game(){
    let round = 5,
        playerScore = 0,
        computerScore = 0, 
        won = false;

    for (let i=1; i<=round; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log('Round: '+ i);
        console.log(singleRound(playerSelection, computerSelection));

    if ((playerSelection === 'rock' && computerSelection === 'Rock') || 
        (playerSelection === 'paper' && computerSelection === 'Paper') ||
        (playerSelection === 'scissors' && computerSelection === 'Scissors')
    ) {
        ++round;
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        ++computerScore;
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        ++playerScore;
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        ++playerScore;
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        ++computerScore;
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        ++computerScore;
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        ++playerScore;
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }
}
}

game();