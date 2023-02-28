function printTriangleOfNums(numberN){
    for (let indexRow = 1; indexRow <= numberN; indexRow++) {
        let lineNumbers = '';
        for (let indexCol = 1; indexCol <= indexRow; indexCol++) {
            lineNumbers += indexRow + ' ';
        }
        console.log(lineNumbers);
    }
}

printTriangleOfNums(5);