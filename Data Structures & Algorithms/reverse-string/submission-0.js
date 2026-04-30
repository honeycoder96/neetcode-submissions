class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let end = s.length-1, start=0;
        while(start < end) {
            [s[start], s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
    }
}
