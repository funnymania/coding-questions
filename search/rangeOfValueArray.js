/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/// O(logn)
const searchRange = function(nums, target) {
  if (nums.length == 0) {
    return [-1,-1]
  }
  
  let lowBound = helper(nums, 0, nums.length - 1, target, -1, true)
  let highBound =     helper(nums, 0, nums.length - 1, target, -1, false)

  if (lowBound !== -1 && highBound === -1) {
    highBound = lowBound
  } else if (highBound !== -1 && lowBound === -1) {
    lowBound = highBound
  }

  return [ lowBound, highBound ]
}

const helper = function(nums, low, high, target, mark, goingLow) {
  let half
  if (goingLow) {
    half = Math.floor((low + high) / 2)
  } else {
    half = Math.ceil((low + high) / 2)
  }
  
  if (goingLow) {
    if (low === half) {
      if (nums[half] === target) {
        if (half < mark || mark === -1) {
          return half
        } else {
          return mark
        }
      }
      
      return mark
    }
  } else {
    if (high === half) {
      if (nums[half] === target) {
        if (half > mark) {
          return half
        } else {
          return mark
        }
      }
      
      return mark
    }
  }
  
  if (nums[half] > target) {
    return helper(nums, low, half, target, mark, goingLow)
  } else if (nums[half] < target) {
    return helper(nums, half, high, target, mark, goingLow)
  } else {
    if (goingLow) {
      return helper(nums, low, half, target, half, goingLow)
    } else {
      return helper(nums, half, high, target, half, goingLow)
    }
  }
}

/// O(n)
const searchRangeLinear = function(nums, target) {
  let range = []
  let high = 0
  for (let i = 0; i < nums.length; i++) {
    if (range.length == 0) {
      if (nums[i] === target) {
        range.push(i)
        high = i
      }
    } else if (nums[i] === target) {
      high = i
    }
  }
  
  if (range.length == 0) {
    return [-1, -1]
  }
  
  range.push(high)
  return range
};

export { searchRange }
