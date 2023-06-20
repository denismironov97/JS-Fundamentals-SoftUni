function train(inputData) {
  let wagons = inputData
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let maxCapacity = Number(inputData.shift());
  let commandData = inputData.slice();

  for (const currCommand of commandData) {
    let passengerData = currCommand.split(" ");

    if (passengerData[0] === "Add") {
      let tempVal = Number(passengerData[1]);
      wagons.push(tempVal);
    } else {
      let passengers = Number(passengerData[0]);

      reallocatePassengers(passengers, maxCapacity, wagons);
    }

    function reallocatePassengers(passengersVal, maxCapVal, wagonsVal) {
      for (let i = 0; i < wagonsVal.length; i++) {
        let currWagon = wagonsVal[i];
        if (currWagon + passengersVal <= maxCapVal) {
          wagonsVal[i] += passengersVal;
          break;
        }
      }
    }
  }

  return wagons.join(" ");
}

console.log(
  train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"])
);
