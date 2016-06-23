var userChoice;
var computerChoice;

choice();

function choice() {
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

    // Call the game function
    game(userChoice, computerChoice);
}

// Develop the game
function game(choice1, choice2) {
    // Prevent wrong choices
    if (choice1 !== "rock" && choice1 !== "paper" && choice1 !== "scissors") {
        document.write("<b>Ops! You made a mistake! Please restart the game by refreshing the page.</b>");
    }
    else if (choice1 === "rock" || choice1 === "paper" || choice1 === "scissors") {
        document.write("User: ", choice1);
        document.write("<br>");
        document.write("Computer: ", choice2);
        document.write("<br><br>");

        if (choice1 === choice2) {
            confirm("The result is a draw. Try again");
            choice();
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
}
