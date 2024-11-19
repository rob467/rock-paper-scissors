const buttons = document.querySelectorAll("button");
const selections = document.querySelector("#selections");
const results = document.querySelector("#results");

// Initialize player scores at 0
let humanScore = 0
let computerScore = 0

// Get random computer choice of rock paper scissors
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    let computerChoice
    if (randomInt === 0) {
        computerChoice = 'rock'
    } else if (randomInt === 1) {
        computerChoice = 'scissors'
    } else {
        computerChoice = 'paper'
    }
    return computerChoice
}


// Compare player choices
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = ""
    if (computerChoice === humanChoice) {
        results.textContent = `Round tied. The score remains ${humanScore} to ${computerScore}.`;
        return;}
    if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock'))
         {
        result = 'You lose'
        computerScore++
    } else
        {result = 'You win'
            humanScore++
        }
    selections.textContent = `Player chose ${humanChoice}. Computer chose ${computerChoice}.`
    results.textContent = `${result} this round. The score is ${humanScore} to ${computerScore}.`
    if (humanScore === 5 || computerScore === 5) {
        buttons.forEach(button => button.disabled = true);
        const resetButton = document.createElement("button");
        resetButton.innerText = "Play Again?";
        const finalResults = document.createElement("p");
        results.textContent = `${result} this round.`;
        if (humanScore > computerScore) {
            finalResults.textContent = `Game over, you won ${humanScore} to ${computerScore}!`
        } else {
            finalResults.textContent = `Game over, you lost ${humanScore} to ${computerScore}!`
        }
        results.appendChild(finalResults);
        results.appendChild(resetButton);
        resetButton.addEventListener("click", resetGame)
    }
}

function resetGame() {
    buttons.forEach(button => button.disabled = false);
    humanScore = 0;
    computerScore = 0;
    selections.textContent = "";
    results.textContent = "";
}

buttons.forEach(button => {button.addEventListener(
    "click", () => playRound(button.id));})

