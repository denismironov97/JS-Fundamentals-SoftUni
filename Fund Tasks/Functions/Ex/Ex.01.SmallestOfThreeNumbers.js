function smallestOfThreeNumbers(number1, number2, number3){
    let smallestNumber = number1;

    if(smallestNumber > number2){
        smallestNumber = number2;
    }

    if(smallestNumber > number3){
        smallestNumber = number3;
    }

    return smallestNumber;
}

//console.log(smallestOfThreeNumbers(2, 5, 3));
//console.log(smallestOfThreeNumbers(33, 5, 3));
console.log(smallestOfThreeNumbers(33, -1, 3));