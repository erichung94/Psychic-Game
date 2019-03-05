//Array of possible characters
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var randomChar = char[Math.floor(Math.random()* char.length)];

//Reset Function
function reset() {
	randomChar = char[Math.floor(Math.random()* char.length)];
	guessesLeft = 9;
	lettersGuessed.length=0;
}

//Game
document.onkeyup = function(event) {
    var playerGuess = event.key;

//Checks to see if the player guess is a letter, and is not a letter previously guessed
if (char.indexOf(playerGuess) >= 0 && lettersGuessed.indexOf(playerGuess) < 0) 
{
    if ((playerGuess === randomChar) && (guessesLeft >= 1)) {
        wins++;
        alert("You win!");
	    reset();
    }
    else if ((playerGuess !== randomChar) && (guessesLeft >= 1)) {
        guessesLeft--;
        if (guessesLeft > 0){
            lettersGuessed.push(playerGuess);
        }
        else if (guessesLeft == 0){
            losses++;
            alert("You lose ):");
            reset();
        }
    }	
    else {
        losses++;
        alert("You lose ):");
	    reset();
    }
}
//Shows answer in console.log
console.log(randomChar);
//Making the html adaptable to results
var html = 
           "<h1>The Psychic Game</h1>" +
           "<p>Guess what letter I'm thinking of!</p>" +
           "<p>Wins: " + wins + "</p>" +
           "<p>Losses: " + losses + "</p>" +
           "<p>Guesses left: " + guessesLeft + "</p>" +
           "<p>Your guesses so far: " + lettersGuessed + " </p>";
           document.querySelector("#game").innerHTML = html;
}
