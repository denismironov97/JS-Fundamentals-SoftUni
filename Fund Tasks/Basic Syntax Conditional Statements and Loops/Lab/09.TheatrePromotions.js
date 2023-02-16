function printTicketCost(dayOfWeek, ageOfPerson) {
    let isPersonMinor = ageOfPerson >= 0 && ageOfPerson <= 18;
    let isPersonAdult = ageOfPerson > 18 && ageOfPerson <= 64;
    let isPersonGrandAdult = ageOfPerson > 64 && ageOfPerson <= 122;

    let costOfTicket = 0;

    if (isPersonMinor) {
        if (dayOfWeek === 'Weekday') {
            costOfTicket = 12;
        }
        else if (dayOfWeek === 'Weekend') {
            costOfTicket = 15;
        }
        else {
            costOfTicket = 5;
        }
    }
    else if (isPersonAdult) {
        if (dayOfWeek === 'Weekday') {
            costOfTicket = 18;
        }
        else if (dayOfWeek === 'Weekend') {
            costOfTicket = 20;
        }
        else {
            costOfTicket = 12;
        }
    }
    else if (isPersonGrandAdult) {
        if (dayOfWeek === 'Weekday') {
            costOfTicket = 12;
        }
        else if (dayOfWeek === 'Weekend') {
            costOfTicket = 15;
        }
        else {
            costOfTicket = 10;
        }
    }
    else {
        console.log('Error!');
        return;
    }

    console.log(`${costOfTicket}$`);
}

printTicketCost('Weekday', 42);