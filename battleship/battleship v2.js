
var randomLoc = Math.floor(Math.random() * 5)
//Durlaring cansable
var location1 = randomLoc + 1;
var location2 = location1 + 1;
var location3 = location2 + 1;

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
    
        if(guess == null) {
            alert("Thank you for playing");
            break;
        }
    else {
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

var accuracy = (guesses > 0 ?(hits/guesses) * 100:0).toFixed(2);
var stats = "You took" + guesses + "guesses to sank my battleship!" + "\n" +
"accuracy: " + accuracy + "%";

alert(stats);
