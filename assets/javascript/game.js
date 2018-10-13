//Create an array of all character names from the 90s cartoons.
var names = ["ANIMANIACS", "HERCULES", "ALADDIN", "CASPER", "DROOPY", "POKEMON", "TICK"];

//Randomly pick a character to play word guess with.            
var name = names[Math.floor(Math.random() * names.length)];

//Create the blanks needed for guessing by player.
var answers = [];
for (var i = 0; i < name.length; i++)
{
    answers[i] = "_";
}

// Creating variables to hold the number of wins and number of guesses left.
var wins = 0;
var guessesleft = name.length;

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var instructText = document.getElementById("instruct-text");
var chosenText = document.getElementById("chosen");


document.onkeyup = function(event)
{
    //var userGuess = event.key.toUpperCase();
    instructText.textContent = "Guess a letter"
    //userChoiceText.textContent = answers.join(" ");
    winsText.textContent = "Wins: " + wins;
    guessesText.textContent = "You have: "+guessesleft + " guesses left.";
    //chosenText.textContent = "You chose: "+userGuess;
    console.log(name);
    turnon();

   if(guessesleft >= 0)
   {
       var userGuess = event.key.toUpperCase();
       
       chosenText.textContent = "You chose: "+userGuess;
       userChoiceText.textContent = answers.join(" ");
       
            for(var i = 0; i < name.length; i++)
            {
                if(name[i] === userGuess)
                {
                    answers[i] = userGuess;
                    guessesleft--;
                    // var newGuess = document.createElement("p");
                    // newGuess.textContent = answers[i];
                    // chosenText.appendChild(newGuess);
                }
            }
       
   }
   userChoiceText.textContent = answers.join(" ");

};

function turnon(){
    var x = document.getElementById("hintbutton");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

