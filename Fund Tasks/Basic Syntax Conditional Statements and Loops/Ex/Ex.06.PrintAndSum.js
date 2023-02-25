function sumTwoNumbers(number1, number2){
    let sum = 0;
    let stringLine = '';

    for (let i = number1; i <= number2; i++) {
        let number = i;
        sum += number;
        stringLine += number + ' ';
    }

    console.log(stringLine);
    console.log(`Sum: ${sum}`);
}

sumTwoNumbers(50, 60);
sumTwoNumbers(5, 10);
sumTwoNumbers(0, 26);