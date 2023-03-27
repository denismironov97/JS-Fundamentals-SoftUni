function reverseAnArrayOfStrings(inputArray){
    let array = [];
    for (const element of inputArray) {
        array.push(element);
    }

    for (let i = 0; i < array.length / 2; i++) {
        const tempElement = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempElement;
    }

    let resultOutput = array.join(' ');
    console.log(resultOutput);
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);