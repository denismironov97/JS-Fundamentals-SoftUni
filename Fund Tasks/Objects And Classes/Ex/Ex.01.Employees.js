function employees(employeesDataArray) {
    class Employee {
        constructor(fullName){
            this.fullName = fullName;
            this.employeeNumber = Number(fullName.length);
            this.employeeData = () => {
                return `Name: ${this.fullName} -- Personal Number: ${this.employeeNumber}`;
            }

            Employee.prototype.toString = () => {
                return `Name: ${this.fullName} -- Personal Number: ${this.employeeNumber}`;
            }
        }
    }

    let employeesCollection = [];
    for (const currEmployeeFullName of employeesDataArray) {
        let currEmployee = new Employee(currEmployeeFullName);
        employeesCollection.push(currEmployee);
    }

    //Why?
    // for (let i = 0; i < employeesCollection.length; i++) {
    //     const currEmployee = employeesCollection[i];
    //     console.log(currEmployee.toString());
    // }

    for (let employee of employeesCollection) {
        console.log(employee.employeeData());
    }

    //Why it does not work like override in C#?
    // for (let employee of employeesCollection) {
    //     console.log(employee.toString());
    // }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
);