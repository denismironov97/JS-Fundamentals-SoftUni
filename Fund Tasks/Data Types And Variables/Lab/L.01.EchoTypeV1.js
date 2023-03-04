function printCorrespondingType(argument){
    let outputType = typeof(argument);

    if(outputType == 'object'){
        console.log(outputType);
        console.log('Parameter is not suitable for printing');
        return;
    }

    console.log(outputType);
    console.log(argument);
}

printCorrespondingType('Hello, JavaScript!');
printCorrespondingType(18);
printCorrespondingType(null);