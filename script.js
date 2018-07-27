var word = RandomGenWords[Math.floor((Math.random() * 29) + 0)];
var currWord = [];
var CorrectGuess = [];
var WrongGuess = [];
var numofMis= 0;
var stateGame = 0;

var submitChar = document.getElementById("sub")
submitChar.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("submit").click();
  }
});


function makeWord (){
	var fullWord = "";
	var i;
	for (i = 0; i < word.length ; i++){
		fullWord += currWord[i];
	}
	return fullWord;
} 


function makeBlank (){
	var i;
	for(i = 0; i < word.length ; i++) {
		currWord.push("-");
	}
}


function checkLose(){
	document.getElementById("numMis").innerHTML = numofMis += 1;
	var hangUrl = "hang"+numofMis+".png";
	document.getElementById('hangImage').src= hangUrl;
	if(numofMis == 6){
		document.getElementById("result").innerHTML = "You Lose";
		document.getElementById("myWord").innerHTML = word;
		stateGame = 1;
	}
}


function checkWin(){
	if(currWord.indexOf("-") == -1){
		document.getElementById("result").innerHTML = "You Win";
		stateGame = 1;
	}
}


function charReplace(nchar){
	for(i = 0; i < word.length ; i++) {
		if (word.charAt(i).toLowerCase() == nchar.toLowerCase()){
			currWord[i] = nchar.toLowerCase();
		}
	}
	document.getElementById("myWord").innerHTML = makeWord();
}


function charCheck (){
	var nchar = document.getElementById("sub").value;
	var allguess = CorrectGuess.concat(WrongGuess);
	
	if (stateGame == 0){
		if (allguess.indexOf(nchar.toLowerCase()) != -1){
			document.getElementById("result").innerHTML = "You've Already Guessed This Before!";
		}
		
		else{
			if(word.indexOf(nchar.toLowerCase()) == -1){
				document.getElementById("result").innerHTML = "You've Got the Character Wrong!";
				WrongGuess.push(nchar.toLowerCase());
				document.getElementById("wrongGuess").innerHTML = WrongGuess;
				checkLose();
			}
			else{
				document.getElementById("result").innerHTML = "You've Got the Character Right!";
				CorrectGuess.push(nchar.toLowerCase());
				document.getElementById("correctGuess").innerHTML = CorrectGuess;
				charReplace(nchar);
				checkWin();
			}
		}
	}
} 

makeBlank();
document.getElementById("myWord").innerHTML = makeWord();
document.getElementById("numMis").innerHTML = numofMis;