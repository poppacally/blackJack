//define player and card array
var player;
var cards = ["Ace", "King", "Queen", "Jack", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var runningTotal;
var newCard;

//create the card generator function includes the checks for face cards and aces
function cardGenerator(newCard) {
    //generate random card
    var newCard = cards[Math.floor(Math.random() * cards.length)];

    //check if a face value and assign a value
    //checks if the card is an ace and gets the player value input
    if (newCard == "King") {
        newCard = 10;
    }if (newCard == "Queen") {
        newCard = 10;
    }if (newCard == "Jack") {
        newCard = 10;
    }if (newCard == "Ace") {
        var aceCheckFirstCard = readline.question("You got an Ace! What value would you like, 1 or 11?");
        newCard = parseInt(aceCheckFirstCard);
        parseInt(newCard);
    }
    return newCard;
}

//ask for players name and put it into "player"
var readline = require('readline-sync');
var player = readline.question("Please enter your player name: ");

//generate first and second card
var firstCard = cardGenerator(newCard);
var secondCard = cardGenerator(newCard);

//reassign running total after first set have been generated
runningTotal = firstCard + secondCard;

console.log("Hi " + player + ", your first cards are " + firstCard + " & " + secondCard + " A total of: " + runningTotal);

if (runningTotal > 21) {
    console.log("You've gone bust!")
}else {
    var playerChoice = readline.question("Your total is " + runningTotal + ". Would you like to hit(h) or stand(s) ?")
    if (playerChoice == "h") {
        console.log("You hit");
        //generate new card and add to runningTotal
        var playerChoiceNewCard = cardGenerator(newCard);
        console.log("Your have been dealt " + playerChoiceNewCard);
        runningTotal += parseInt(playerChoiceNewCard);
        console.log(runningTotal);
        if (runningTotal < 21) {
            console.log("Your new total is " + runningTotal);
        }else{
            console.log("You've gone bust!")
        }
    }if (playerChoice == "s") {
        console.log("You stood your total is " + runningTotal);
    }
}
