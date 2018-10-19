//Create an array of all character names from the 90s cartoons.
var names = ["ANIMANIACS", "HERCULES", "ALADDIN", "CASPER", "DROOPY", "POKEMON", "TICK"];
var userGuess = " ";
var found = false;


//Randomly pick a character to play word guess with, from the names array.            
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
var starter = document.getElementById("starter");
var image = document.getElementById('hinter');

//Displsys underscores for the amount of characters in the game that begins on keypress.
userChoiceText.textContent = answers.join(" ");
document.onkeyup = function(event)
{
    //Check to see if the game has already started.
    if(gamestarted)
    {
        if(guessesleft >= 0)
        {
            userGuess = event.key.toUpperCase();
            chosenText.textContent = "You chose: "+userGuess;

            //Joins the elements of the array and displays for user to see the word length and amount of guesses!            
                    for(var i = 0; i < name.length; i++)
                    {
                        if(userGuess === name[i])
                        {
                        
                                answers[i] = userGuess;
                                guessesleft--;
                                guessesText.textContent = "Right! "+(guessesleft) + " guesses left.";
                                userChoiceText.textContent = answers.join(" ");
                                console.log(answers);
                        }

                        if(!answers.includes("_"))
                        {
                            answers = name;
                            wins++;
                            winsText.textContent = "Wins: " + wins;
                            starter.textContent = "WINNER! WINNER! WINNER!"
                            setTimeout(function(){ gostart();}, 1000);
                        }

                        if(userGuess !== name[i])    
                        {
                            console.log(guessesleft);
                        }
                    }
                    
                    if(!name.includes(userGuess))
                    {
                        guessesleft--;
                        guessesText.textContent = "Letter not available! "+(guessesleft) + " guesses left.";
                    }
   
        }
        
    }
    else // Arriving here means that the game has not started yet, this will run on your first keypress.
    {
        instructText.textContent = "Guess a single letter";
        winsText.textContent = "Wins: " + wins;
        guessesText.textContent = guessesleft + " guesses left.";
        console.log(name);
        gamestarted = true;
        
    }
};

//The change function switches out the hint images with the acual chracxter images.
//This module of code makes use of a switch statement.
function change()
{
    //var image = document.getElementById('hinter');
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
};

//This functions is what is used to reinitialize the elements on the page for playong the game ore than once
function gostart()
{
    confirm("Would you like to play again?");
    gamestarted = false;
    name = names[Math.floor(Math.random() * names.length)];
    answers=[];
    answerfill(answers);
    userChoiceText.textContent = answers.join(" ");
    guessesleft = name.length + 4;
    userChoiceText.textContent = answers.join(" ");
    instructText.textContent = "Guess a single letter";
    guessesText.textContent = guessesleft + " guesses left.";
    chosenText.textContent = "";
    starter.textContent = "Press any key to start a new game!";
    image.src = "assets/images/Hinter.png";
};

//The following function is used to refill the answers array with underscores for replaying the game.
function answerfill(answers)
{
    for (var i = 0; i < name.length; i++)
    {
        answers[i] = "_";
    }
};