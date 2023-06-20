function distinctArray(arrayNums){
    for (let i = 0; i < arrayNums.length; i++) {
        let number = arrayNums[i];
        for (let j = i + 1; j < arrayNums.length; j++) {
            let currNum = arrayNums[j];

            if(number === currNum){
                arrayNums.splice(j, 1);
                j -= 1;
                i -= 1;
            }
        }
    }

    return arrayNums.join(' ');
}

console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));//7 8 9 2 3 4 1