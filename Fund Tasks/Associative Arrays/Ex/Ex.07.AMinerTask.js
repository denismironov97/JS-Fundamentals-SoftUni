function minersTask(dataArray) {
    let bag = new Map();//key[string] = elementType => value[int] = quantity

    for (let i = 0; i < dataArray.length; i+=2) {
        let mineralType = dataArray[i];
        let quantity = Number(dataArray[i + 1]);

        if(!bag.has(mineralType)) {
            bag.set(mineralType, quantity);
        }
        else {
            let quantityOfMineralType = bag.get(mineralType) + quantity;
            bag.set(mineralType, quantityOfMineralType);
        }
    }

    for (const kvp of bag) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

minersTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
);

console.log('----------------------------------------');

minersTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
);