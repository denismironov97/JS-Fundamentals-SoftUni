function cardGame(dataArray) {
  let playersCards = new Map(); //key => string = Name, value => new Set() {holding cards}

  for (const playerData of dataArray) {
    [playerName, playerCards] = playerData.split(": ");
    playerCards = playerCards.split(", ");

    let currPlayerCards = new Set();
    playerCards.forEach((card) => currPlayerCards.add(card));

    if (!playersCards.has(playerName)) {
      playersCards.set(playerName, currPlayerCards);
    } else {
      let playersHand = playersCards.get(playerName); //!Reference point to the Set() holding player's unique cards.
      currPlayerCards.forEach((card) => playersHand.add(card));
    }
  }

  for (let [key, value] of playersCards) {
    let currPlayerCardPower = calculatePowerOfCards(value);
    console.log(`${key}: ${currPlayerCardPower}`);
  }

  function calculatePowerOfCards(cardsListSetStructureArg) {
    let cardsArr = Array.from(cardsListSetStructureArg);
    let cardsPowerSum = 0;

    for (const card of cardsArr) {
      let multiplier1 = 0;
      let multiplier2 = 0;
      let cardPower = 0;

      if (card.length === 3) {
        multiplier1 = Number(card.substring(0, 2));
      } else {
        if (card[0] === "J") {
          multiplier1 = 11;
        } else if (card[0] === "Q") {
          multiplier1 = 12;
        } else if (card[0] === "K") {
          multiplier1 = 13;
        } else if (card[0] === "A") {
          multiplier1 = 14;
        } else {
          multiplier1 = Number(card[0]);
        }
      }

      if (card[card.length - 1] === "S") {
        multiplier2 = 4;
      } else if (card[card.length - 1] === "H") {
        multiplier2 = 3;
      } else if (card[card.length - 1] === "D") {
        multiplier2 = 2;
      } else {
        //C
        multiplier2 = 1;
      }

      cardPower = multiplier1 * multiplier2;

      cardsPowerSum += cardPower;
    }

    return cardsPowerSum;
  }
}

/*
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
);
*/

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
