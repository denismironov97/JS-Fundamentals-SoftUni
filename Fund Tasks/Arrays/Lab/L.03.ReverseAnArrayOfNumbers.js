function reverseAnArrayOfNElements(n, inputArray){
    let resultArray = [];

    for (let i = 0; i < n; i++) {
        resultArray.push(inputArray[i]);
    }

    for (let i = 0; i < resultArray.length / 2; i++) {
        const tempElement = resultArray[i];
        resultArray[i] = resultArray[(resultArray.length - 1) - i];
        resultArray[(resultArray.length - 1) - i] = tempElement;
    }

    console.log(resultArray.join(' '));
}

reverseAnArrayOfNElements(3, [10, 20, 30, 40, 50]);