function printResult(){
    for (let index = 1; index <= 100; index++) {
        let number = index;
        
        if (number % 3 === 0) {
            console.log(number);
        }
    }
}

printResult();