//Global variables

var ind
//Indexes for a word

var scoreCorrect = 0
var scoreIncorrect = 0
//Starting scores

var chosenWord
//Word chosen by randomizer (also the correct answer)

//Randomly picks a function.
function rand(){
	document.getElementById("scoreC").innerHTML = scoreCorrect;
	document.getElementById("scoreI").innerHTML = scoreIncorrect;
	fInd = Math.floor(Math.random() * functions.length);
	functions[fInd].call();
}

var functions = [
	//Randomly selects Japanese word to be translated into English
	function adjKanaToEng (){
		ind = Math.floor(Math.random() * iAdj.length);
		chosenWord = iAdj[ind].eng;
		console.log(chosenWord);
		document.getElementById("instPt1").innerHTML = "Translate this word";
		document.getElementById("word").innerHTML = iAdj[ind].kana;
		document.getElementById("instPt2").innerHTML = "into English";
	},
	//Randomly selects English word to be translated into Japanese
	function adjEngToKana (){
		ind = Math.floor(Math.random() * iAdj.length);
		chosenWord = iAdj[ind].kana;
		console.log(chosenWord);
		document.getElementById("instPt1").innerHTML = "Translate this word";
		document.getElementById("word").innerHTML = iAdj[ind].eng;
		document.getElementById("instPt2").innerHTML = "into Hiragana";
	},
]

//Looks for enter key and adjusts score
var userInput = document.getElementById("input");
addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13 && document.getElementById("input").value === chosenWord) {
		document.getElementById("submit").click();
		scoreCorrect = scoreCorrect + 1;
		document.getElementById("scoreC").innerHTML = scoreCorrect;
	}
	else if (event.keyCode === 13 && document.getElementById("input").value === "") {
		console.log("Empty");
	}
	else if (event.keyCode === 13 && document.getElementById("input").value != chosenWord) {
		scoreIncorrect = scoreIncorrect + 1;
		document.getElementById("scoreI").innerHTML = scoreIncorrect;
	}
});