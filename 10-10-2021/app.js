const { getRandomInt, createMatrix, getLowestValueIndex } = require('./utils');
const mockData = require('./mockData')
const ROWS = 5;
const COLS = 5;
const RAND_MIN = 100000;
const RAND_MAX = 1000000;
// const matrixData = createMatrix(ROWS, COLS, () => getRandomInt(RAND_MIN, RAND_MAX))

// console.log(mockData)

const lowestIndexes = [];
const excludedIndexes = [];

// mockData.forEach(row => {
//   const lowestIndex = getLowestValueIndex(row, excludedIndexes)
//   excludedIndexes.push(lowestIndex)
//   lowestIndexes.push(lowestIndex)
// })

for (let rowIndex = 0; rowIndex < mockData.length; rowIndex++) {
  for(let colIndex = 0; colIndex < mockData[rowIndex].length; colIndex++) {
    console.log(mockData[rowIndex][colIndex])
  }
}

