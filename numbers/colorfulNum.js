// num is colorful if the product of each CONTIGUOUS subsequences of its digits
// is unique. 178 is NOT colorful, (1, 7, 8, 7, 56, 56). 7*8 = 1*7*8
const isColorful = (num) => {
  // Get a list of digits
  let digits = []
  let numTmp = num
  while (numTmp !== 0) {
    digits.push(numTmp % 10)
    numTmp = Math.floor(numTmp / 10)
  }

  // Reverse digits
  let start = 0
  let end = digits.length - 1
  while (start < end) {
    let tmp = digits[start]
    digits[start] = digits[end]
    digits[end] = tmp 
    start += 1
    end -= 1
  }

  // Create a prefix product
  let prefixes = []
  prefixes.push(1)
  for (let i = 0; i < digits.length; i++) {
    prefixes.push(prefixes[i] * digits[i])
  }

  // Build a hashtable from every possible product, if any products collide, return false
  // prefixes = [1, 3, 6, 36]
  let map = {}
  let windowSize = 1
  while (windowSize < prefixes.length) {
    for (let i = 0; i + windowSize < prefixes.length; i++) {
      if (map[prefixes[i + windowSize] / prefixes[i]] !== undefined) {
        return false
      } else {
        map[prefixes[i + windowSize] / prefixes[i]] = 1
      }
    }

    windowSize += 1
  }

  return true
}

console.assert(isColorful(3245) === true)
console.assert(isColorful(326) === false)
console.assert(isColorful(178) === true)
