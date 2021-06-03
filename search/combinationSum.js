/// Leetcode 39 https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// O(2**target)
const combinationSum = function(candidates, target) {
    let result = []
    findMatches(candidates, target, 0, result, [], 0)
    return result
};

const findMatches = function(list, target, sum, result, currentResult, ptr) {
    if (target == sum) {
        result.push([...currentResult])
        return
    }
    
    if (sum > target || ptr >= list.length) {
        return
    }
    
    currentResult.push(list[ptr])
    findMatches(list, target, sum + list[ptr], result, currentResult, ptr)
    currentResult.pop()
    findMatches(list, target, sum, result, currentResult, ptr + 1)
}

export { combinationSum } 
