// LeetCode #416: https://leetcode.com/problems/partition-equal-subset-sum/

use std::collections::HashSet;

impl Solution {
    pub fn can_partition(nums: Vec<i32>) -> bool {
        let mut sum = 0;
        for num in nums.iter() {
            sum += num;
        }
        
        if sum % 2 != 0 {
            return false;
        }
        
        sum /= 2;
        
        let mut first_set = HashSet::new();
        first_set.insert(0);
        for i in 0..nums.len() {
            let mut second_set = HashSet::new();
            for val in first_set.iter() {
                second_set.insert(val + nums[i]);
            }
            
            if second_set.contains(&sum) {
                return true;
            }
            
            for val in second_set.iter() {
                first_set.insert(*val);
            }
        }
        
        false
    }
  
    pub fn brute_force(nums: Vec<i32>) -> bool {
        let mut sum = 0;
        for num in nums.iter() {
            sum += num;
        }
        
        if sum % 2 != 0 {
            return false;
        }
        
        sum /= 2;
        
        let counter = u32::pow(2, u32::try_from(nums.len()).unwrap());
        // Check all combinations
        for i in 0..counter {
            let mut tmpSum = 0;
            for j in 0..nums.len() {
                if i & (1 << j) != 0 {
                    tmpSum += nums[j];
                }
            }
            
            if tmpSum == sum {
                return true;
            }
        }
        
        false
    }
}
