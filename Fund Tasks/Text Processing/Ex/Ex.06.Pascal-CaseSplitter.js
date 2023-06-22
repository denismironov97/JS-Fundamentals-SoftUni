function pascalCaseSplitter(stringVal) {
  let coll = [];

  for (let i = 0; i < stringVal.length; i++) {
    let charCodeOfCurrSymbol = stringVal.charCodeAt(i);
    let startIndex = 0;
    let endIndex = 0;

    if (charCodeOfCurrSymbol >= 65 && charCodeOfCurrSymbol <= 90) {
      startIndex = i;

      for (let j = i + 1; j < stringVal.length; j++) {
        let charCode = stringVal.charCodeAt(j);

        if (charCode >= 65 && charCode <= 90) {
          endIndex = j;
          let pascalWord = stringVal.substring(startIndex, endIndex);
          coll.push(pascalWord);
          stringVal = stringVal.replace(pascalWord, "");

          i = -1;
          break;
        }
      }
    }
  }

  let lastPascalString = stringVal.toString();
  coll.push(lastPascalString);

  return coll.join(", ");
}

console.log(pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan"));

console.log(pascalCaseSplitter("HoldTheDoor"));

console.log(pascalCaseSplitter("ThisIsSoAnnoyingToDo"));
