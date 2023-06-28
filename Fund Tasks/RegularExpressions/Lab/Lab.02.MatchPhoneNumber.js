function matchPhoneNumber(inputStringText) {
    //let regExPattern = /(\+359)(?<sepr>[ -])(\d)\k<sepr>(\d{3})\k<sepr>(\d{4})\b/g;
    let regExPattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    let matchCollection = [];

    let MatchDataArr = regExPattern.exec(inputStringText);
    while(MatchDataArr !== null) {
        matchCollection.push(MatchDataArr[0]);
        MatchDataArr = regExPattern.exec(inputStringText);
    }
    
    console.log(matchCollection.join(', '));
}

/*
console.log(
  matchPhoneNumber(
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
  )
);
*/

matchPhoneNumber('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222')
