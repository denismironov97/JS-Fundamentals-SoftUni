function convertToObjFromJSONStringFormat(jsonString) {
    let obj = JSON.parse(jsonString);

    for (const currEntry of Object.entries(obj)) {
        console.log(`${currEntry[0]}: ${currEntry[1]}`);
    }
}

convertToObjFromJSONStringFormat('{"name": "George", "age": 40, "town": "Sofia"}');