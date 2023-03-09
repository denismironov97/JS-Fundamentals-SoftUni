function printSpecialNumbers(number){
    for (let i = 1; i < number + 1; i++) {
        let numString = i.toString();
        let digitSum = 0;

        for (let j = 0; j < numString.length; j++) {
            const digitQuntity = Number(numString[j]);
            digitSum += digitQuntity;
        }

        let isNumberSpecial = digitSum === 5 || digitSum === 7 || digitSum === 11;

        let resultMessage = isNumberSpecial ? `${i} -> True` : `${i} -> False`;

        console.log(resultMessage);
    }
}

printSpecialNumbers(15);