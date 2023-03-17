function getIfCharIsUpperOrLowerCase(character) {

    //"ABC".charCodeAt(0) // returns 65
    
    let asciiNumberOfChar = character.charCodeAt(0);
    let caseSensitive = '';

    if (asciiNumberOfChar >= 96 && asciiNumberOfChar <= 127) {
    caseSensitive = "lower-case";
    } else {
    caseSensitive = "upper-case";
    }

    console.log(caseSensitive);
}

getIfCharIsUpperOrLowerCase('L');
getIfCharIsUpperOrLowerCase('a');
getIfCharIsUpperOrLowerCase('A');
getIfCharIsUpperOrLowerCase('q');
getIfCharIsUpperOrLowerCase('R');