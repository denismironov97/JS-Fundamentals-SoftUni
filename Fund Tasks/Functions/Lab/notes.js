/*
let funcExpression = function(text, nTimes){
    let result = '';
    for (let i = 0; i < nTimes; i++) {
        result += text;
    }

    return result;
}

function isNumber(char) {
  if (typeof char !== "string") {
    return false;
  }

  if (char.trim() === "") {
    return false;
  }

  return !isNaN(char);
}

console.log(isNumber('1'));
console.log(isNumber('D'));
console.log(isNumber('#'));
console.log(isNumber('4'));

//console.log(funcExpression('abc', 2));
*/

// console.log(
//   [1, 2, 3, 4].reduce((a, b) => a + b, 0)
// )
// console.log(
//   [].reduce((a, b) => a + b, 0)
// )

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15