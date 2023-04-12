function getGrade(grade){
    let gradeMessage = '';
    
    if(grade < 3){
        return `Fail (${2})`;
    }
    else if(grade >= 3 && grade < 3.50){
        gradeMessage = 'Poor';
    }
    else if(grade >= 3.50 && grade < 4.50){
        gradeMessage = 'Good';
    }
    else if(grade >= 4.50 && grade < 5.50){
        gradeMessage = 'Very good';
    }
    else if(grade >= 5.50 && grade <= 6){
        gradeMessage = 'Excellent';
    }
    else{
        return 'Error';
    }

    return `${gradeMessage} (${formatGrade(grade)})`;

    function formatGrade(value) {
        return value.toFixed(2);
    }
}

//let result = getGrade(3.33);
//let result = getGrade(2.99);
let result = getGrade(6.00);
console.log(result);