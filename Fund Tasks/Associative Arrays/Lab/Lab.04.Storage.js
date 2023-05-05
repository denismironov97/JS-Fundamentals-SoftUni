//AssocArr
function storage(dataArray) { 
    let assocArr = {};

    for (const productData of dataArray) {
        [prodName, quantity] = productData.split(' ');
        quantity = Number(quantity);

        if(assocArr.hasOwnProperty(prodName)){
            assocArr[prodName] += quantity;
        }
        else {
            assocArr[prodName] = quantity;
        }
    }

    for (const key in assocArr) {
        console.log(`${key} -> ${assocArr[key]}`);
    }
}

/*
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);
*/

function storageV1(dataArray) {
    let storage = new Map();

    for (const productData of dataArray) {
        [prodName, quantity] = productData.split(' ');
        quantity = Number(quantity);

        if(!storage.has(prodName)){
            storage.set(prodName, quantity);
        }
        else {
            let currQuantity = storage.get(prodName);
            let newQuantity = currQuantity + quantity;
            storage.set(prodName, newQuantity);
        }
    }

    for (const kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storageV1(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);

