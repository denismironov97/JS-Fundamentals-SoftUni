function matchDates(inputStringText) {
    let regExPattern = /\b(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let matchDataArr = regExPattern.exec(inputStringText);
    while(matchDataArr !== null) {
        let day = matchDataArr.groups['day'];
        let month = matchDataArr.groups['month'];
        let year = matchDataArr.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        matchDataArr = regExPattern.exec(inputStringText);
    }
    
}

matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");