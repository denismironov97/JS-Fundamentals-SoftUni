function calculateNumbers(number1, operator, number2){
    let result = 0;
    
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        result = 0;
        break;
    }

    result = result.toFixed(2);
    return result;
}

console.log(calculateNumbers(5, '+', 10));
console.log(calculateNumbers(25.5, '-', 3));