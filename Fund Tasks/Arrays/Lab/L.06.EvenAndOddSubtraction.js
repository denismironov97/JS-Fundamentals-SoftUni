function evenAndOddSubtarction(stringArray){
    let array = [];
    for (const element of stringArray) {
        let parsedNumber = Number(element);
        array[array.length] = parsedNumber;
    }

    let sumEven = 0;
    let sumOdd = 0;
    for (const num of array) {
        if(num % 2 === 0){
            sumEven += num;
        }
        else{
            sumOdd += num;
        }
    }

    const difference = sumEven - sumOdd;

    console.log(difference);
}

evenAndOddSubtarction(['1','2','3','4','5','6']);
evenAndOddSubtarction([3,5,7,9]);