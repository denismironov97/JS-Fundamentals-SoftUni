function getIfCharIsUpperOrLowerCase(character) {

    let characterComparer = character.toUpperCase();
    let resultMessage = '';

    if (character === characterComparer){
        resultMessage = "upper-case";
    } else {
        resultMessage = "lower-case";
    }
    
    console.log(resultMessage);
}

getIfCharIsUpperOrLowerCase('L');
getIfCharIsUpperOrLowerCase('a');
getIfCharIsUpperOrLowerCase('A');
getIfCharIsUpperOrLowerCase('q');
getIfCharIsUpperOrLowerCase('R');