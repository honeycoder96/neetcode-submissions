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

        const entries = Array.from(frequencyMap.entries());
        entries.sort((a, b) => b[1] - a[1]);
        const topK = entries.slice(0, k).map(entry => entry[0]);
        return topK;
    }
}
