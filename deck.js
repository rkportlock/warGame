// need to create a deck of cards, then assign numbers and suits to cards
const SUITS = ["Spade", "Club", "Heart", "Diamond"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const cardValueMap = { 
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
}

// make a class for Deck and a class for Card
class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }// create a function that shuffles through the deck
    
    get numberOfCards() { // this allows the number of cards to be accessed more efficently 
        return this.cards.length;
    }
    
    shuffle() {
        // create a for loop that flips through the cards and then sorts them
        for (let i = this.numberOfCards - 1; i > 0; i--) { 
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue; // random shuffle
        }
    }
}
// deck of cards is shuffled and split among players


class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

// need to have players
class Player {
    
    constructor(name) {
        this.name = name;
        this.playerDeck = [];
        this.playerScore = 0;
    }
    
    addNewDeck(deck) {
        this.playerDeck = deck;
    }    
}

function freshDeck() {
    return SUITS.flatMap(suit => {// returns an array or arrays
        return VALUES.map(value => {
            return new Card(suit, value);
        });
    });
}

function gameSetup(playerOne, playerTwo) {
    const deck = new Deck();
    deck.shuffle();
    const middleOfDeck = (deck.numberOfCards/2);
    playerOne.addNewDeck(deck.cards.slice(0, middleOfDeck));
    playerTwo.addNewDeck(deck.cards.slice(middleOfDeck, deck.numberOfCards));

}


function roundOutput (playerOne, playerTwo, roundNum) {
    console.log(`${playerOne.name} plays: ${playerOne.playerDeck[roundNum]. value} of
     ${playerOne.playerDeck[roundNum].suit} `);
    console.log(`${playerTwo.name} plays: ${playerTwo.playerDeck[roundNum].value} of 
    ${playerTwo.playerDeck[roundNum].suit}  `);
}

function roundResults(playerOne, playerTwo) {
    for (let i = 0; i < playerOne.playerDeck.length; i++) {
        roundOutput(playerOne, playerTwo, i);
        if (cardValueMap[playerOne.playerDeck[i].value] > cardValueMap[playerTwo.playerDeck[i].value]) {
            playerOne.playerScore += 1;
            console.log(`${playerOne.name} has won this round`);
        } else if (cardValueMap[playerOne.playerDeck[i].value] < cardValueMap[playerTwo.playerDeck[i].value]) {
          playerTwo.playerScore += 1;
          console.log(`${playerTwo.name} has won this round`);
        } else {
            console.log('Tie round, no points rewarded');
        }
    }
}
// players take turns drawing one card, whoever has the highest card wins
// if it's a tie, no one gets points

function finalScore (playerOne, playerTwo) {
    if (playerOne.playerScore > playerTwo.playerScore) {
        console.log(`${playerOne.name} has won round with a final score of ${playerOne.playerScore}`);
    } else if (playerOne.playerScore < playerTwo.playerScore) {
        console.log(`${playerTwo.name} has won round with a final score of: ${playerTwo.playerScore}`);
    } else {
        console.log(`${playerOne.name} and ${playerTwo.name} have tied.`);
    }
}
// the objective is to have the most points at the end 



// need to actually create players and then call them into play the game
let Nacho = new Player("Nacho");
let Megan = new Player("Megan");

gameSetup(Nacho, Megan);

roundResults(Nacho, Megan);

finalScore(Nacho, Megan);
        