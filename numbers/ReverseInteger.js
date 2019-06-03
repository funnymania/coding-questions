/**
 * @param {number} x
 * @return {number}
 */
// O(log10(x))
var reverse = function (x) {
  let isNeg = false

  if (x < 0) {
    isNeg = true
    x *= -1
  }

  let result = 0
  while (x > 0) {
    let digit = x % 10
    x = Math.floor(x / 10)

    result = result * 10 + digit
  }
  if (isNeg) {
    result *= -1
  }
  return result > (2 ** 31 - 1) || result < (2 ** 31 * -1)
    ? 0
    : result;
};