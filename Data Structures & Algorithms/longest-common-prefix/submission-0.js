class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let compare = strs[0], result = "";
        for(let i=1;i<strs.length;i++) {
            for(let j=0; j < strs[i].length && j< compare.length ; j++) {
                if(strs[i][j] === compare[j]) result+=compare[j];
                else break;
            }

            if(!result) return "";
            compare = result;
            result="";
        }

        return compare;
    }
}
