console.log("Rock Paper Scissors Game");
playGame();

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

function playRound(humanChoice , computerChoice) {
    console.log("You: " + humanChoice + " Computer: " + computerChoice);

    if (humanChoice == "Rock") {
        if(computerChoice == "Scissors"){
            console.log("You win! Rock beats Scissors");
            return 1;
        }else if(computerChoice == "Paper") {
            console.log("You lose! Rock loses to Paper");
            return 0;
        }else {
            console.log("It's a Tie");
            return;
        }

    } else if (humanChoice == "Paper") {
        if(computerChoice == "Scissors"){
            console.log("You lose! Paper loses to Scissors");
            return 0;
        }else if(computerChoice == "Rock") {
            console.log("You win! Paper beats Rock");
            return 1;
        }else {
            console.log("It's a Tie");
            return;
        }
    }else {
        if(computerChoice == "Paper"){
            console.log("You win! Scissors beats Paper");
            return 1;
        }else if(computerChoice == "Rock") {
            console.log("You lose! Scissors loses to Rock");
            return 0;
        }else {
            console.log("It's a Tie");
            return;
        }
    }
}

function playGame() {
    let humanScore=0;
    let computerScore=0;

    for (let i=0;i<5;i++){
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
    }else if (humanScore>computerScore ) {
        console.log("You lost, try again");
    }else {
        console.log("No Winner! It's a Tie");
    }

}