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
    console.log(`Computer chooses ${computerChoice}`)
    return computerChoice
}


// Get human input choice
function getHumanChoice() {
    // let keepAsking = true;
    let humanChoice = prompt("Choose rock, paper, scissors").toLowerCase()
        if (humanChoice === 'rock' || humanChoice === 'scissors' || humanChoice === 'paper') {
            console.log("Human chooses", humanChoice)
            return humanChoice
        } else {
            console.log('Not a valid choice')
        }
}

// Declare player scores

function outputScores() {
    console.log(`Computer has score ${computerScore}`)
    console.log(`Human has score ${humanScore}`)
    return
}

// Compare player choices
function playRound(computerChoice, humanChoice) {
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log('You lose. Rock beats scissors.')
        computerScore++
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        console.log('You win. Paper beats rock.')
        humanScore++
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log('You lose. Scissors beats paper.')
        computerScore++
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        console.log('You win. Rock beats scissors.')
        humanScore++
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log('You lose. Paper beats rock.')
        computerScore++
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        console.log('You win. Scissors beats paper.')
        humanScore++
    } else {
        console.log('Round tied. No score change.')}
}

// // Output round winner
// const humanSelection = getHumanChoice()
// const computerSelection = getComputerChoice()

// playRound(computerSelection, humanSelection)
// outputScores()

function playGame(noOfRounds=5) {
    for (let i = 0; i < noOfRounds; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(computerSelection, humanSelection)
        console.log(`Round ${i+1}:`)
        console.log(`Human score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log(`You won ${humanScore}:${computerScore}! Congratulations!`)
    } else if (humanScore < computerScore) {
        console.log(`You lost ${humanScore}:${computerScore}! Better luck next time!`)
    } else {
        console.log(`You tied ${humanScore}:${computerScore}!`)
    }
}

playGame()
// Increment number of rounds
// Declare winner after number of rounds completed