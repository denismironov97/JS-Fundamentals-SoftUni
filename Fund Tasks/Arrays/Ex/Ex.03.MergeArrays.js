function mergeArrays(arrayString1, arrayString2){
    let resultArray = [];
    for (let i = 0; i < arrayString1.length; i++) {
        let element1 = arrayString1[i];
        let element2 = arrayString2[i];
        
        if(i % 2 === 0){
            element1 = Number(element1);
            element2 = Number(element2);
        }

        let tempSumOfElements = element1 + element2;

        resultArray.push(tempSumOfElements);
    }

    let resultString = resultArray.join(' - ');

    console.log(resultString);
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);