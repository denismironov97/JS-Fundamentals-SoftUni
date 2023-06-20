function getSmallestTwoNums(array){
    const sorterAscending = (a, b) => a - b;
    let sortedArray = array.sort(sorterAscending);

    return sortedArray.slice(0, 2).join(' ');
}

console.log(getSmallestTwoNums([30, 15, 50, 5]));