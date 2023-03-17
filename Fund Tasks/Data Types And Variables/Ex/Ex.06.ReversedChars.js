function reversedChars(arg1, arg2, arg3){
    console.log(`${arg3} ${arg2} ${arg1}`);
}

function reversedCharsV1(arg1, arg2, arg3){
    let array = [arg1, arg2, arg3];

    for (let i = 0; i < parseInt(array.length / 2); i++) {
        let tempElement = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempElement;
    }

    console.log(array.join(' '));
}

reversedCharsV1('A', 'B', 'C');

function reversedCharsV2(arg1, arg2, arg3){
    let array = [arg1, arg2, arg3];

    for (let i = 0; i < array.length / 2; i++) {
        let tempElement = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = tempElement;   
    }

    console.log(array.join(' '));
}

reversedCharsV2('A', 'B', 'C');