function condenseAnArrayOfNumbers(numbers) {
    while (numbers.length > 1) {
      let condensedArray = Array(numbers.length - 1);
      for (let i = 0; i < numbers.length - 1; i++) {
        condensedArray[i] = Number(numbers[i]) + Number(numbers[i + 1]);
      }

      numbers = condensedArray;
    }

    console.log(numbers[0]);
}

//Recursion
function condense(nums) {
    if (nums.length === 1) {
        console.log(nums[0]);
        return;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        nums[i] = Number(nums[i]) + Number(nums[i + 1]);
    }
    nums.pop();
    condense(nums);
}

condenseAnArrayOfNumbers([2, 10, 3]);