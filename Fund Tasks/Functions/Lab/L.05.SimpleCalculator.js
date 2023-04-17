function simpleCalculator(number1, number2, operator){
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    
    let resultValue = 0;
    switch (operator) {
      case "add":
        resultValue = add(number1, number2);
        break;
      case "subtract":
        resultValue = subtract(number1, number2);
        break;
      case "multiply":
        resultValue = multiply(number1, number2);
        break;
      case "divide":
        resultValue = divide(number1, number2);
        break;
      default:
        return "Error";
    }

    return resultValue;
}

console.log(simpleCalculator(5, 5, 'add'));