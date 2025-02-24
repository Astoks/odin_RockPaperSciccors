console.log("ROCK PAPER SCISSORS GAME");
console.log("To play the game write 'playGame(N);' N=How many rounds");


function getComputerChoice() {
    let num = Math.random();
    if (num < 0.3) return "Rock";
    if (num < 0.6) return "Paper";
    return "Scissors";
}

function getHumanChoice() {
    while (true) {
    let answer = prompt("r=Rock  p=Paper  s=Scissors").toLowerCase();
    if (answer=="r") return "Rock";
    if (answer=="p") return "Paper";
    if (answer=="s") return "Scissors";
    console.log("Invalid Input");
    }
}

function playRound(humanChoice , computerChoice=getComputerChoice()) {
    //console.log("~NEXT ROUND~");
    console.log("You: " + humanChoice);
    let text = document.querySelector(".playerChoice");
    text.textContent = humanChoice;
    console.log("Computer: " + computerChoice);
    text = document.querySelector(".computerChoice");
    text.textContent = computerChoice;

    if (humanChoice == "Rock") {
        if(computerChoice == "Scissors"){
            console.log("You win! Rock beats Scissors");
            win();
            return 1;
        }else if(computerChoice == "Paper") {
            console.log("You lose! Rock loses to Paper");
            lose();
            return 0;
        }else {
            console.log("It's a Tie");
            tie();
            return;
        }

    } else if (humanChoice == "Paper") {
        if(computerChoice == "Scissors"){
            console.log("You lose! Paper loses to Scissors");
            lose();
            return 0;
        }else if(computerChoice == "Rock") {
            console.log("You win! Paper beats Rock");
            win();
            return 1;
        }else {
            console.log("It's a Tie");
            tie();
            return;
        }
    }else {
        if(computerChoice == "Paper"){
            console.log("You win! Scissors beats Paper");
            win();
            return 1;
        }else if(computerChoice == "Rock") {
            console.log("You lose! Scissors loses to Rock");
            lose();
            return 0;
        }else {
            console.log("It's a Tie");
            tie();
            return;
        }
    }

    function win(){
        text = document.querySelector(".result");
        text.textContent = "You won!"
        let score = document.querySelector(".playerScore");
        score.textContent = parseInt(score.textContent) +1;
        if (parseInt(score.textContent) == 5) {
            alert("Congrats! You Won!");
            score.textContent = 0;
            score = document.querySelector(".computerScore");
            score.textContent = 0;
        }

    }

    function lose(){
        text = document.querySelector(".result");
        text.textContent = "You lost!"
        let score = document.querySelector(".computerScore");
        score.textContent = parseInt(score.textContent) +1;

        if (parseInt(score.textContent) == 5) {
            alert("You Lost! Try Again");
            score.textContent = 0;
            score = document.querySelector(".playerScore");
            score.textContent = 0;
        }
    }
    function tie(){
        text = document.querySelector(".result");
        text.textContent = "It's a Tie"
    }




}

function playGame(rounds=5) {
    let humanScore=0;
    let computerScore=0;

    for (let i=0;i<rounds;i++){
        let temp = playRound(getHumanChoice(),getComputerChoice());
        if( temp == 1) {
            humanScore++;
        }else if (temp == 0) {
            computerScore++;
        }
    }

    console.log("Your Points: " + humanScore);
    console.log("Computer's Points: " + computerScore);
    
    if(humanScore>computerScore) {
        console.log("Congrats! You won!");
    }else if (humanScore<computerScore ) {
        console.log("You lost, try again");
    }else {
        console.log("No Winner! It's a Tie");
    }

}

const buttonR = document.querySelector(".rock");
const buttonP = document.querySelector(".paper");
const buttonS = document.querySelector(".scissors");

buttonR.addEventListener("click", () => {
    playRound("Rock");
});
buttonP.addEventListener("click", () => { 
    playRound("Paper")
});
buttonS.addEventListener("click", () => { 
    playRound("Scissors")
});

/*const resultsDiv = document.createElement("div");
resultsDiv.textContent = "Results:"; 

document.querySelector("body").appendChild(resultsDiv);*/