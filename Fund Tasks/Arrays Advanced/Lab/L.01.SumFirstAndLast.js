function sumFirstAndLast(array){
    let firstElement = Number(array[0]);
    let lastElement = Number(array[array.length - 1]);

    return firstElement + lastElement;
}

function sumFirstAndLastVersion1(array){
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());

    return firstElement + lastElement;
}

console.log(sumFirstAndLast(['20', '30', '40']));