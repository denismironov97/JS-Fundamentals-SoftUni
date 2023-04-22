function oddAndEvenSum(number) {
    let numString = number.toString();
    let evenSumDigit = 0;
    let oddSumDigit = 0;

    for (const digit of numString) {
        if (digit % 2 === 0) {
            evenSumDigit += Number(digit);
        } else {
            oddSumDigit += Number(digit);
        }
    }

    return `Odd sum = ${oddSumDigit}, Even sum = ${evenSumDigit}`;
}

console.log(oddAndEvenSum(1000435));