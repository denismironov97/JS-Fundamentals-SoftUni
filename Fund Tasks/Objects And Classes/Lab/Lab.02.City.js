function city(cityObj) {
    const objEntries = Object.entries(cityObj);

    for (let kvp of objEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

function cityV1(cityObj) {
    for (let keyProp of Object.keys(cityObj)) {
        console.log(`${keyProp} -> ${cityObj[keyProp]}`);
    }
}

cityV1({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);


/*
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);
*/