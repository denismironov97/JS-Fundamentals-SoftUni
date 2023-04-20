function addAndSubtract(number1, number2, number3){
    let sumVals = sum(number1, number2);
    let subtrcatVals = subtract(sumVals, number3);
    
    return subtrcatVals;
    
    function sum(val1, val2){
        return val1 + val2;
    }

    function subtract(sum, val3){
        return sum - val3;
    }
}

console.log(addAndSubtract(23, 6, 10));