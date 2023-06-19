function piccolo(dataArray) {
  let parking = new Set();

  for (const currCarData of dataArray) {
    [command, licensePlate] = currCarData.split(", ");

    if (command == "IN") {
      parking.add(licensePlate);
    } else {
      parking.delete(licensePlate);
    }
  }

  let sortedSet = Array.from(parking).sort();

  for (const currLicensePlate of sortedSet) {
    console.log(currLicensePlate);
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
