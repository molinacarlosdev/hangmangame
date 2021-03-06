//Counters
var gameVars = {
  Wins: 0,
  Losses: 0,
  Lives: 10
};

//All the words for the hangman
puzzleWords = [
  [
    "banana",
    "strawberry",
    "grape",
    "apple",
    "orange",
    "plums",
    "nectarine",
    "watermelon",
    "pear",
    "melon",
    "tangerine",
    "mango",
    "peach"
  ],
  [
    "mexico",
    "japan",
    "canada",
    "china",
    "korea",
    "spain",
    "france",
    "italy",
    "turkey",
    "pakistan",
    "england",
    "ireland",
    "russia",
    "colombia",
    "ecuador",
    "belize",
    "irak",
    "iran",
    "turkey",
    "honduras",
    "panama",
    "venezuela",
    "brasil",
    "argentina"
  ],
  [
    "manchester",
    "milan",
    "madrid",
    "amsterdam",
    "prague",
    "paris",
    "london",
    "kabul",
    "istanbul",
    "rome",
    "miami",
    "houston",
    "new-york",
    "barcelona",
    "liverpool",
    "tokyo",
    "shanghai"
  ]
];

//Randomize a Word and also a Category
function randomPCWord() {
  //Create a set of arrays for the puzzle words to be
  //used by the computer.
  var pcRandomCategory =
    puzzleWords[Math.floor(Math.random() * puzzleWords.length)];
  if (pcRandomCategory === puzzleWords[0]) {
    categoryName.innerHTML = "The chosen category is: FRUITS";
  } else if (pcRandomCategory === puzzleWords[1]) {
    categoryName.innerHTML = "The chosen category is: COUNTRIES";
  } else if (pcRandomCategory === puzzleWords[2]) {
    categoryName.innerHTML = "The chosen category is: CITIES";
  }
  var word = pcRandomCategory[Math.floor(Math.random() * pcRandomCategory.length)];
  var word = word.replace(/\s/g, "-");
  return word;
}
var chosenword = randomPCWord();
console.log(chosenword);
//Create an array to display the alphabet to the user
var alphabetBoard = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// create a function to display the alphabet as buttons
function alphabetButtons() {
  var myButtons = document.getElementById("buttons");
  var letters = document.createElement("ul");
  letters.setAttribute("id","alphabetBoard");
  for (var i = 0; i < alphabetBoard.length; i++) {
    var list = document.createElement("li");
    list.setAttribute("id","letter");
    list.innerHTML = alphabetBoard[i];
    myButtons.appendChild(letters);
    letters.appendChild(list);
    //

  }
}

alphabetButtons();

// Create all the guesses for the ul
function displayWord() {
  wordHolder = document.getElementById("hold");
  correctGuessLetter = document.createElement("ul");

  for (var i = 0; i < chosenword.length; i++) {
    correctGuessLetter.setAttribute("id", "my-word");
    guess = document.createElement("li");
    guess.setAttribute("class", "guess");
    if (chosenword[i] === "-") {
      guess.innerHTML = "-";
      space = 1;
    } else {
      guess.innerHTML = "_";
    };

    //guesses.push(guess);
    wordHolder.appendChild(correctGuessLetter);
    correctGuessLetter.appendChild(guess);
  };
};
displayWord();

function findLetter(letter, word) {  //the function will receive 2 parameters.
  let counter = 0; //Count all the occurencess
  let indexForLetters = {};
  for (i=0; i < word.length; i++){
    if(letter === word[i] || letter.toUpperCase() === word[i]) {
      if(!indexForLetters[word[i]]) {
          indexForLetters[[i]] = word[i];
      }
      counter++;
    }
  }
  // var result = "The letter " + letter + " was found " + counter + " times in the word " + word;
  return indexForLetters; //returns an object with the index for each occurence
}

// Get the element to display lives left in the game
var showLives = document.getElementById("livesLeft");
// Show lives
showLives.innerHTML = "You have " + gameVars.Lives + " remaining.";

//Below, I will use these variables to show the win/losses
var showWins = document.getElementById("winholder");
var showLosses = document.getElementById("lossesholder");
var correctUserGuesses = [];
//
// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
    var userGuessedLetter = event.key; //capture user input
    var obj = findLetter(userGuessedLetter, chosenword);
    console.log(findLetter(userGuessedLetter, chosenword));
        //Evaluate if the user guessed letter exist in the chosen PC Word
        if (Object.keys(obj).length === 0) {
          gameVars.Lives--;
          showLives.innerHTML = "You have " + gameVars.Lives + " remaining.";
          if(gameVars.Lives ===0) {
            gameVars.Losses++;
            showLives.innerHTML = "You lost. The answer was " + chosenword.toUpperCase() + " .";
            showLosses.innerHTML = gameVars.Losses;
            document.onkeyup = null;
          }
        } else {
          console.log('Yey, the guess from the user exist in our chosen word');

          //Here I will first create an array with the letter being enter by the user
          //Using the Object received from my function findLetter()
          //Using the same object, I will display the correct letter in the screen
        };
      };




