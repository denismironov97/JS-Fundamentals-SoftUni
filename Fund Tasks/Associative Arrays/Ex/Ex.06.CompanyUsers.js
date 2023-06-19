function companyUsers(dataArray) {
    let companyEmployees = new Map();

    for (const companyEmployeeData of dataArray) {
        [company, employeeID] = companyEmployeeData.split(' -> ');
        
        if(!companyEmployees.has(company)) {
            companyEmployees.set(company, new Set().add(employeeID));
        }
        else {
            let refPoint = companyEmployees.get(company);
            refPoint.add(employeeID);
        }
    }

    let sortedByKeyTuple = Array.from(companyEmployees.entries()).sort();

    for (const [key, value] of sortedByKeyTuple) {
        console.log(key);
        value.forEach(x => console.log(`-- ${x}`));
    }
}

/*
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
);
*/

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
);