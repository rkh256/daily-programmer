/**
 * @param {String} letter 
 * @returns {Number}
 */
 const getLetterValue = letter => {
  const OFFSET = 96; // lowercase charAtCode is 97 
  if (letter === "") {
    return 0;
  }
  return letter.charCodeAt(0) - OFFSET;
};

/**
 * @param {Array} word
 * @returns {Number} 
 */
const lettersum = (word) => {
  return word.split("").reduce((prev, curr) => {
    return prev + getLetterValue(curr);
  }, 0)
}

module.exports = {
  lettersum 
}