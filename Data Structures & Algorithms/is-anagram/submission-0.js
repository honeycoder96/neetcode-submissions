class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const freqMap = new Map();
        for(let i=0;i < s.length; i++) {
             freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1);
        }

        for(let j=0;j < t.length ;j++) {
            if(!freqMap.has(t[j])) return false;
            else freqMap.set(t[j], (freqMap.get(t[j])) - 1);
            if(freqMap.get(t[j]) === 0 ) freqMap.delete(t[j]);
        }

        return true
    }
}
