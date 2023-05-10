function wordOccurances(dataArray) {
    let map = new Map();

    for (const currText of dataArray) {
        if(!map.has(currText)) {
            map.set(currText, 1);
        }
        else {
            let wordOccuranceNumber = map.get(currText);
            wordOccuranceNumber++;
            map.set(currText, wordOccuranceNumber);
        }
    }

    let sortedTupleArr = Array.from(map.entries()).sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    for (const currTuple of sortedTupleArr) {
        console.log(`${currTuple[0]} -> ${currTuple[1]} times`);
    }

    /*
    console.log('----------------------------');

    for (const kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
    */
}

wordOccurances([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);