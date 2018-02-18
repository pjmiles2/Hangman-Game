
//global variables outside the function
var usedLetters = [];
var wins = 0;
var wongame;

//i am having trouble with the 'press any key to start' so i added a button.
document.getElementById("clickMe").onclick = newGame;

//clicking the button starts a game
function newGame() {

//words to guess
var words = ["jack", "janet", "roper", "furley", "chrissy", "terri", 
    "misunderstanding", "larry"];

//other variables
var currentWord;
var userTries;
var userGuess;
var maskedWord = [];
var gameWord;

//resets image and guessed letters from last game
document.getElementById("pix").src = "assets/images/threescompany.jpg";
document.getElementById("score").innerHTML = "Guess the Word:";

//a word selected from the array
var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);

//variable to store guesses
var userTries = currentWord.length + 2;

//displaying the word on the screen as dashes
for(var i=0; i< currentWord.length; i++) {

    maskedWord[i] = "_";
}


    
document.getElementById("wordinplay").innerHTML = maskedWord.join(" ");

//saving the guessed letters
document.onkeyup = function(event) {
//test if the letter is an actual letter
    if (event.keyCode >= 65 && event.keyCode <= 90){

        var userInput = event.key;
        var userGuess = userInput.toLowerCase();
//if something other than a letter is pressed an alert
    } else {alert("Please enter a valid letter")
    //added this to make sure that a turn isnt subtracted for invalid key.
    userTries++;

    }
    

var gameWord = maskedWord;

//check if guessed letter exists in word

for(var j=0; j<currentWord.length; j++) {
    if(currentWord[j] === userGuess) {
        gameWord[j] = userGuess;
    
    }
};

userTries--;

usedLetters.push(userGuess);

document.getElementById("wordinplay").innerHTML = gameWord.join(" ");
document.getElementById("score").innerHTML = "You have " +userTries+ " guesses remaining";

//game over if the user runs ouf of guesses
if (userTries <= 0)
{ 
wongame = false;    
document.getElementById("pix").src = "assets/images/dumb.gif";
document.getElementById("score").innerHTML = "Loser!";
document.getElementById("wordinplay").innerHTML = "The word was "+currentWord;
usedLetters = [];

}
//checks to see if there are any letters still to be guessed
var dashFound = false;
for(var k=0; k<gameWord.length; k++)
{
    if(gameWord[k] === "_")
    {
        dashFound = true;
        

        
    }
}
//if all the letters guessed, you win
if(dashFound === false)
{
    
    wongame = true;    

    document.getElementById("score").innerHTML = "You Win!";

    document.getElementById("wordinplay").innerHTML = "The word is " +currentWord + "!";
//image changes to picture representative of the word.
    function images() {

    if (currentWord === "jack") {

        document.getElementById("pix").src = "assets/images/jack.webp";
    } else if (currentWord === "furley") {

        document.getElementById("pix").src = "assets/images/furley.gif";
    } else if (currentWord === "terri") {

        document.getElementById("pix").src = "assets/images/terri.webp";
    } else if (currentWord === "janet") {

        document.getElementById("pix").src = "assets/images/janet.webp";
    } else if (currentWord === "misunderstanding") {

        document.getElementById("pix").src = "assets/images/misunderstanding.webp";
    
    } else if (currentWord === "roper") {

        document.getElementById("pix").src = "assets/images/ropers.webp";
    
    } else if (currentWord === "larry") {

    document.getElementById("pix").src = "assets/images/larry.webp";

    } else {

    document.getElementById("pix").src = "assets/images/chrissy.webp";
    }

    if (wongame === true) {

        wins++;
    }
    document.getElementById("wins").innerHTML = "Wins: " + wins;

}



images();

//reset guessed letters
usedLetters = [];
    
};

document.getElementById("wrong").innerHTML = "Letters guessed so far: " + usedLetters;
  


  };


};








  
