function oddOccurrences(stringData) {
    let wordArr = stringData.split(' ').map(x => x.toLowerCase());
    let wordTracker = new Map();

    for (const word of wordArr) {
        if(!wordTracker.has(word)) {
            wordTracker.set(word, 1);
        }
        else {
            let wordOccurrenceCount = wordTracker.get(word);
            wordOccurrenceCount++;
            wordTracker.set(word, wordOccurrenceCount);
        }
    }

    let tupleArr = Array.from(wordTracker.entries()).filter(t => t[1] % 2 !== 0);
    
    let stringBuilder = [];
    tupleArr.forEach(tuple => stringBuilder.push(tuple[0]));
    
    console.log(stringBuilder.join(' '));
}

//oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');