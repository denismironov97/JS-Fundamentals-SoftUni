function printTotalVacationPrice(numberOfPeople, typeOfGroup, typeOfDay){
    let pricePerPerson = 0;
    
    if (typeOfDay === 'Friday') {
        if (typeOfGroup === 'Students') {
            pricePerPerson = 8.45;
        }
        else if (typeOfGroup === 'Business') {
            pricePerPerson = 10.9;
        }
        else if (typeOfGroup === 'Regular') {
            pricePerPerson = 15;
        }
    }
    else if (typeOfDay === 'Saturday') {
        if (typeOfGroup === 'Students') {
            pricePerPerson = 9.8;
        }
        else if (typeOfGroup === 'Business') {
            pricePerPerson = 15.6;
        }
        else if (typeOfGroup === 'Regular') {
            pricePerPerson = 20;
        }
    }
    else if (typeOfDay === 'Sunday') {
        if (typeOfGroup === 'Students') {
            pricePerPerson = 10.46;
        }
        else if (typeOfGroup === 'Business') {
            pricePerPerson = 16;
        }
        else if (typeOfGroup === 'Regular') {
            pricePerPerson = 22.5;
        }
    }

    let totalPrice = numberOfPeople * pricePerPerson;

    if(typeOfGroup === 'Students' && numberOfPeople >= 30){
        totalPrice *= 0.85;
    }
    else if(typeOfGroup === 'Business' && numberOfPeople >= 100){
        totalPrice = (numberOfPeople - 10) * pricePerPerson;
    }
    else if(typeOfGroup === 'Regular' && (numberOfPeople >= 100 && numberOfPeople <= 20)){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

printTotalVacationPrice(30, "Students", "Sunday");
printTotalVacationPrice(40, "Regular", "Saturday");