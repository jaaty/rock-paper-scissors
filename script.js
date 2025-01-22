let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};


let playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    const results = document.querySelector(".results");

    if (humanChoice === computerChoice) {
        results.textContent = "It\'s a tie!";
        updateScore();
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        updateScore();
    } else {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        updateScore();
    }
}

let playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");

    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

let updateScore = () => {
    const score = document.querySelector(".score");
    score.textContent = `human score: ${humanScore}. computer score: ${computerScore}`;
    if (humanScore >= 5) {
        score.textContent = `You win the game! ${humanScore} - ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        score.textContent = `You lose the game! ${computerScore} - ${humanScore}`;
        humanScore = 0;
        computerScore = 0;
    }
}

playGame();