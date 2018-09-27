

var userGuessText = document.getElementById("user-guess");

var word = ["a", "b", "c"];

var dog = 5; 


document.onkeyup = function (guess) {

    var userGuessText = document.getElementById("user-guess");

    var word = ["b", "o", "b"];

    var userGuess = guess.key.toLowerCase();
    console.log(userGuess);

     
    for (i = 0; i < word.length -1; i++ ) {
    
        
    if ((word.indexOf(userGuess) > -1)) {
        userGuessText.innerHTML += userGuess;
    } else {
        console.log("NO WORK")
    }
}
}




