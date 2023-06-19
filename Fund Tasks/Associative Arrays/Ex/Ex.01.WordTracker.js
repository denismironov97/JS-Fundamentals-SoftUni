function wordTracker(dataArray) {
  [text1, text2] = dataArray.shift().split(" ");
  let wordOccurrences = new Map();
  wordOccurrences.set(text1, 0);
  wordOccurrences.set(text2, 0);

  for (const currText of dataArray) {
    if (wordOccurrences.has(currText)) {
      let occurrenceCount = wordOccurrences.get(currText);
      occurrenceCount++;
      wordOccurrences.set(currText, occurrenceCount);
    }
  }

  let sortedTupleArr = Array.from(wordOccurrences.entries()).sort(
    (kvpA, kvpB) => kvpB[1] - kvpA[1]
  );

  for (const [key, value] of sortedTupleArr) {
    console.log(`${key} - ${value}`);
  }
}

function wordsTracker01(array) {
  let wantedWords = array.shift().split(" ");
  let wantedWordsCounts = {};
  wantedWords.forEach((word) => (wantedWordsCounts[word] = 0));
  array.forEach(
    (word) => word in wantedWordsCounts && wantedWordsCounts[word]++
  );
  wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
  wantedWords.forEach((word) =>
    console.log(`${word} - ${wantedWordsCounts[word]}`)
  );
}

function wordsTracker02(input) {
  let wordsToTrack = input.shift().split(" ");
  let result = new Map();

  wordsToTrack.forEach((word) => {
    result.set(word, 0);
  });

  input.forEach((item) => {
    if (result.has(item)) {
      let newVal = result.get(item);
      result.set(item, (newVal += 1));
    }
  });

  let occurrences = Array.from(result.entries());
  occurrences.sort((a, b) => Number(b[1]) - Number(a[1]));
  occurrences.forEach((occurrence) => {
    console.log(`${occurrence[0]} - ${occurrence[1]}`);
  });
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
