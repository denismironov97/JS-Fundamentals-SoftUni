function printTotalVacationPrice(numberOfPeople, typeOfGroup, typeOfDay){
    let price = 0;
    
    if(typeOfGroup === 'Students'){
        if(typeOfDay === 'Friday'){
            price = numberOfPeople * 8.45;
        }
        else if(typeOfDay === 'Saturday'){
            price = numberOfPeople * 9.8;
        }
        else if(typeOfDay === 'Sunday'){
            price = numberOfPeople * 10.46;
        }

        if(numberOfPeople >= 30){
            price *= 0.85;
        }
    }
    else if(typeOfGroup === 'Business'){
        if(numberOfPeople >= 100){
            numberOfPeople -= 10;
        }

        if(typeOfDay === 'Friday'){
            price = numberOfPeople * 10.9;
        }
        else if(typeOfDay === 'Saturday'){
            price = numberOfPeople * 15.6;
        }
        else if(typeOfDay === 'Sunday'){
            price = numberOfPeople * 16;
        }
    }
    else if(typeOfGroup === 'Regular'){
        if(typeOfDay === 'Friday'){
            price = numberOfPeople * 15;
        }
        else if(typeOfDay === 'Saturday'){
            price = numberOfPeople * 20;
        }
        else if(typeOfDay === 'Sunday'){
            price = numberOfPeople * 22.5;
        }

        if(numberOfPeople >= 10 && numberOfPeople <= 20){
            price *= 0.95;
        }
    }
    
    console.log(`Total price: ${price.toFixed(2)}`);
}

printTotalVacationPrice(30, "Students", "Sunday");
printTotalVacationPrice(40, "Regular", "Saturday");