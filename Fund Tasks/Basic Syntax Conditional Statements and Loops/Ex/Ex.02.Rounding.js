function roundNumber(number, precision){
    if (precision > 15) {
        precision = 15;
    }

    let formatedNumber = number.toFixed(precision);
    //1) parseFloat(number);
    const result = parseFloat(formatedNumber);
    console.log(result);
}

roundNumber(3.1415926535897932384626433832795, 2);
roundNumber(10.5, 3);