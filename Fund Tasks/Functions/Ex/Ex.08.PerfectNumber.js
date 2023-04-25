function perfectnumber(num){
    let divisorCollection = [];
    for (let i = 1; i < num; i++) {
        if(num % i === 0){
            divisorCollection.push(i);
        }
    }

    const reducer = (previousValue, currentVal) => previousValue + currentVal;
    const sumOfElements = divisorCollection.reduce(reducer);

    let outputMessage = sumOfElements === num ? 'We have a perfect number!' : 'It\'s not so perfect.';

    return outputMessage;
}

console.log(perfectnumber(1236498));
console.log(perfectnumber(6));