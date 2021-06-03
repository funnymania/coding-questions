/// Leetcode 39 https://leetcode.com/problems/combination-sum/

impl Solution {
    pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        Solution::find_matches(&candidates, target, 0, &mut result, &mut Vec::new(), 0);
        result
    }
    
    fn find_matches(candidates: &Vec<i32>, target: i32, sum: i32, result: &mut Vec<Vec<i32>>, currentResult: &mut Vec<i32>, ptr: usize) {
        if sum == target {
            result.push(currentResult.to_vec());
            return;
        }
        if sum > target || ptr == candidates.len() {
            return;
        }
        
        currentResult.push(candidates[ptr]);
        Solution::find_matches(candidates, target, sum + candidates[ptr], result, currentResult, ptr);
        currentResult.pop();
        Solution::find_matches(candidates, target, sum, result, currentResult, ptr + 1);
    }
}
