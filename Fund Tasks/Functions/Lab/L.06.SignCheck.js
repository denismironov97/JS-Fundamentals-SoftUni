function singCheck(val1, val2, val3){
    let numbers = [val1, val2, val3];
    let negativeNumberCount = 0;
    
    for (const num of numbers) {
        if(num < 0){
            negativeNumberCount++;
        }
    }

    if(negativeNumberCount === 1 || negativeNumberCount === 3){
        return 'Negative';
    }
    else{
        return 'Positive';
    }
}

console.log(singCheck(-1, -2, -3));
console.log(singCheck(-1, -2, 3));