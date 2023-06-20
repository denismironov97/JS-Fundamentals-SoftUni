/*
function sorting(array){
    let arr = [];

    const ascendingSorter = (a, b) => a - b;
    const descendingSorter = (a, b) => b - a;
    
    while (array.length > 0) {
        let biggestNum = array.sort(descendingSorter).shift();
        let smallestNum = array.sort(ascendingSorter).shift();

        arr.push(biggestNum);
        arr.push(smallestNum);
    }

    return arr.join(' ');
}

console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
*/

function sorting(arrayArgument){
    let array = arrayArgument.slice();
    let arr = [];
    const ascendingSorter = (a, b) => a - b;
    
    while (array.length > 0) {
        array.sort(ascendingSorter);
        
        let biggestNum = array.pop();
        let smallestNum = array.shift();

        arr.push(biggestNum);
        arr.push(smallestNum);
    }

    //return arr.join(' ');
    console.log(arr.join(' '));
}

//console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);