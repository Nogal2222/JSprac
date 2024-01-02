const fs = require("fs");
const filePath = "input.txt";
let board = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split('').map(Number));

let row = board.length;
let column = board[0].length;

// 상하좌우
let dr = [-1, 1, 0, 0]
let dc = [0, 0, -1, 1]

function dfs(r, c) {
    if (r <= -1 || r >= row || c <= -1 || c >= column) {
        return false;
    }
    
    if (board[r][c] == 0) {
        board[r][c] = 1;
        
        for (let i = 0; i < 4; i++) {
            dfs(r + dr[i], c + dc[i]);
        }

        return true;
    }
    return false;

}

let answer = 0;

for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
        if (dfs(r, c) == true) {
            answer++;
        }
    }
}
console.log(answer);