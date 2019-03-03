//declarations
var player;
var playerRunningTotal;
var playerActive;
var dealer;
var dealerRunningTotal;
var dealerActive;
var cards = ["Ace", "King", "Queen", "Jack", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newCard;
var readline = require('readline-sync');

//create the card generator function includes the checks for face cards and aces
function playerCardGenerator(newCard) {
    //generate random card
    var newCard = cards[Math.floor(Math.random() * cards.length)];

    //check if a face value and assign a value
    if (newCard == "King") {
        newCard = 10;
    }
    if (newCard == "Queen") {
        newCard = 10;
    }
    if (newCard == "Jack") {
        newCard = 10;
    }
    //checks if the card is an ace and gets the player value input
    if (newCard == "Ace") {
        var aceCheckFirstCard = readline.question("You got an Ace! What value would you like, 1 or 11?");
        newCard = parseInt(aceCheckFirstCard);
        parseInt(newCard);
    }
    return newCard;
}

function dealerCardGenerator(newCard) {
    //generate random card
    var newCard = cards[Math.floor(Math.random() * cards.length)];

    //check if a face value and assign a value
    //checks if the card is an ace and gets the player value input
    if (newCard == "King") {
        newCard = 10;
    }
    if (newCard == "Queen") {
        newCard = 10;
    }
    if (newCard == "Jack") {
        newCard = 10;
    }
    //checks if the card is an ace and gets the player value input
    if (newCard == "Ace") {
        newCard = 11;
    }
    return newCard;
}

//ask for players name and put it into "player" (moving to greeting function)
var player = readline.question("Please enter your player name: ");

//generate first and second card
var playerFirstCard = playerCardGenerator(newCard);
var playerSecondCard = playerCardGenerator(newCard);

//reassign running total after first set have been generated
playerRunningTotal = playerFirstCard + playerSecondCard;

//generate dealers cards
var dealerFirstCard = dealerCardGenerator(newCard);
var dealerSecondCard = dealerCardGenerator(newCard);

//reassign running total after first set have been generated
dealerRunningTotal = dealerFirstCard + dealerSecondCard;
console.log("TEST: Dealer has " + dealerFirstCard + " & " + dealerSecondCard + " Dealer total is " + dealerRunningTotal)

//output dealer cards - only show 2nd card
console.log("The dealer has dealt he has one hidden card and " + dealerSecondCard)

//output first and second card to player (moving to greeting function)
console.log("Hi " + player + ", your first cards are " + playerFirstCard + " & " + playerSecondCard);


if (playerRunningTotal > 21) {
    console.log("You've gone bust!")
    //goto dealers turn!
}

//move to a function and call at start of loop
if (playerRunningTotal < 21) {
    playerActive = true;
} else {
    playerActive = false;
}

if (dealerRunningTotal < 21) {
    dealerActive = true;
} else {
    dealerActive = false;
}

while (playerActive == true) {
    //check for card duplicates and offer a spilt
    if (playerFirstCard == playerSecondCard) {
        var playerSplit = readline.question("You got a " + playerFirstCard + "&" + playerSecondCard + ". Would you like to split your hand? Yes(y) or No(n)");
        if (playerSplit == "y") {
            //spilt cards into hands

                //hand one
                    //deal card

                //hand two
                    //deal card
        }

        if (playerSplit == "n") {
            //continue with current cards
            console.log("TEST: PLAYER DID NO SPLIT");
            break
        }

    }

    //player hit or stand
    var playerChoice = readline.question("Your total is " + playerRunningTotal + ". Would you like to hit(h) or stand(s)?")

    //if player hit deal new card
    if (playerChoice == "h") {
        //deal new card
        var playerChoiceNewCard = playerCardGenerator(newCard);
        console.log("Your have been dealt " + playerChoiceNewCard);
        playerRunningTotal += playerChoiceNewCard;
        console.log(playerRunningTotal);

        //add new card to running total
        console.log("Your new total is " + playerRunningTotal);
        //check for bust
        if (playerRunningTotal > 21) {
            playerActive = false;
            console.log("Your total is " + playerRunningTotal + ". You've gone bust!")
            break
        }
        //check if players value is 21 and break from loop to dealers turn
        if (playerRunningTotal == 21) {
            console.log("You've got 21! Going to dealers turn.")
            break
        }
    }

    //if player stand move to dealer
    if (playerChoice == "s") {
        console.log("You stuck with a total of " + playerRunningTotal + ". Going to Dealers turn!")
        break
    }

    //because errors
    if (playerChoice == "exit") {
        break
    }
}

//check dealer score for bust
//use dealer active 

while (dealerActive = true) {
    //whole new fucking system to know when the dealer needs to hit or stand and I have no idea how to create that rn

    //because errors
        //because errors
        var dealerInput = readline.question("YOU'RE IN THE DEALERS TURN EVERYTHING IS BROKEN MAYBE");
        if (dealerInput == "exit") {
            break
        }
}