function arrayRotation(array, nTimesToRotate){
    
    function performShiftArrayToRight(array){
        let temp = array[0];
        for (i = 0; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array[array.length - 1] = temp;
    }

    let arrayResult = Array.from(array);
    
    for (let i = 0; i < nTimesToRotate; i++) {
        performShiftArrayToRight(arrayResult);
    }

    console.log(arrayResult.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);