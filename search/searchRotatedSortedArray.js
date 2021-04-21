/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target) {
  let low = 0
  let high = nums.length - 1
  return binSearch(nums, low, high, target)
};

const binSearch = function(nums, low, hi, target) {
  let half = Math.floor((hi + low) / 2) 

  if (nums[half] === target) {
    return half
  }

  if (low === half) {
    if (target === nums[hi]) {
      return hi
    }

    return -1
  }

  if (target < nums[half]) {
    if (nums[low] > nums[half]) {
      return binSearch(nums, low, half, target)
    } else if (target >= nums[low]) {
      return binSearch(nums, low, half, target)
    } else {
      return binSearch(nums, half, hi, target)
    }
  } else if (target > nums[half]) {
    if (nums[hi] < nums[half]) {
      return binSearch(nums, half, hi, target)
    } else if (target <= nums[hi]) {
      return binSearch(nums, half, hi, target)
    } else {
      return binSearch(nums, low, half, target)
    }
  }
}

export { search }
