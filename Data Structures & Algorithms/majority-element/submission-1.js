class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        if(nums.length === 1) return nums[0];
        const majority = Math.floor(nums.length / 2) + 1;
        const freqMap = new Map();

        for(let i=0; i < nums.length ; i++) {
            if(freqMap.has(nums[i])){
                const current = freqMap.get(nums[i]);
                if(current + 1 === majority) return nums[i];
                else freqMap.set(nums[i], current + 1)
            }else freqMap.set(nums[i], 1);
        }
    }
}
