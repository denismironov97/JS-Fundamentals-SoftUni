function sumFirstAndLastElement(params){
    let firstNumber = params[0];
    let lastNumber = params[params.length - 1];
    let sum = firstNumber + lastNumber;
    return sum;
}

console.log(sumFirstAndLastElement([20, 30, 40]));