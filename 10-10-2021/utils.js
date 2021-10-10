/**
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
const getRandomInt = (min, max) => {
  const currMin = Math.ceil(min);
  const currMax = Math.floor(max);
  return Math.floor(
    Math.random() * (currMax - currMin) + currMin
  );
}

/**
 * 
 * @param {Number} rows 
 * @param {Number} cols 
 * @param {Function} fn
 * @returns {Array}
 */
const createMatrix = (rows, cols, fn) => {
  const matrix = [];

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    matrix.push([])
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      matrix[rowIndex].push(fn())
    }
  }

  return matrix;
}

/**
 * 
 * @param {Array} numbers 
 * @returns 
 */
const getLowestValueIndex = (numbers, excludedIndexes) => {
  let lowestNumber = numbers[0];
  let indexOfLowestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowestNumber && !excludedIndexes.some(v => v === i)) {
      lowestNumber = numbers[i];
      indexOfLowestNumber = i;
    }
  }

  return indexOfLowestNumber
}

module.exports = {
  getRandomInt,
  createMatrix,
  getLowestValueIndex
}
