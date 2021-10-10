const fs = require('fs')
const { lettersum } = require('./utils')
const wordList = fs.readFileSync('./enable1.txt', 'utf8').split("\n");

// Bonus challenge 1
for (const word of wordList) {
  if (lettersum(word) === 319) {
    console.log(word)
    break;
  }
}

// Bonus challenge 2
let wordsWithOddLetterSum = 0;
for (const word of wordList) {
  if (lettersum(word) % 2 !== 0) {
    wordsWithOddLetterSum += 1;
  }
}
console.log('wordsWithOddLetterSum', wordsWithOddLetterSum)

// Bonus challenge 3
const commonLetterSumMap = {};
for (const word of wordList) {
  if (commonLetterSumMap[lettersum(word)]) {
    commonLetterSumMap[lettersum(word)] += 1;
  } else {
    commonLetterSumMap[lettersum(word)] = 1;
  }
}

let highesTotal = 0;
let highestTotalKey;
for (key in commonLetterSumMap) {
  if (commonLetterSumMap[key] > highesTotal) {
    highesTotal = commonLetterSumMap[key];
    highestTotalKey = key;
  }
}

console.log(
  `lettersum ${highestTotalKey} has ${commonLetterSumMap[highestTotalKey]} entries`
);