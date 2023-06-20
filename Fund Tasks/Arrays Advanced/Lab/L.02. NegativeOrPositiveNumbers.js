function getNegativeOrPositiveNumbers(array){
    let arrayColl = [];
    for (let i = 0; i < array.length; i++) {
        const number = array[i];

        if(number >= 0){
            arrayColl.push(number);
        }
        else{
            arrayColl.unshift(number);
        }
    }

    return arrayColl.join('\n');
}

//console.log(getNegativeOrPositiveNumbers([7, -2, 8, 9]));
console.log(getNegativeOrPositiveNumbers([3, -2, 0, -1]));