class Solution {
    encode(strs) {
        let e = "";
        for (let s of strs) e += s.length + "#" + s;
        return e;
    }
    decode(str) {
        let r = [], i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;
            let l = parseInt(str.substring(i, j));
            let s = str.substring(j + 1, j + 1 + l);
            r.push(s);
            i = j + 1 + l;
        }
        return r;
    }
}
