/*  
    CALCULATE computer choice
    PROMPT user for "rock" , "paper" or "scissors"
    IF user choice beats computer choice THEN INCREMENT user score by 1
    ELSE INCREMENT computer score by 1 
    REPEAT sequence UNTIL score of 5 is reached by either user or computer
*/

const resultsDiv = document.querySelector("#resultsDiv");

const choiceDiv = document.createElement("div");
choiceDiv.classList.add("content");
resultsDiv.appendChild(choiceDiv);

const scoreDiv = document.createElement("div");
scoreDiv.classList.add("content");
resultsDiv.appendChild(scoreDiv);

const winnerDiv = document.createElement("div");
winnerDiv.classList.add("content");
resultsDiv.appendChild(winnerDiv);

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", function () {playRound("ROCK", computerSelection)});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", function () {playRound("PAPER", computerSelection)});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", function () {playRound("SCISSORS", computerSelection)});

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

let computerSelection = getComputerChoice();

let humanScore = 0 ;
let computerScore = 0 ;

function playRound (humanChoice , computerChoice) {
    computerSelection = getComputerChoice();

    function computerWinsRound () {
        computerScore = ++computerScore;
        choiceDiv.textContent = `${humanChoice} ${computerChoice}`;
        scoreDiv.textContent = `${humanScore} ${computerScore}`;
        winnerDiv.textContent = "Computer Wins Round!";
    };

    function humanWinsRound () {
        humanScore = ++humanScore;
        choiceDiv.textContent = `${humanChoice} ${computerChoice}`;
        scoreDiv.textContent = `${humanScore} ${computerScore}`;
        winnerDiv.textContent = "Human Wins Round!";
    };

    function noWinner () {
        choiceDiv.textContent = `${humanChoice} ${computerChoice}`;
        scoreDiv.textContent = `${humanScore} ${computerScore}`;
        winnerDiv.textContent = "Tie!";
    };

    function checkGameWinner () {
        if (humanScore >= 5 && humanScore > computerScore) {
            winnerDiv.textContent = "HUMAN WINS GAME!!!";
        } else if (computerScore >= 5 && computerScore > humanScore) {
            winnerDiv.textContent = "COMPUTER WINS GAME!!!";
        }
    };

    if (humanChoice === computerChoice) {
        noWinner();
        checkGameWinner();
        return
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanWinsRound();
        checkGameWinner();
        return
    } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerWinsRound();
        checkGameWinner();
        return
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanWinsRound();
        checkGameWinner();
        return
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerWinsRound();
        checkGameWinner();
        return
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanWinsRound();
        checkGameWinner();
        return
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerWinsRound();
        checkGameWinner();
        return
    }
};