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
        false
    }
}
