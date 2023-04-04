function addAndSubtract(numbers) {
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];

      originalSum += num;

      if (num % 2 === 0) {
        num += i;
      } else {
        num -= i;
      }

      modifiedSum += num;

      numbers[i] = num;
    }

    console.log(numbers);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
