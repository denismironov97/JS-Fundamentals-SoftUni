function convertObjToJSONStringFormat(firstName, lastName, hairColor) {
    let person = {name: firstName, lastName: lastName, hairColor: hairColor};
    let jsonStringFormatOfObj = JSON.stringify(person);
    
    return jsonStringFormatOfObj;
}

console.log(convertObjToJSONStringFormat('George',
'Jones',
'Brown'
));