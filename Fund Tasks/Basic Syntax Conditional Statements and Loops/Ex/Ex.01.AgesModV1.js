function ageToPrice(typeDay, age) {
    let isOld = age > 64 && age <= 122; 
    let isMidAge = age > 18 && age <= 64;
    let isKid = age >= 0 && age <= 18;
    let prices = {'Weekday' : ['12$', '18$', '12$'], 'Weekend' : ['15$', '20$', '15$'], 'Holiday' : ['5$', '12$', '10$'] };

    return isOld ? prices[typeDay][2] : isMidAge ? prices[typeDay][1] : isKid ? prices[typeDay][0] : 'Error!';
}