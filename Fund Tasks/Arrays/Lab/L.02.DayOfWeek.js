function printDayOfWeek(number){
    let indexNumber = number - 1;
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    if(indexNumber < 0 || indexNumber >= week.length){
        console.log('Invalid day!');
        return;
    }

    console.log(week[indexNumber]);
}

printDayOfWeek(3);
printDayOfWeek(6);
printDayOfWeek(11);
printDayOfWeek(0);
printDayOfWeek(-1);