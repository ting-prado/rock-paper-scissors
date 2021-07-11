console.log('Welcome to rock, paper, scissors game');

function computerPlay(){
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random()*3)];
}

function playerPlay() {
    let playerChoice = prompt('Rock, paper or scissors? ');
    return playerChoice.toLowerCase();
}

function game(){
    let computerScore = 0,
        playerScore = 0,
        round = 5;
}