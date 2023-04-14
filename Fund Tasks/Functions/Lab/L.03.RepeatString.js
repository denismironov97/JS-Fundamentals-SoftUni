let funcExpression = function(text, nTimes){
    let result = '';
    for (let i = 0; i < nTimes; i++) {
        result += text;
    }

    return result;
}

function concatenateText (text, nTimes){
    let result = '';
    
    for (let i = 0; i < nTimes; i++) {
        result += text;
    }

    return result;
}

console.log(funcExpression('abc', 2));