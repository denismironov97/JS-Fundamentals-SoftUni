function printSumDigits(number){
    let sumDigits = 0;
    while (number > 0) {
        let digit = number % 10;
        sumDigits += digit;
        number = parseInt(number / 10);
    }

    console.log(sumDigits);
}

printSumDigits(543);