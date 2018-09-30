
// setting word bank array
// picking random word to guess from wordbank array

var word_bank = ["one", "two", "three", "beef", "can", "man"];
var word_to_guess = word_bank[Math.floor(Math.random() * word_bank.length)]
console.log(word_to_guess);
var good_letters = [];
var dom_word = document.getElementById("word");
var triesleft = document.getElementById("triesleft");
var badletters = document.getElementById("badletters");
var tries = 15;

function triesCounter() {
    if (word_to_guess.indexOf(event.key) <= -1) {
        console.log(event.key);
        tries = parseInt(tries - 1);
        triesleft.textContent = tries;
        badletters.innerHTML += " " + event.key;
        if (tries === 0) {
            badletters.innerHTML = "YOU LOSE GOOD DAY SIR";
            reset();
        }
        if (good_letters === word_to_guess) {
            badletters.innerHTML += "you win";
            reset();
        }
    }
}

function reset() {
    word_to_guess = word_bank[Math.floor(Math.random() * word_bank.length)]
    console.log(word_to_guess);
    good_letters = [];
    badletters.innerHTML = "";
    tries = 15;
}

function print() {
    var print_word = "";
    document.getElementById("word").innerHTML = print_word;
    for (var i = 0; i < word_to_guess.length; i++) {
        if (good_letters.indexOf(word_to_guess[i]) > -1) {
            print_word = print_word + " " + word_to_guess[i] + " ";
        } else {
            print_word += " _ ";
        }
    }
    dom_word.innerHTML = print_word;

}

document.onkeyup = function (event) {

    if (word_to_guess.indexOf(event.key) > -1) {
        good_letters.push(event.key);
    } else {
        triesCounter();
    }
    print();
}

print();






