const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./BJ2638.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split(' ').map(Number));

let [n, m] = input[0];
let graph = input.slice(1);
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];
let time = 0;

function check(r, c) {
    let cnt = 0;
    for (let i = 0; i < 4; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];
        if (graph[nr][nc] == 2) cnt++;
    }
    return cnt;
}

function dfs(r, c, visitedLocal) {
    graph[r][c] = 2;
    visitedLocal[r][c] = true;
    for (let i = 0; i < 4; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];
        if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
            if (!visitedLocal[nr][nc] && (graph[nr][nc] == 0 || graph[nr][nc] == 2)) {
                visitedLocal[nr][nc] = true;
                graph[nr][nc] = 2;
                dfs(nr, nc, visitedLocal);
            }
        }
    }
}

while (true) {
    let visited = Array.from({length: n}, () => Array(m).fill(false));
    let ch_idx = [];
    dfs(0, 0, visited);

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (graph[r][c] == 1 && check(r, c) > 1) {
                ch_idx.push([r, c]);
            }
        }
    }

    if (ch_idx.length === 0) {
        break;
    }

    for (let [r, c] of ch_idx) {
        graph[r][c] = 2;
    }

    time++;
}

console.log(time);
