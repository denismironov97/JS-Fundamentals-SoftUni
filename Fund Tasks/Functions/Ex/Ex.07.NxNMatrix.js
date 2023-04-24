function printMatrix(nNum){
    for (let row = 0; row < nNum; row++) {
        let rowLine = '';
        for (let col = 0; col < nNum; col++) {
            rowLine += nNum + ' ';
        }

        console.log(rowLine);
    }
}

printMatrix(7);