function intergerOrFloat(num1, num2, num3) {
    let number = num1 + num2 + num3;
    let isIntOrFloat = number % 1 === 0;
    let resMessage = "";
  
    if (isIntOrFloat) {
      resMessage = "Integer";
    } else {
      resMessage = "Float";
    }
  
    // if (resMessage == "Float") {
    //   console.log(`${number.toFixed(1)} - ${resMessage}`);
    // }
    // else{
    //     console.log(`${number} - ${resMessage}`);
    // }
  
    console.log(`${number} - ${resMessage}`);
  }