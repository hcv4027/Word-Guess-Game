//Create an array of all character names from the 90s cartoons.
var names = ["ANIMANIACS", "HERCULES", "ALADDIN", "CASPER", "DROOPY", "POKEMON", "TICK"];
var userGuess = " ";

//Create an array for tracking correct answers given by player.
var correct = [];

//Randomly pick a character to play word guess with.            
var name = names[Math.floor(Math.random() * names.length)];

//Flag to check the status of whether the game has been started.
var gamestarted = false;

//Create the blanks needed for guessing by player.
var answers = [];
for (var i = 0; i < name.length; i++)
{
    answers[i] = "_";
}

// Creating variables to hold the number of wins and number of guesses left.
var wins = 0;
var guessesleft = name.length + 4;

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var instructText = document.getElementById("instruct-text");
var chosenText = document.getElementById("chosen");


document.onkeyup = function(event)
{
    //Check to see if the game has already started.
    if(gamestarted)
    {
        if(guessesleft >= 0)
        {
            // var 
            userGuess = event.key.toUpperCase();
            chosenText.textContent = "You chose: "+userGuess;

            //Joins the elements of the array and displays for user to see the word length and amount of guesses!
            userChoiceText.textContent = answers.join(" ");
            
                    for(var i = 0; i < name.length; i++)
                    {
                        if(userGuess === name[i])
                        {
                            answers[i] = userGuess;
                            guessesleft--;
                            guessesText.textContent = "Right! "+(guessesleft - 1) + " guesses left.";
                            correct[i] = userGuess;
                            console.log(correct);
                            if(correct.length === name.length)
                            {
                                alert("WINNER!")
                                wins++;
                            }
                        }
                        else
                        {
                            console.log(guessesleft);
                            guessesText.textContent = "Letter not available! "+(guessesleft - 1) + " guesses left.";
                        }
                    }
            
        }
        userChoiceText.textContent = answers.join(" ");
    }
    else // The game has not started yet, this will run on your first keypress.
    {
        alert("Hit any key to start the game");
        userChoiceText.textContent = answers.join(" ");
        instructText.textContent = "Guess a single letter";
        winsText.textContent = "Wins: " + wins;
        guessesText.textContent = guessesleft + " guesses left.";
        console.log(name);
        gamestarted = true;
        
    }
};
function change()
{
    var image = document.getElementById('hinter');
    if(name === "ALADDIN"){
        image.src = "assets/images/ALADDIN.png";
    }
    switch(name){
        case "ALADDIN":
        image.src = "assets/images/ALADDIN.png";
        break;

        case "ANIMANIACS":
        image.src = "assets/images/ANIMANIACS.png";
        break;

        case "HERCULES":
        image.src = "assets/images/HERCULES.png";
        break;

        case "CASPER":
        image.src = "assets/images/CASPER.png";
        break;

        case "DROOPY":
        image.src = "assets/images/DROOPY.png";
        break;

        case "POKEMON":
        image.src = "assets/images/POKEMON.png";
        break;

        case "TICK":
        image.src = "assets/images/TICK.png";
        break;

    }
    
}
