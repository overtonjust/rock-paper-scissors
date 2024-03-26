const rockPaperScissors = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * 3)];
}

function playRound() {
    // your code here!
    
    const playerSelection = prompt('Rock paper or scissors?');
    const computerSelection = getComputerChoice();

    const win = `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}.`;
    const lose = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
    const tie = `Its a tie! ${playerSelection.toLowerCase()} is equal to ${computerSelection}`;

    if(playerSelection.toLowerCase() === computerSelection) {
        console.log(tie)
        return 'tie';
    }
    if(playerSelection.toLowerCase() === 'rock') {
        if(computerSelection === 'paper') {
            console.log(lose)
            return 'lose';
        }
        if(computerSelection === 'scissors') {
            console.log(win)
            return 'win';
        }
    }
    if(playerSelection.toLowerCase() === 'paper') {
        if(computerSelection === 'scissors') {
            console.log(lose)
            return 'lose';
        }
        if(computerSelection === 'rock') {
            console.log(win)
            return 'win';
        }
    }
    if(playerSelection.toLowerCase() === 'scissors') {
        if(computerSelection === 'rock') {
            console.log(lose)
            return 'lose';
        }
        if(computerSelection === 'paper') {
            console.log(win)
            return 'win';
        }
    }
}

function playGame() {
    let player = 0;
    let computer = 0;
    let games = 1;
    
    while(games <= 5){
        const result = playRound();

        if(result == 'win') {
                player++;
                console.log(`Game ${games} scores \n player: ${player} computer: ${computer}`);
        }
        else if(result == 'lose') {
            computer++;       
            console.log(`Game ${games} scores \n player: ${player} computer: ${computer}`);
        }

        else if(result == 'tie') {
            console.log(`Game ${games} scores \n player: ${player} computer: ${computer}`);
        }
        games++;
    }

    console.log(`Game over! final scores \n player: ${player} computer: ${computer}`);

}

// playGame()