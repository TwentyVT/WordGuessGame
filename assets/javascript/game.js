
// setting word bank array
// picking random word to guess from wordbank array

var word_bank = ["red", "blue", "teal", "brown", "pink", "orange"];
var word_to_guess = word_bank[Math.floor(Math.random() * word_bank.length)]
console.log(word_to_guess);
var good_letters = [];
var guessedletters = [];
var dom_word = document.getElementById("word");
var triesleft = document.getElementById("triesleft");
var badletters = document.getElementById("badletters");
var tries = 5;
var wintrigger = 0;
var winbanner = document.getElementById("win");
var wincount = 0;
var funcswitch = true;


function winFunc () {
    if (good_letters.length === word_to_guess.length)
    wincount = parseInt(wincount + 1);
    winbanner.textContent = wincount;
}

function triesCounter() {
    if (word_to_guess.indexOf(event.key) <= -1) {
        tries = parseInt(tries - 1);
        triesleft.textContent = tries;
        badletters.innerHTML += " " + event.key;
    }
    if (tries === 0) {
        badletters.innerHTML = "YOU LOSE GOOD DAY SIR";
        funcswitch = false;
        setTimeout(reset, 5000);
    }
}

function alreadyGuessed() {
    if (guessedletters.indexOf(event.key) > -1)
        alert("You guessed that already, try again!")
}

function reset() {
    word_bank = ["red", "blue", "teal", "brown", "pink", "orange"];
    funcswitch = true;
    word_to_guess = [];
    word_to_guess = word_bank[Math.floor(Math.random() * word_bank.length)]
    guessedletters = [];
    good_letters = [];
    badletters.innerHTML = "";
    tries = 5;
    triesleft.textContent = 5;
    dom_word.innerHTML = "";
    print();
}

function print() {
    var print_word = "";
    console.log(word_to_guess);
    document.getElementById("word").innerHTML = print_word;
    for (var i = 0; i < word_to_guess.length; i++) {
        if (good_letters.indexOf(word_to_guess[i]) > -1) {
            print_word = print_word + " " + word_to_guess[i] + " ";
        } else {
            print_word += " _ ";
        }
        dom_word.innerHTML = print_word;
    }
    if (good_letters.length === word_to_guess.length) {
        winFunc();
        dom_word.innerHTML = "You win!";
        funcswitch = false;
        setTimeout(reset, 5000);
    }

}

document.onkeyup = function (event) {
    if (funcswitch === true) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            if (good_letters.indexOf(event.key) > -1) {
                alert("You figured this one out already")
            } else if (word_to_guess.indexOf(event.key) > -1) {
                winFunc();
                good_letters.push(event.key);
            } else if (guessedletters.indexOf(event.key) > -1) {
                alert("Checked your gussed letters hello")
            } else {
                triesCounter();
                guessedletters.push(event.key);
            }
            print();
        }
        else {
            alert("A-Z only! (or 65-90 ;) )")
            return; 
        }

    }
}
print();

// 