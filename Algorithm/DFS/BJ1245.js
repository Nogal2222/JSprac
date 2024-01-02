const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./BJ1245.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split(' ').map(Number));

let [n, m] = input[0];
let board = input.slice(1);
// 하, 상, 우, 좌, 하우, 하좌, 상좌, 상우
let dr = [1, -1, 0, 0, 1, 1, -1, -1]
let dc = [0, 0, 1, -1, 1, -1, -1, 1]

let visited = Array.from({length : n}, () => Array(m).fill(0));
let flag = false;
let answer = 0;

function dfs(r, c) {
    visited[r][c] = 1;

    for (let i = 0; i < 8; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];

        if (nr > -1 && nr < n && nc > -1 && nc < m) {
            if (board[r][c] < board[nr][nc]) {
                flag = false;
            }

            if (visited[nr][nc] == 0 && board[nr][nc] == board[r][c]) {
                dfs(nr, nc);
            }
        }
    }
}

for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
        if (board[r][c] > 0 && visited[r][c] == 0) {
            flag = true;
            dfs(r, c);

            if (flag) {
                answer += 1;
            }
        }
    }
}

console.log(answer);