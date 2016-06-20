// User makes a choice
var userChoice = prompt("Do you choose rock, paper or scissors?");

// Computer makes a random choice
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
}
else if (computerChoice < 0.67) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}

// Render the game on the page
document.write("User: ", userChoice);
document.write("<br>");
document.write("Computer: ", computerChoice);
document.write("<br><br>");

// Call the game function
game(userChoice, computerChoice);

// Develop the game
function game(choice1, choice2) {
    if (choice1 === choice2) {
        document.write("The result is a draw!");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.write("Rock wins!");
        }
        else {
            document.write("Paper wins!");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.write("Paper wins!");
        }
        else {
            document.write("Scissors wins!");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            document.write("Scissors wins!");
        }
        else {
            document.write("Rock wins!");
        }
    }
}
