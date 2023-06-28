function starEnigma(input) {
  let messages = Number(input.shift());
  let planets = [];

  for (let i = 0; i < messages; i++) {
    let encryptedMessage = input[i];
    let keysPattern = /[star|STAR]/g;
    let numOfKeys = encryptedMessage.match(keysPattern).length;

    let decryptedCharCodesColl = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      let newCharCode = charCode - numOfKeys;
      decryptedCharCodesColl.push(newCharCode);
    }

    let decryptedMessage = "";
    decryptedCharCodesColl.forEach(
      (x) => (decryptedMessage += String.fromCharCode(x))
    );

    let planetPattern =
      /@(?<name>[A-Za-z]+)[^-@!:>]*:(?<population>\d+)[^-@!:>]*!(?<attackType>A|D)![^-@!:>]*->(?<soldierCount>\d+)/g;

    let match = planetPattern.exec(decryptedMessage);

    if (match === null) {
      continue;
    }

    let planetName = match.groups["name"];
    let population = Number(match.groups["population"]);
    let attackType = match.groups["attackType"];
    let soldierCount = Number(match.groups["soldierCount"]);

    let planet = { planetName, population, attackType, soldierCount };
    planets.push(planet);
  }

  let attackedPlanets = planets
    .filter((obj) => obj.attackType == "A")
    .sort((objA, objB) => objA.planetName.localeCompare(objB.planetName));
  let destroyedPlanets = planets
    .filter((obj) => obj.attackType == "D")
    .sort((objA, objB) => objA.planetName.localeCompare(objB.planetName));

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets.forEach((obj) => console.log(`-> ${obj.planetName}`));

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets.forEach((obj) => console.log(`-> ${obj.planetName}`));
}

/*
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']
);
*/

starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
