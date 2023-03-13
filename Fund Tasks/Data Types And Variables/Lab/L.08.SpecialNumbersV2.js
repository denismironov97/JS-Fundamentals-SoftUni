function printSpecialNumbers(number){
    for (let i = 1; i <= number; i++) {
        let digitSum = 0;

        let num = i;
        while (num > 0) {
            const digitQuntity = parseInt(num) % 10;
            digitSum += digitQuntity;
            num = parseInt(num / 10);
        }

        let isNumberSpecial = digitSum === 5 || digitSum === 7 || digitSum === 11;

        let resultMessage = isNumberSpecial ? `${i} -> True` : `${i} -> False`;

        console.log(resultMessage);
    }
}

printSpecialNumbers(15);