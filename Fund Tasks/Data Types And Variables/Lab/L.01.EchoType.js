function printCorrespondingType(parameter) {
    let type = typeof parameter;
    if (type === "string" || type === "number") {
        console.log(type);
        console.log(parameter);
    } else {
        console.log(type)
        console.log("Parameter is not suitable for printing");
    }
}

printCorrespondingType('Hello, JavaScript!');
printCorrespondingType(18);
printCorrespondingType(null);