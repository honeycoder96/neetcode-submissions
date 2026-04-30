class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let right = nums.length-1;
        let left = 0, current = 0;
            while(current <= right) {
                if(nums[current] === 1) current++;
                else if(nums[current] === 0) {
                    [nums[left], nums[current]] = [nums[current], nums[left]];
                    left++;
                    current++;
                } else {
                    [nums[current], nums[right]]= [nums[right], nums[current]];
                    right--;
                }
            }
    }
}
