function equalSums(array){
    function leftSum(array, endIndex){
        let sum = 0;
        for (let i = 0; i < endIndex; i++) {
            const element = array[i];
            sum += element;
        }
    
        return sum;
    }
    
    function rightSum(array, startIndex){
        let sum = 0;
        for (let i = startIndex + 1; i < array.length; i++) {
            const element = array[i];
            sum += element;
        }
    
        return sum;
    }
    
    let arrRes = Array.from(array);

    for (let i = 0; i < arrRes.length; i++) {
        let sumFromTheLeft = leftSum(arrRes, i);
        let sumFromTheRight = rightSum(arrRes, i);
        
        if(sumFromTheLeft === sumFromTheRight){
            console.log(i);
            return;
        }
    }

    console.log('no');
}

//equalSums([1, 2, 3, 3]);
//equalSums([1, 2]);
//equalSums([1]);
//equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

