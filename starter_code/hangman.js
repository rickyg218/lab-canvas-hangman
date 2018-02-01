var hangman;


function Hangman() {
  this.words=['y','k','w'];
  this.secretWord = "";
  this.letters = ["a","b","c"];
  this.guessedLetter= [];
  this.errorsLeft = 10; 


Hangman.prototype.getWord = function () {
 return 'this.words';
  }
}



Hangman.prototype.checkIfLetter = function (keyCode) {
if( this.letters > 2){
  return true;
}
else{
  return false;
}

};

Hangman.prototype.checkClickedLetters = function (key) {
  var keys="p"
  for (var i =0; i=>this.words.length;i++){
    if(this.letters[i] === key){
      return "letters already choosen";
    }else{
      return false;
    }
    
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
var key ='N';
hangman.checkClickedLetters(key);
return "key"
key.push('Ironhack')
};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
