// LC238 https://leetcode.com/problems/product-of-array-except-self/

impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let mut prefix = Vec::new();
        let mut postfix = Vec::new();
        
        prefix.push(nums[0]);
        postfix.push(nums[nums.len() - 1]);
        for i in 1..nums.len() {
            prefix.push(prefix[i - 1] * nums[i]);
            postfix.insert(0, postfix[0] * nums[nums.len() - 1 - i]);
        }
        
        let mut result = Vec::new();
        for i in 0..nums.len() {
            if i == 0 {
                result.push(postfix[i + 1]);
            } else if i == nums.len() - 1 {
                result.push(prefix[i - 1]);
            } else {
                result.push(prefix[i - 1] * postfix[i + 1]);
            }
        }
        
        result
    }
}
