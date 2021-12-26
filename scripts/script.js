function computerPlay() {
    // Generate a random number from 1-3
    randNum = Math.floor(Math.random() * 3 + 1);

    // Return "Rock", "Paper", "Scissors" depending on randNum
    switch (randNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // rock vs. paper => you lose
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } 

    // rock vs. scissors => you win
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    // paper vs. rock => you win
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    // paper vs. scissors => you lose
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    // scissors vs. rock => you lose
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    // scissors vs. paper => you win
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beat Paper";
    }
    else if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
    }
    else {
        return "You did not provide a correct input!";
    }
}

function game() {
    rounds = 5;
    winTally = 0;
    loseTally = 0;
    for (i = 0; i < rounds; i++) {
        playerSelection = prompt("Rock, paper, or scissors? ");
        computerSelection = computerPlay();

        gameResult = playRound(playerSelection, computerSelection);
        console.log(gameResult);

        if (gameResult.startsWith("You Win")) {
            winTally++;
        } else if (gameResult.startsWith("You Lose")) {
            loseTally++;
        }
    }

    if (winTally > loseTally) {
        console.log(`You win the game! ${winTally} - ${loseTally}`);
    } else if (winTally === loseTally) {
        console.log(`You tied! ${winTally} - ${loseTally}`);
    } else {
        console.log(`You lost the game! ${winTally} - ${loseTally}`);
    }
}