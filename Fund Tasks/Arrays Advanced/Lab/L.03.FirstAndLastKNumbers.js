function firstAndLastKNumbers(array) {
  let kNumber = array.shift();
  let firstKElements = array.slice(0, kNumber);
  let lastKElements = array.slice(array.length - kNumber, array.length);

  let stringResult = firstKElements.join(" ") + "\n" + lastKElements.join(" ");
  return stringResult;
}

console.log(firstAndLastKNumbers([2, 7, 8, 9]));
console.log("----");
console.log(firstAndLastKNumbers([3, 6, 7, 8, 9]));
