function printCorrespondingAge(intNumber){
    let isBabyBool = intNumber >= 0 && intNumber <= 2;
    let isChildBool = intNumber >= 3 && intNumber <= 13;
    let isTeenBool = intNumber >= 14 && intNumber <= 19;
    let isAdultBool = intNumber >= 20 && intNumber <= 65;
    let isElderBool = intNumber >= 66;

    let human = '';

    if (intNumber < 0) {
        human = 'out of bounds';
    }
    else if(isBabyBool){
        human = 'baby';
    }
    else if(isChildBool){
        human = 'child';
    }
    else if(isTeenBool){
        human = 'teenager';
    }
    else if(isAdultBool){
        human = 'adult';
    }
    else if(isElderBool){
        human = 'elder';
    }

    console.log(human);
}

printCorrespondingAge(20);
printCorrespondingAge(1);
printCorrespondingAge(100);
printCorrespondingAge(0);
printCorrespondingAge(-1);