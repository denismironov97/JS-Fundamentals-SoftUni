function checkForLeapYear(intYear){
    if((intYear % 4 === 0 && intYear % 100 !== 0) || intYear % 400 === 0){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}

checkForLeapYear(1984);
checkForLeapYear(2003);
checkForLeapYear(4);