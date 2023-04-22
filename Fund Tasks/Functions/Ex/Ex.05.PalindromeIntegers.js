function palindromeIntegers(arrayNums){
    for (let i = 0; i < arrayNums.length; i++) {
        let numString = arrayNums[i].toString();
        let numberInArrayForm = turnStringToArray(numString);
        reverseNumber(numberInArrayForm);


        let num1 = arrayNums[i];
        let num2 = Number(numberInArrayForm.join(''));

        let areNumsEqual = num1 === num2;
        console.log(areNumsEqual);
    }

    function reverseNumber(array){
        for (let i = 0; i < array.length / 2; i++) {
            let tempElement = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = tempElement;
        }
    }

    function turnStringToArray(stringValue){
        let array = [];
        for (const character of stringValue) {
            array.push(character);
        }

        return array;
    }
}

palindromeIntegers([123,323,421,121]);