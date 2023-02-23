function divisibleNumber(divisor){
    let output = '';

    if (divisor % 10 === 0) {
        output = '10';
    }
    else if(divisor % 7 === 0){
        output = '7';
    }
    else if(divisor % 6 === 0){
        output = '6';
    }
    else if(divisor % 3 === 0){
        output = '3';
    }
    else if(divisor % 2 === 0){
        output = '2';
    }
    else{
        console.log('Not divisible');
        return;
    }

    console.log(`The number is divisible by ${output}`);
}

divisibleNumber(30);
divisibleNumber(15);
divisibleNumber(12);
divisibleNumber(1643);