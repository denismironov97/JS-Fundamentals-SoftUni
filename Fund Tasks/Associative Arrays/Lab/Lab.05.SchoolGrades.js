function schoolGrades(dataArray) {
    let studentGradesList = new Map();

    for (const personData of dataArray) {
        let personNameGrades = personData.split(' ');
        let name = personNameGrades[0];
        let grades = personNameGrades.splice(1, personNameGrades.length - 1).map(x => Number(x));
        
        if(!studentGradesList.has(name)){
            studentGradesList.set(name, grades);
        }
        else {
            let studentGrades = studentGradesList.get(name);//Given the fact it's value of the Map is an array(reference data type) 
            //You are basically getting the referance point to the array itself in the Heap

            for (const currGrade of grades) {
                studentGrades.push(currGrade);
            }
        }
    }

    let studentNameAverageGrade = new Map();
    for (const kvp of studentGradesList) {
        let gradeList = kvp[1];
        let averageGrade = gradeList.reduce((prev, curr) => prev + curr) / gradeList.length;

        studentNameAverageGrade.set(kvp[0], averageGrade);
    }

    let sortedTupleArr = Array.from(studentNameAverageGrade.entries())
    .sort((a, b) => a[0].localeCompare(b[0]));

    /*
    for (const tuple of sortedByKeysTupleArr) {
        let key = tuple[0];
        let gradeList = studentGradesList.get(key);
        console.log(`${key}: ${gradeList.join(', ')}`);
    }
    */

    for (const tuple of sortedTupleArr) {
        console.log(`${tuple[0]}: ${tuple[1].toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);