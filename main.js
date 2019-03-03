//declarations
var player;
var playerRunningTotal;
var playerActive;
var dealer;
var dealerRunningTotal;
var cards = ["Ace", "King", "Queen", "Jack", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newCard;
var readline = require('readline-sync');

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

//ask for players name and put it into "player" (moving to greeting function)
var player = readline.question("Please enter your player name: ");

//generate first and second card
var playerFirstCard = cardGenerator(newCard);
var playerSecondCard = cardGenerator(newCard);

//reassign running total after first set have been generated
playerRunningTotal = playerFirstCard + playerSecondCard;

//generate dealers cards
var dealerFirstCard = cardGenerator(newCard);
var dealerSecondCard = cardGenerator(newCard);

//reassign running total after first set have been generated
dealerRunningTotal = dealerFirstCard + dealerSecondCard;
console.log("TEST: Dealer has " + dealerFirstCard + " & " + dealerSecondCard + " Dealer total is " + dealerRunningTotal)

//output dealer cards - only show 2nd card
console.log("The dealer has dealt he has one hidden card and " + dealerSecondCard)

//output first and second card to player (moving to greeting function)
console.log("Hi " + player + ", your first cards are " + playerFirstCard + " & " + playerSecondCard);

if (playerRunningTotal > 21) {
    console.log("You've gone bust!")
}else {
    var playerChoice = readline.question("Your total is " + playerRunningTotal + ". Would you like to hit(h) or stand(s) ?")
    if (playerChoice == "h") {
        console.log("You hit");
        //generate new card and add to runningTotal
        var playerChoiceNewCard = cardGenerator(newCard);
        console.log("Your have been dealt " + playerChoiceNewCard);
        playerRunningTotal += parseInt(playerChoiceNewCard);
        console.log(playerRunningTotal);
        if (playerRunningTotal < 21) {
            console.log("Your new total is " + playerRunningTotal);
        }else{
            console.log("You've gone bust!")
            //goto dealers turn
        }
    }if (playerChoice == "s") {
        console.log("You stood your total is " + playerRunningTotal);
        //goto dealers turn
    }
}