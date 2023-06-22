function countStringOccurrences(text, stringVal) {
  let occurrenceCount = 0;

  for (const word of text.split(" ")) {
    if (word === stringVal) {
      occurrenceCount++;
    }
  }

  console.log(occurrenceCount);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
