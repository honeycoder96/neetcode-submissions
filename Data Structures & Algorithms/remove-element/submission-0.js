class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let index=0, end=nums.length-1;
        while(index <= end) {
            if(nums[end] === val) end--;
            else if(nums[index] === val) {
                let t = nums[index];
                nums[index] = nums[end];
                nums[end]=t;

                index++;
                end--;
            } else index++;
        }

        return end+1;
    }
}
