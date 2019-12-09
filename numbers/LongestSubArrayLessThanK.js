const assert = require('assert')

/**
 * Takes an array of int and an int, finds longest subarray summing to <= k.
 * arr contains integers from -infinity to +infinity. k is a positive integer.
 * 
 * O(n^2)
 */
let longestSubarray = (arr, k) => {
  let curLength = arr.length
  let curSum = 0
  let prefixSum = []

  // Generate prefix sums
  arr.forEach(el => {
    prefixSum.push(curSum)
    curSum += el
  })
  prefixSum.push(curSum)

  curSum = 0
  for (let i = 0; i < curLength; curLength -= 1) {
    for (let j = 0; j + curLength <= arr.length; j += 1) {
      let curSum = prefixSum[j + curLength] - prefixSum[j]

      if (curSum < k) {
        return arr.slice(j, j + curLength)
      }

      curSum = 0
    }
  }
  
  // No value sums to less than k
  return []
}

let result = longestSubarray([9,-2,4,8], 5) 
assert.deepEqual(result, [-2, 4])

result = longestSubarray([-19, -800, 8000000, -100, -70, -4300], 30)
assert.deepEqual(result, [-100, -70, -4300])

result = longestSubarray([0, 0, -80, 82, 0, -4300], 1)
assert.deepEqual(result, [0, 0, -80, 82, 0, -4300])
console.table(result)

module.export = {
  longestSubarray
}
