function passwordValidator(stringValue){
    let isLengthEnough = stringValue.length >= 6 && stringValue.length <= 10;
    let isPassConsistOfLettersAndDigits = checkIfPasswordIsLettersAndNumbersOnly(stringValue);
    let arePasswordDigitsSufficient = checkIsPassWithLeastTwoDigits(stringValue);
    
    if(isLengthEnough && arePasswordDigitsSufficient && isPassConsistOfLettersAndDigits){
        console.log('Password is valid');
    }

    if(!isLengthEnough){
        console.log('Password must be between 6 and 10 characters');
    }

    if(!isPassConsistOfLettersAndDigits){
        console.log('Password must consist only of letters and digits');
    }

    if(!arePasswordDigitsSufficient){
        console.log('Password must have at least 2 digits');
    }

    function checkIsPassWithLeastTwoDigits(numberString) {
      let digitCount = 0;
      for (const char of numberString) {
        if(isNumber(char)){
            digitCount++;
        }
      }

      return digitCount >= 2;
    }

    function checkIfPasswordIsLettersAndNumbersOnly(passwordString) {
        for (const character of passwordString) {
            if(!(isNumber(character)) && !(isLetter(character))){
                return false;
            }
        }

        return true;

        function isLetter(char) {
          return char.match(/[a-z]|[A-Z]/i);
        }
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
}

passwordValidator('logIn');
passwordValidator('Pa$s$s');
passwordValidator('MyPass123');