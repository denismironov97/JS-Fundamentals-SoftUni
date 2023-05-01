function addressBook(dataArray) {
    let addressbook = {};

    for (const personData of dataArray) {
        [personName, address] = personData.split(':');
        addressbook[personName] = address;
    }

    let entriesAdressBook = Object.entries(addressbook);
    let sortedByKeysTupleArr = entriesAdressBook.sort((tupleA, tupleB) => {
        let keyA = tupleA[0];
        let keyB = tupleB[0];

        return keyA.localeCompare(keyB);
    });
    
    for (const tuple of sortedByKeysTupleArr) {
        console.log(`${tuple[0]} -> ${tuple[1]}`);
    }

    /*
    console.log('-----------------------------------------');
    //!Very intersing on the debugger, while debugging shows the assocArr collection sorted just like the sorted tupleArray, but prints entirely different.
    for (const key in addressbook) {
        console.log(`${key} -> ${addressbook[key]}`);
    }
    */
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);