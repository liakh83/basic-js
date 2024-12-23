const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const stringNumber = n.toString();
  let maxValue = 0;
  for (let i = 0; i < stringNumber.length; i += 1) {
    const digit = parseInt(stringNumber.slice(0, i) + stringNumber.slice(i + 1), 10);
    if (digit > maxValue) {
      maxValue = digit;
    }
  }
  return maxValue
}

module.exports = {
  deleteDigit
};
