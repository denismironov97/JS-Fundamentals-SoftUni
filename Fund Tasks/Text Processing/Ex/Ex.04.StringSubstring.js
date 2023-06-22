function stringSubstring(word, text) {
  text = text.toLowerCase().split(" "); //Important!

  if (text.includes(word.toLowerCase())) {
    return word;
  }

  return `${word} not found!`;
}

console.log(
  stringSubstring("javascript", "JavaScript is the best programming language")
);

console.log(
  stringSubstring("python", "JavaScript is the best programming language")
);

console.log(
  stringSubstring("JavaScript", "javascript is the best programming language")
);
