function arrayManipulations(inputDataArray) {
    let arrayNumbers = inputDataArray
    .shift()
    .split(" ")
    .map((element) => Number(element));
    let commandsArray = inputDataArray;

    for (const commandData of commandsArray) {
      let commandParts = commandData.split(" ");
      const instruction = commandParts[0];
      let value = Number(commandParts[1]);

      if (instruction === "Add") {
        arrayNumbers.push(value);
      } else if (instruction === "Remove") {
        //arrayNumbers = arrayNumbers.filter((x) => x !== value);
        removeAll(arrayNumbers, value);
      } else if (instruction === "RemoveAt") {
        let index = value;
        arrayNumbers.splice(index, 1);
      } else if (instruction === "Insert") {
        let index = Number(commandParts[2]);
        arrayNumbers.splice(index, 0, value);
      }
    }

    function removeAll(array, element){
        let index = array.indexOf(element);
        while (index > -1) {
            array.splice(index, 1);
            index = array.indexOf(element);
        }
    }

    return arrayNumbers.join(' ');
}

console.log(arrayManipulations(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3",]));