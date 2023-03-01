function printLogin(arrayString){
    let username = arrayString[0];
    let password = '';

    for (let index = username.length - 1; index >= 0; index--) {
        let symbol = username[index];
        password += symbol;
    }

    let counter = 1;
    for (let index = 1; index < arrayString.length; index++) {
        let wordString = arrayString[index];

        if (password === wordString) {
            console.log(`User ${username} logged in.`);
            break;
        }
        else {
            if (counter === 4) {
                console.log(`User ${username} blocked!`);
                break;;
            }
            console.log('Incorrect password. Try again.');
            counter++;
        }
    }
}

printLogin(['Acer','login','go','let me in','recA']);
//printLogin(['momo','omom']);
//printLogin(['sunny','rainy','cloudy','sunny','not sunny']);