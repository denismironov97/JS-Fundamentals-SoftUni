function meeting(dataArray) {
    let assocArr = {};

    for (const weekdayName of dataArray) {
        [weekday, namePerson] = weekdayName.split(' ');

        if(assocArr.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        }
        else{
            assocArr[weekday] = namePerson;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (const keyProperty in assocArr) {
        console.log(`${keyProperty} -> ${assocArr[keyProperty]}`);
    }
}

meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);