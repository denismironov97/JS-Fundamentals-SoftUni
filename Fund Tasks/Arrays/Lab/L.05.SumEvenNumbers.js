function evenAndOddSubtarction(stringArray){
    let array = [];
    for (const element of stringArray) {
        let parsedNumber = Number(element);
        array[array.length] = parsedNumber;
    }

    let sum = 0;
    for (const num of array) {
        if(num % 2 === 0){
            sum += num;
        }
    }

    console.log(sum);
}

evenAndOddSubtarction(['1','2','3','4','5','6']);