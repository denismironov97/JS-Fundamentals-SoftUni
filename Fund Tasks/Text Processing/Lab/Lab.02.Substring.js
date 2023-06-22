function substringV1(stringVal, startIndex, countOfElementsToTake) {
  let endIndex = startIndex + countOfElementsToTake;
  let substring = stringVal.substring(startIndex, endIndex);
  console.log(substring);
}

substringV1("ASentance", 1, 8);

function subStrLegacy(stringVal, startIndex, countOfElementsToTake) {
  let substring = stringVal.substr(startIndex, countOfElementsToTake);
  console.log(substring);
}

subStrLegacy("ASentance", 1, 8);

/*
function substringV2(stringVal, startIndex, countOfElementsToTake) {
    let endIndex = startIndex + countOfElementsToTake;
    let substring = stringVal.substring(startIndex, endIndex);
    return substring;
}

let subStr = substringV2("ATest", 1, 20);
let isEqual = 'Test' === subStr;
console.log(isEqual);
*/
