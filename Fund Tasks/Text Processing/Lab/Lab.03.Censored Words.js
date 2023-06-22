function censoredWords(text, wordToCensor) {
    let censorParam = '*'.repeat(wordToCensor.length);
    
    let censoredText = text.replace(wordToCensor, censorParam);
    while(censoredText.includes(wordToCensor)) {
        censoredText = censoredText.replace(wordToCensor, censorParam);
    }

    console.log(censoredText);
}

censoredWords("A small sentence with some words", "small");