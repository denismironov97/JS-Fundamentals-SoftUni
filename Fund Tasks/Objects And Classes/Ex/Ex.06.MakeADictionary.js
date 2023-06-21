function makeDictionary(jsonStringFormatDataArray) {
    class Dictionary {
        constructor(key, value) {
            this.key = key;
            this.value = value;
        }
    }
    
    let dictionaryColl = [];
    for (const currJSONString of jsonStringFormatDataArray) {
        let objKVP = JSON.parse(currJSONString);
        let entries =  Object.entries(objKVP)[0];
        let key = entries[0];
        let value = entries[1];

        let kvpPair = new Dictionary(key, value);

        if(dictionaryColl.some(kvp => kvp.key == key)) {
            let specificKVP = dictionaryColl.filter(kvp => kvp.key == key);
            specificKVP.value = value;
        }

        dictionaryColl.push(kvpPair);
    }

    let keys = [];
    dictionaryColl.forEach(x => keys.push(x.key));
    //keys.sort((a, b) => a.localeCompare(b));
    keys.sort();
    
    for (let keyTerm of keys) {
        let objKVP = dictionaryColl.filter(x => x.key === keyTerm)[0];
        console.log(`Term: ${keyTerm} => Definition: ${objKVP.value}`);
    }
}

function dictionary(input){
    let dict = {};
    for (let element of input){
        let obj = JSON.parse(element);
        dict = Object.assign(dict, obj);        
    } 
        
    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a, b) => a.localeCompare(b));   
     
    for (let term of sortedKeys) {
        let definition = dict[term];             
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

/*
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);
*/

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);