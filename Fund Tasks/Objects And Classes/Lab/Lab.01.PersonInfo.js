function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

//console.log(personInfo('Pesho', 'Peshovski', 25));

function personInfoV1(firstName, lastName, age) {
    let person = {};
    person['firstName'] = firstName;
    person['lastName'] = lastName;
    person['age'] = age;

    return person;
}


function personObjLiteral(firstName, lastName, age) {
    let person = {firstName: firstName, lastName: lastName, age: age};
    return person;
}

function personInformation(firstName, lastName, age) {
    let person = personCreator();

    return person;

    function personCreator() {
        class Person {
            constructor(firstNameArg, lastNameArg, ageArg) {
                this.firstName = firstNameArg;
                this.lastName = lastNameArg;
                this.age = ageArg;
            }
        }
        
        let person = new Person(firstName, lastName, age);

        return person;
    }
}

console.log(personInformation('Pesho', 'Peshovski', 29));

