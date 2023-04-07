function max1(arr) {
    let result = [];

    while (arr.length !== 0) {
      let [current, biggest] = [arr.shift(), Math.max(...arr)];
      if (current > biggest) {
        result.push(current);
      }
    }

    return result.join(" ");
}
//console.log(max1([14, 24, 3, 19, 15, 17]));

function maxNumber(input) {
  let arr1 = input;
  let arr2 = [];
  let maxNum = 0;

  for (let i = 0; i < arr1.length; i++) {
    maxNum = Math.max(...arr1);
    if (arr1[i] === maxNum) {
      arr2.push(maxNum);
      arr1[i] = 0;
    }
  }

  let resultArray = [...new Set(arr2)];
  console.log(resultArray.join(" "));
}
//maxNumber([1, 4, 3, 2]);
//maxNumber([14, 24, 3, 19, 15, 17]);
//maxNumber([41, 41, 34, 20]);
//maxNumber([27, 19, 42, 2, 13, 45, 48]);

function maxNum(array){
    let arr = [];
    for (let i = 0; i < array.length; i++) {
      let isBigger = true;
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] <= array[j]) {
          isBigger = false;
          break;
        }
      }

      if (isBigger) {
        arr.push(array[i]);
      }
    }

    console.log(arr.join(' '));
}
//maxNum([1, 4, 3, 2]);
//maxNum([14, 24, 3, 19, 15, 17]);
//maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);


