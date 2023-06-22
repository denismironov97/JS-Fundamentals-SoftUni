function printCharacters(stringVal) {
  for (const char of stringVal) {
    console.log(char);
  }
}

printCharacters("AWord");

function printCharactersV1(stringVal) {
  let arrString = Array.from(stringVal);
  for (const char of arrString) {
    console.log(char);
  }
}

printCharactersV1("AWord");
