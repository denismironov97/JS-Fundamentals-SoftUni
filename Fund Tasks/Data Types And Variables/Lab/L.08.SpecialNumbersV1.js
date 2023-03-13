function printSpecialNumbers(number){
    for (let i = 1; i <= number; i++) {
        let numString = i.toString();
        let digitSum = 0;

        for (let j = 0; j < numString.length; j++) {
            const digitQuntity = Number(numString[j]);
            digitSum += digitQuntity;
        }

        let isNumberSpecial = digitSum === 5 || digitSum === 7 || digitSum === 11;

        if (isNumberSpecial) {
          console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

printSpecialNumbers(15);