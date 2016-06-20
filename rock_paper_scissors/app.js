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
document.write("user: ", userChoice);
document.write("<br>");
document.write("computer: ", computerChoice);
