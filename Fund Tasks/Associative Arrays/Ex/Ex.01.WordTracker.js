function wordTracker(dataArray) {
    [text1, text2] = dataArray.shift().split(' ');
    let wordOccurances = new Map();
    wordOccurances.set(text1, 0);
    wordOccurances.set(text2, 0);

    for (const currText of dataArray) {
        if(wordOccurances.has(currText)) {
            let occuranceCount = wordOccurances.get(currText);
            occuranceCount++;
            wordOccurances.set(currText, occuranceCount);
        }
    }

    let sortedTupleArr = Array.from(wordOccurances.entries()).sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    for (const [key, value] of sortedTupleArr) {
        console.log(`${key} - ${value}`);
    }
}

function wordsTracker01(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
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
    
    let occurances = Array.from(result.entries());
    occurances.sort((a, b) => Number(b[1]) - Number(a[1]));
    occurances.forEach((occurance) => {
      console.log(`${occurance[0]} - ${occurance[1]}`);
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
  "occurances",
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
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);