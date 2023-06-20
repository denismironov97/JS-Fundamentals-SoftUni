// function sortingBy2Criteria(arrayArgument){
//     let array = arrayArgument.slice();

//     array.sort((a, b) => a.localeCompare(b));

//     return array.join('\n');
// }

/*
function sortArray(input) {
    input.sort(twoCriteriaSort);
  
    input.forEach(el => console.log(el));

    function twoCriteriaSort(cur, next) {
      if (cur.length === next.length) {
        return cur.localeCompare(next);
      }

      return cur.length - next.length;
    }
}
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
*/

function sortAnArrayBy2Criteria(arr) {
  let sortedAlphabetically = arr.sort(); //Void Method(), reference relationship
  // console.log(sortedAlphabetically);
  let sortedByLength = sortedAlphabetically.sort((a, b) => a.length - b.length);
  console.log(sortedByLength.join(`\n`));
}
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

function solve(arr) {
  return arr
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n");
}

function sortByTwoFactors(array) {
  let newArr = array.sort((a, b) => a.localeCompare(b));
  newArr.sort((a, b) => a.length - b.length);
  console.log(newArr.join("\n"));
}
