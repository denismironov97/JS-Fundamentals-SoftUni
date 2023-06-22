function replaceRepeatingChars(word) {
  let countOfSymbolOccurrence = 1;
  for (let i = 1; i < word.length; i++) {
    let prevChar = word[i - 1];
    let currChar = word[i];
    let tempConcat = "";

    if (prevChar === currChar) {
      countOfSymbolOccurrence++;
      tempConcat = prevChar + currChar;
    }

    if (countOfSymbolOccurrence > 1) {
      word = word.replace(tempConcat, currChar);
      countOfSymbolOccurrence = 1;
      i = -1;
    }
  }

  return word;
}

console.log(replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa"));

console.log(replaceRepeatingChars("qqqwerqwecccwd"));
