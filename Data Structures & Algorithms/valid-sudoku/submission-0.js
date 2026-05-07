class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        for(let i=0;i<9;i++) {
            let unique = new Set();
            for(let j=0;j<9;j++) {
            let t=board[i][j];
                if (t === '.') continue;
                if(unique.has(t)) return false;
                unique.add(t);
            }
        }

        for(let i=0;i<9;i++) {
            let unique = new Set();
            for(let j=0;j<9;j++) {
            let t=board[j][i];
            if (t === '.') continue;
                if(unique.has(t)) return false;
                unique.add(t);
            }
        }

        
        for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
        let unique = new Set();
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let t = board[row + i][col + j];
                
                if (t === '.') continue;
                if (unique.has(t)) return false;
                unique.add(t);
            }
        }
    }
}


        return true;
    }
}
