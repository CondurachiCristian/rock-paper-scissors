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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame () {
    let humanScore = 0 ;
    let computerScore = 0 ; 
    function playRound (humanChoice , computerChoice) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        if (humanChoice === computerChoice) {
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("TIE!");
            return
        } else if (humanChoice === computerChoice) {
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("TIE!");
            return
        } else if (humanChoice === computerChoice) {
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("TIE!");
            return
        } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            humanScore = ++humanScore;
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("Human Wins!");
            return
        } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            humanScore = ++humanScore;
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("Human Wins!");
            return
        } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            humanScore = ++humanScore;
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("Human Wins!");
            return
        } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS") {
            computerScore = ++computerScore;
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("Computer Wins!");
            return
        } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER") {
            computerScore = ++computerScore;
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("Computer Wins!");
            return
        } else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
            computerScore = ++computerScore;
            console.log(humanChoice,computerChoice);
            console.log(humanScore,computerScore);
            console.log("Computer Wins!");
            return
        }
    };
    while (humanScore < 5 && computerScore < 5) {
        playRound(humanSelection, computerSelection);
    };
}

playGame();
