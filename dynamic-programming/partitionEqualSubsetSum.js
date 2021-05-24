// LeetCode #416: https://leetcode.com/problems/partition-equal-subset-sum/

// O(n^2)  
let dp = function(nums) {
  let sum = 0
  for (let num of nums) {
    sum += num
  }
  
  if (sum % 2 != 0) {
    return false
  }
  
  sum = sum / 2

  let firstSet = new Set()
  firstSet.add(0)
  for (let i = 0; i < nums.length; i++) {
    let secondSet = new Set(firstSet)
    for (let val of firstSet.values()) {
      secondSet.add(val + nums[i])
    }

    if (secondSet.has(sum)) {
      return true;
    }
    
    firstSet = secondSet
  }
  
  return false;
};

// O(2^n), trying every combination, basically just power set generation
let bruteForce = function(nums) {
  let sum = 0
  for (let num of nums) {
    sum += num
  }
  
  if (sum % 2 != 0) {
    return false
  }
  
  sum = sum / 2

  let counter = Math.pow(2, nums.length)
  //check all combinations of array
  for (let i = 0; i < counter; i++) {
    let tmpSum = 0
    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) {
        tmpSum += nums[j]
      }
    }
    
    if (tmpSum == sum) {
      return true;
    }
  }
  
  return false;
};
}

export { bruteForce, dp }
