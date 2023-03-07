function amazingNumbers(num) {
    let sumDigits = 0;

    //let number = String(num);
    let number = num.toString();
  
    for (let i = 0; i < number.length; i++) {
      const singleDigit = Number(number[i]);
      sumDigits += singleDigit;
    }
  
    //let isAmazing = false;
    // while (sumDigits / 10 !== 0) {
    //     let lastDigitOfNumber = sumDigits % 10;
  
    //     if (lastDigitOfNumber === 9){
    //         isAmazing = true;
    //         break;
    //     }
  
    //     sumDigits /= 10;
    // }
  
    let doesNumberIncludeNine = sumDigits.toString().includes("9");
    
    if (doesNumberIncludeNine) {
      console.log(`${num} Amazing? True`);
    } else {
      console.log(`${num} Amazing? False`);
    }
}