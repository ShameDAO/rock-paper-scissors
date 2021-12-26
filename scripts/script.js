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