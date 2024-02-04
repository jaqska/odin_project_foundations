function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[(Math.floor(Math.random()*choices.length))];
    return computerChoice;
}

function playGame(userChoice) {
    console.log('------Game starts------');
    let computerChoice = getComputerChoice();
    console.log('You chose ' + userChoice + '\nThe computer chose ' + computerChoice);
    console.log('Rock....Paper...Scissors...')
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win!');
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win!');
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win!');
    }
    else if (userChoice === 'rock' && computerChoice === 'rock') {
        console.log('It\'s a draw!');
    }
    else if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose!');
    }
    else if (userChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('It\'s a draw!');
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose!');
    }
    else if (userChoice === 'paper' && computerChoice === 'paper') {
        console.log('It\'s a draw!');
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose!');
    }
    console.log('-----------------------------')
    console.log('The game ends....Well played!')
}

console.log(playGame('rock'));
console.log(playGame('rock'));
console.log(playGame('rock'));
console.log(playGame('rock'));
console.log(playGame('rock'));