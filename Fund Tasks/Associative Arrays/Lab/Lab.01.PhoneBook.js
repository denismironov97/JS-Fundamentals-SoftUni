function phonebook(dataArray) {
    let assocArr = {};
    for (const personData of dataArray) {
        [person, number] = personData.split(' ');
        assocArr[person] = number;
    }

    /*
    //Way 1
    for (const tuple of Object.entries(assocArr)) {
        console.log(`${tuple[0]} -> ${tuple[1]}`);
    }
    */

    //Way 2
    for (const property in assocArr) {
        console.log(`${property} -> ${assocArr[property]}`);
    }
}

phonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);