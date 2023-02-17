function printOddNumbersToN(numberN){
    let counter = 0;
    let sumOfOddNumbers = 0;

    let number = 1;
    while (counter !== numberN) {
        if(number % 2 !== 0){
            console.log(number);
            sumOfOddNumbers += number;
            counter++;
        }

        number++;
    }

    console.log(`Sum: ${sumOfOddNumbers}`);
}

printOddNumbersToN(5);
printOddNumbersToN(3);