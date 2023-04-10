function maxSequenceOfEqualElements(sequenceInput){
    let identicalNumsLength = 1;
    let maxSequenceOfIdenticalNums = 1;
    let startIndex = 0;
    let currSequenceStartIndex = 0;

    for (let i = 1; i < sequenceInput.length; i++) {
      let previusNum = sequenceInput[i - 1];
      let currNum = sequenceInput[i];

      if (previusNum === currNum) {
        identicalNumsLength++;
      } else {
        identicalNumsLength = 1;
        currSequenceStartIndex = i;
      }

      if (identicalNumsLength > maxSequenceOfIdenticalNums) {
        maxSequenceOfIdenticalNums = identicalNumsLength;
        startIndex = currSequenceStartIndex;
      }
    }

    let output = '';
    for (let i = startIndex; i < startIndex + maxSequenceOfIdenticalNums; i++) {
        output += sequenceInput[i] + ' ';
    }

    console.log(output);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);