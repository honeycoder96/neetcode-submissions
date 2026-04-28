class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();

        for (const num of nums)
          frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);

        // let indexArr = new Array(nums.length).fill([]);
        let indexArr = Array.from({ length: nums.length + 1 }, () => []);
        for(let [num, freq] of frequencyMap) {
            indexArr[freq] = [...indexArr[freq], num];
        }

        let result = [];
        for(let i= indexArr.length -1; i >=0 && result.length < k; i--) {
            if(indexArr[i].length) {
                result = [...result, ...indexArr[i]]
            }
        }
        
        return result;
    }
}
