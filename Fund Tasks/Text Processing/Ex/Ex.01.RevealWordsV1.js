function revealWords01(stringArg, text) {
  let wordsToReveal = stringArg.split(", ");

  let censoredWords = [];
  wordsToReveal.forEach((x) => censoredWords.push("*".repeat(x.length)));

  let textToReveal = text.toString();

  for (let i = 0; i < censoredWords.length; i++) {
    const censoredWord = censoredWords[i];

    textToReveal = textToReveal.replace(censoredWord, wordsToReveal[i]);
  }

  console.log(textToReveal);
}

function revealWords(words, templates) {
  words = words.split(", ");

  for (const word of words) {
    let starsTemp = "*".repeat(word.length);
    templates = templates.replace(starsTemp, word);
  }

  console.log(templates);
}

/*
revealWords('great',
'softuni is ***** place for learning new programming languages'
);
*/

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
