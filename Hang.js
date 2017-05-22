//Variables
var words = ["snake", "lizard", "turtle", "dinosaur", "chameleon", "crocodile", "gecko"];
var chosenWord = "";
var letters =[];
var blanks = 0;
var changingBlanks = [];
var wrong = [];
var wins = 0;
var losses = 0;
var guesses = 7;

//Functions
// selecting thr random eord
function wordSelector () {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    letters = chosenWord.split("")
    blanks = letters.length

    guesses = 7;
    wrong = [];
    changingBlanks = [];
//adding _ to blanks
for(var i=0; i<blanks; i++){
	changingBlanks.push("_");
}
//reseting counters
document.getElementById("wordBlanks").innerHTML = changingBlanks.join(" ");
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;


}

 
function checkLetters (letter){

//checking if letters exist
	var isLetterInWord = false;

	for(var i=0; i<blanks; i++){
		if(chosenWord[i]== letter){
			isLetterInWord = true;
		}
	}
//determining where letter is in word and populating on blank
	if(isLetterInWord) {	
		for(var i=0; i<blanks; i++){
			if(chosenWord[i]== letter){
			changingBlanks[i] = letter;
			}	
		}
		document.getElementById("wordBlanks").innerHTML = changingBlanks.join(" ");
	}
	// Letters not found
	else{
		wrong.push(letter);
		guesses--
		document.getElementById("guesses").innerHTML = guesses;
		document.getElementById("iGuesses").innerHTML = wrong.join(" ")

	}
	
}

function completeRound(){
	console.log("Wins: " + wins +" | Losses: " + losses + " | Guesses Left: " + guesses )

	if(letters.toString() == changingBlanks.toString()){
		wins++
		alert("You Won")

		document.getElementById("wins").innerHTML = wins
		
		wordSelector()
	}

	else if (guesses == 0){
		losses++
		alert("You Lost")

		document.getElementById("losses").innerHTML = losses

		wordSelector()
	}
}
 //Main Process
 wordSelector()

 document.onkeyup = function(event) {
 	var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
 	checkLetters(lettersGuessed);
 	completeRound();

 }

