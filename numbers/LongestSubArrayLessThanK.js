const assert = require('assert')

/**
 * Takes an array and int, finds longest subarray summing to <= k
 * arr contains integers from -infinity to +infinity
 * 
 * O(n^2)
 */
// TODO: Linear solution using begin and end markers for indices, and incrementing / 
// decrementing them as numbers fit the constraint (<= k)
let longestSubarray = (arr, k) => {
  let curLength = arr.length
  let curSum

  for (let i = 0; i < curLength; curLength -= 1) {
    for (let j = 0; j + curLength < arr.length; j += 1) {
      let curArr = arr.slice(j, j + curLength)
      curArr.forEach((el) => {
        curSum += el
      })

      if (curSum < k) {
        return curArr
      }

      curSum = 0
    }
  }
  
  // No value sums to less than k
  return []
}

let result = longestSubarray([9,-2,4,8], 5) 
console.table(result)
assert.deepEqual(result, [-2, 4])

result = longestSubarray([-19, 8, 0, 100, 70, -43], 30)
assert.deepEqual(result, [-19, 8, 0])

module.export = {
  longestSubarray
}
