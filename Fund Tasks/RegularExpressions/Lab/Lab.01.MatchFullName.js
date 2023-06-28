function matchFullName(inputStringText) {
    let regExLiteral = /\b(?<FirstName>[A-Z][a-z]+)[ ](?<LastName>[A-Z][a-z]+)\b/g;

    let matchesList = [];

    let MatchDataArr = regExLiteral.exec(inputStringText);
    while(MatchDataArr !== null) {
        matchesList.push(MatchDataArr[0]);
        MatchDataArr = regExLiteral.exec(inputStringText);
    }

    return matchesList.join(' ');
}

console.log(
    matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
);

//let matchesArr = stringVal.match(regExLiteral);