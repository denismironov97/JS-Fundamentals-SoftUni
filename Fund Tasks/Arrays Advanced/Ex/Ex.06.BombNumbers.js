function bombNumbers(sequence, bombData){
    let numbers = [...sequence];
    let[bomb, bombPow] = bombData;

    let index = numbers.indexOf(bomb);
    while (index !== -1) {
        let start = index - bombPow < 0 ? 0 : index - bombPow;
        numbers.splice(start, (bombPow * 2 + 1));
        index = numbers.indexOf(bomb);
    }

    let sum = 0;
    numbers.forEach(el => sum += el);

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

function bombNums(arr, specialBombNumber) {
    let [trigger, range] = specialBombNumber;
    let triggersCount = arr.filter((e) => e == trigger).length;

    for (let i = 0; i < triggersCount; i++) {
        if(arr.includes(trigger)){
            if (arr.indexOf(trigger) - range < 0) {
                let plus = arr.slice(0, arr.indexOf(trigger));
                arr.splice(0, plus.length + 1 + range);
            } 
            else {
                arr.splice(arr.indexOf(trigger) - range, 1 + range * 2);
            }
        }
    }

    return arr.reduce((a, b) => a + b, 0);
}

// console.log(bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
// console.log(bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]));
// console.log(bombNums([1, 7, 7, 1, 2, 3], [7, 1]));
// console.log(bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));