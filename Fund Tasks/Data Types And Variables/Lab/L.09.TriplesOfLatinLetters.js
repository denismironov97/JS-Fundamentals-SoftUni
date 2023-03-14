function printTriplesOfLatinLetters(num){
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let letterFirst = String.fromCharCode(97 + i);
                let letterSecond = String.fromCharCode(97 + j);
                let letterThird = String.fromCharCode(97 + k);
                console.log(`${letterFirst}${letterSecond}${letterThird}`);
            }
        }
    }
}

printTriplesOfLatinLetters(3);