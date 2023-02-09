function excellentGrade(number){
    
    let isGradeExcellent = number >= 5.50;

    if (isGradeExcellent) {
        console.log('Excellent');
    }
    else {
        console.log('Not excellent');
    }
}

excellentGrade(5.50);
excellentGrade(6.00);

excellentGrade(-5.30);
excellentGrade(-15);
excellentGrade(2.53333);

excellentGrade(4.00);
excellentGrade(4.70);