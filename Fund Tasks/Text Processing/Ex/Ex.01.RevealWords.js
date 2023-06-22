function revealWords(stringArg, text) {
  let wordsToReveal = stringArg.split(", ");

  let censoredWords = [];
  wordsToReveal.forEach((x) => censoredWords.push("*".repeat(x.length)));

  let textToReveal = text.toString();

  for (let i = 0; i < censoredWords.length; i++) {
    const censoredWord = censoredWords[i];

    while (textToReveal.includes(censoredWord)) {
      textToReveal = textToReveal.replace(censoredWord, wordsToReveal[i]);
      break;
    }
  }

  console.log(textToReveal);
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
