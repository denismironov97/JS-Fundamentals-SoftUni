function rightPlace(param1, param2, param3) {
    let word = '';
    let charToReplace = param2;
    let wordToCompare = param3;
  
    let indexOfUndescore = 0;
    for (let i = 0; i < param1.length; i++) {
      const element = param1[i];
  
      if (element === '_'){
        word += charToReplace;
      }
      else{
        word += element;
      }
    }
  
    console.log(word === wordToCompare ? 'Matched' : 'Not Matched');
}
  
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");