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
    
    //!How does this work exactly and why?
    let sortedTupleArr = Array.from(studentGradesList.entries()).sort(compareAverage);

    for (const tuplePair of sortedTupleArr) {
        console.log(`${tuplePair[0]}: ${tuplePair[1].join(', ')}`);
    }

    console.log('-------------');

    for (const kvp of studentGradesList) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

    //When you are sorting the map you need to transform it into a tuple collection array and sort the array itself.
    //When you are sorting the tuple array you are just sorting the array and NOT the Map itself, keep it in mind.

    //test it
    let foooog = Map.from()

    function compareAverage(a, b){
        let averageA = a[1].reduce((prev, curr) => prev + curr) / a[1].length;

        let averageB = b[1].reduce((prev, curr) => prev + curr) / b[1].length;

        return averageA - averageB;
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);