function charactersInRange(char1, char2){
    let asciiCodeOfChar1 = char1.charCodeAt(0);//!
    let asciiCodeOfChar2 = char2.charCodeAt(0);

    let characters = [];

    if(asciiCodeOfChar1 <= asciiCodeOfChar2){
        for (let i = asciiCodeOfChar1 + 1; i <= asciiCodeOfChar2 - 1; i++) {
            const character = String.fromCharCode(i);//!
            characters.push(character);
        }
    }
    else{
        for (let i = asciiCodeOfChar2 + 1; i <= asciiCodeOfChar1 - 1; i++) {
            const character = String.fromCharCode(i);//!
            characters.push(character);
        }
    }

    const charactersString = characters.join(' ');
    return charactersString;
}

//console.log(charactersInRange('a', 'd'));
//console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));