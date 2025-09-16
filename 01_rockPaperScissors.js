function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    //Randomly return one of the followin string values: "rock", "paper", "scissors"
    let compChoice;
    switch (getRandomInt(3)) {
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice = "Paper";
            break;
        case 2:
            compChoice = "Scissors";
            break;
    }

    return(compChoice);
}

function getUserChoice() {
    //Randomly return one of the followin string values: "rock", "paper", "scissors"
    let userChoice;
    switch (getRandomInt(3)) {
        case 0:
            userChoice = "Rock";
            break;
        case 1:
            userChoice = "Paper";
            break;
        case 2:
            userChoice = "Scissors";
            break;
    }

    return(userChoice);
}


function evaluate(userIn,compIn) {

    let winner;

    let user = userIn;
    let comp = compIn;

    if (user == comp) {
        winner = "It's a tie!";
    } else if (user == "Rock" && comp == "Paper") {
        winner = "Computer!";
    } else if (user == "Rock" && comp == "Scissors") {
        winner = "User!"
    } else if (user == "Paper" && comp == "Rock") {
        winner = "User!"
    } else if (user == "Paper" && comp == "Scissors") {
        winner = "Computer!"
    } else if (user == "Scissors" && comp == "Rock") {
        winner = "Computer!"
    } else if (user == "Scissors" && comp == "Paper") {
        winner = "User!"
    }

    console.log("\n");
    console.log("Computer: " + compIn);
    console.log("User: " + userIn);
    console.log("The winner is " + winner);

}

evaluate(getUserChoice(),getComputerChoice());