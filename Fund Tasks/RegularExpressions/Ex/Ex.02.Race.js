function race(dataArr) {
  let pattern = /([\W])/g;
  let letterPattern = /(?<letter>[A-Za-z])/g;
  let digitPattern = /(?<digit>\d)/g;

  let namesOfRacers = new Map();
  dataArr
    .shift()
    .split(", ")
    .map((name) => namesOfRacers.set(name, 0));

  let currCommand = dataArr.shift();
  while (currCommand !== "end of race") {
    //Cleaning the name of alphanumeric characters
    currCommand = currCommand.replace(pattern, "");

    let name = currCommand.replace(digitPattern, "");
    let digitsString = currCommand.replace(letterPattern, "");

    let traveledDistance = 0;
    for (const digit of digitsString) {
      traveledDistance += Number(digit);
    }

    if (namesOfRacers.has(name)) {
      let newTraveledDistance = namesOfRacers.get(name) + traveledDistance;
      namesOfRacers.set(name, newTraveledDistance);
    }

    currCommand = dataArr.shift();
  }

  let tupleArrSortedDescending = Array.from(namesOfRacers.entries()).sort(
    (kvpA, kvpB) => kvpB[1] - kvpA[1]
  );

  let size = 3;
  let winners = tupleArrSortedDescending.slice(0, size);

  console.log(`1st place: ${winners[0][0]}`);
  console.log(`2nd place: ${winners[1][0]}`);
  console.log(`3rd place: ${winners[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);

race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
