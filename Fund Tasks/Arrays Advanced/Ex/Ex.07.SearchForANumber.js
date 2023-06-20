function searchForNumber(sequence, arrData) {
  let [sliceCount, deletionCount, searchNumber] = arrData;
  let array = sequence.slice(0, sliceCount);
  array.splice(0, deletionCount);
  let countOfOccurrence = 0;
  array.forEach((x) =>
    x == searchNumber
      ? countOfOccurrence++
      : (countOfOccurrence = countOfOccurrence)
  );

  return `Number ${searchNumber} occurs ${countOfOccurrence} times.`;
}

console.log(searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]));
