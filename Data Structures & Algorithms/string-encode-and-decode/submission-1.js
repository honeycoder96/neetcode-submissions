class Solution {
    encode(strs) {
        const res = [];
        for (let s of strs)
            res.push(s.length, "#", s);
        return res.join("");
    }

    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let len = 0;
            while (str[i] !== "#") {
                len = len * 10 + (str.charCodeAt(i) - 48);
                i++;
            }
            i++;
            res.push(str.slice(i, i + len));
            i += len;
        }
        return res;
    }
}
