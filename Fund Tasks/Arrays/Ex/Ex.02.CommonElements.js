function commonElementsInTwoArrays(array1, array2){
    for (const elmentArray1 of array1) {
        for (const elmentArray2 of array2) {
            if(elmentArray1 === elmentArray2){
                console.log(elmentArray1);
            }
        }
    }
}

commonElementsInTwoArrays(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElementsInTwoArrays(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
