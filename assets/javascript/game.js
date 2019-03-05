// Randomly generate a letter, store into var.
// Compare letter generated with guess (we can adjust this to lower case)
// Have a set number of guesses to start out the game, and -- for every guess.
// Display "Guesses so far" (create an array for this), and compare with future guesses so that they don't reduce number of guesses left
// Create counter for Wins and Losses.
    var chars = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wins = 0;
    var losses = 0;
    var numberOfGuesses = 9;
    var playerGuess=[];
    var computerGuess=[];
    
    //generating the random letter
    var rChar = chars[Math.floor(Math.random() * chars.length)];
    console.log(rChar);
    computerGuess.push(rChar);

    //Grabbing user input
    document.onkeyup = function(input){
    var userInput = input.key.toLowerCase();
    console.log(computerGuess[0]);
    console.log(numberOfGuesses);

    //Checking user input is a letter and is not guessed before.
    if (chars.indexOf(userInput)>=0 && playerGuess.indexOf(userInput)<0){
        if (userInput !== computerGuess[0] && numberOfGuesses > 0)
        {
        playerGuess.push(userInput);
        numberOfGuesses--;
        }
        //You lose scenario
        else if (userInput === computerGuess[0] && numberOfGuesses > 0)
        {
            alert("You Win!");
            wins++;
            numberOfGuesses = 9;
            playerGuess.length = 0;
            var rChar = chars[Math.floor(Math.random() * chars.length)];
            computerGuess.push(rChar)
            console.log(computerGuess[0]);
        }
        else
        {
            alert("You Lose!");
            losses++;
            numberOfGuesses = 9;
            playerGuess.length = 0;
            var rChar = chars[Math.floor(Math.random() * chars.length)];
            computerGuess.push(rChar)
            console.log(computerGuess[0]);
        }
    }    
       
    else {
        alert("Please input a valid character");
    }    
}