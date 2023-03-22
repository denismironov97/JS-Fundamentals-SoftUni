function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let trashedHelmetCount = parseInt(lostFightsCount / 2);
  let trashedSwordCount = parseInt(lostFightsCount / 3);
  let trashedShieldCount = parseInt(lostFightsCount / (2 * 3));
  let trashedArmourCount = parseInt(lostFightsCount / (2 * 3 * 2));

  let totalPrice =
    trashedHelmetCount * helmetPrice +
    trashedSwordCount * swordPrice +
    trashedShieldCount * shieldPrice +
    trashedArmourCount * armorPrice;

  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

//gladiatorExpenses(7, 2, 3, 4, 5);
//gladiatorExpenses(23, 12.50, 21.50, 40, 200);

function gladiatorExpensesV1(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let trashedHelmetCount = 0;
  let trashedSwordCount = 0;
  let trashedShieldCount = 0;
  let trashedArmourCount = 0;

  for (
    let currLostFight = 1;
    currLostFight <= lostFightsCount;
    currLostFight++
  ) {
    if (currLostFight % 2 == 0) {
      trashedHelmetCount++;
    }

    if (currLostFight % 3 == 0) {
      trashedSwordCount++;
    }

    if (currLostFight % 6 == 0) {
      trashedShieldCount++;
    }

    if (currLostFight % 12 == 0) {
      trashedArmourCount++;
    }
  }

  let totalPrice =
    trashedHelmetCount * helmetPrice +
    trashedSwordCount * swordPrice +
    trashedShieldCount * shieldPrice +
    trashedArmourCount * armorPrice;

  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

function printGladiatorExpensesV2(lostFights, helmet, sword, shield, armor) {
  let helmetBroken = 0;
  let swordBroken = 0;
  let shieldBroken = 0;
  let armorBroken = 0;
  let fightsCounter = 1;

  while (fightsCounter <= lostFights) {
    if (fightsCounter % 2 == 0 && fightsCounter % 3 == 0) {
      shieldBroken++;

      if (shieldBroken % 2 == 0) {
        armorBroken++;
      }
    }

    if (fightsCounter % 2 == 0) {
      helmetBroken++;
    }

    if (fightsCounter % 3 == 0) {
      swordBroken++;
    }

    fightsCounter++;
  }

  const totalExpenses =
    helmet * helmetBroken +
    sword * swordBroken +
    shield * shieldBroken +
    armor * armorBroken;

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
