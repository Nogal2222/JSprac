const fs = require('fs');
const filePath = process.platform === "linux" ? '/dev/stdin' : 'BJ1303.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim());

let [N, M] = input[0].split(' ').map(Number);
let field = input.slice(1);
// 상 하 좌 우
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];
let visited = Array.from({length: M}, () => Array(N).fill(false));
let [tot_W, tot_B] = [0, 0];

function dfs(r, c, t, cnt) {
    visited[r][c] = true;
    cnt++;

    for (let i = 0; i < 4; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];

        if (nr < 0 || nr >= M || nc < 0 || nc >= N || visited[nr][nc] || field[nr][nc] != t) continue;

        cnt = dfs(nr, nc, t, cnt);
    }

    return cnt;
}

for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
        if (!visited[r][c]) {
            let score = dfs(r, c, field[r][c], 0) ** 2;
            if (field[r][c] === 'W') {
                tot_W += score;
            } else {
                tot_B += score;
            }
        }
    }
}

console.log(tot_W, tot_B);
