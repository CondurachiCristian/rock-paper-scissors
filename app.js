/*  
    CALCULATE computer choice
    PROMPT user for "rock" , "paper" or "scissors"
    IF user choice beats computer choice THEN INCREMENT user score by 1
    ELSE INCREMENT computer score by 1 
    REPEAT sequence UNTIL score of 5 is reached by either user or computer
*/

function getComputerChoice() {
    coSelection = Math.floor(Math.random() * 3);

    if (coSelection == 0) {
        coSelection = "ROCK";
    } else if (coSelection == 1) {
        coSelection = "PAPER";
    } else {
        coSelection = "SCISSORS";
    }
    return coSelection
};

function getHumanChoice() {
   huSelection = prompt("Rock , Paper or Scissors?").toUpperCase();
   return huSelection
};


let humanScore = 0 ;

let computerScore = 0 ;

function playRound (humanChoice , computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(humanChoice,computerChoice);
        console.log("TIE!");
        return
    } else if (humanChoice === computerChoice) {
        console.log(humanChoice,computerChoice);
        console.log("TIE!");
        return
    } else if (humanChoice === computerChoice) {
        console.log(humanChoice,computerChoice);
        console.log("TIE!");
        return
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        ++humanScore
        console.log(humanChoice,computerChoice);
        console.log("Human Wins!");
        return
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        ++humanScore
        console.log(humanChoice,computerChoice);
        console.log("Human Wins!");
        return
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        ++humanScore
        console.log(humanChoice,computerChoice);
        console.log("Human Wins!");
        return
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS") {
        ++computerScore
        console.log(humanChoice,computerChoice);
        console.log("Computer Wins!");
        return
    } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER") {
        ++computerScore
        console.log(humanChoice,computerChoice);
        console.log("Computer Wins!");
        return
    } else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
        ++computerScore
        console.log(humanChoice,computerChoice);
        console.log("Computer Wins!");
        return
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);
