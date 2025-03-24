var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hit = 0;
var guesses = 0;

var isSunk = false;

// Main Logic

while (isSunk == false)  {
    guess = prompt("Ready!, Aim, Fire! (Enter number 0-6)");   
    if (guess < 0 || guess > 6){
    alert("Please enter a valid cell number!")
    }
    else{
        guesses = guesses+1;
        if (guess == locationi ||guess == location2 || guess == location3) {
            hit = hit+ 1;
            if(hit==3){
                isSunk = true;
                alert("You sank my battleship")
            }
        }
    }
}


var stats = "You sank my battleship at" + "guesses";
alert(stats);