function processOddNumbers(arrayNums){
    let array = [];
    for (let i = 0; i < arrayNums.length; i++) {
        const element = arrayNums[i];
        if(i % 2 !== 0){
            array.unshift(element);
        }
    }

    array = array.map(x => x * 2);

    return array.join(' ');
}

function processOddNumbers01(arrayNums){
    let array = [];
    for (let i = 0; i < arrayNums.length; i++) {
        const element = arrayNums[i];
        if(i % 2 !== 0){
            array.push(element);
        }
    }

    array.reverse();
    array = array.map(x => x * 2);
    return array.join(' ');
}

console.log(processOddNumbers01([10, 15, 20, 25]));