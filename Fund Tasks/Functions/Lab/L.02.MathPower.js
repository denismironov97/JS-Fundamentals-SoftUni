function getMathPow(num, nPow){
    let number = 1;
    for (let i = 0; i < nPow; i++) {
        number *= num;
    }

    return number;
}

let getMathPowFunc = (num, power) => Math.pow(num, power);

let result = getMathPow(2, 8);
console.log(result);

console.log(getMathPowFunc(2, 8));