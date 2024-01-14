const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./BJ1926.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split(' ').map(Number));

let [n, m] = input[0];
let graph = input.slice(1);
let visited = Array.from({length: n}, () => Array(m).fill(false));

// 상, 하, 좌, 우
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];

function dfs(r, c) {
    visited[r][c] = true; // 현재 위치를 방문 처리합니다.
    let size = 1;  // 현재 위치도 그림의 일부이므로 크기를 1로 시작합니다.

    // 상하좌우를 탐색합니다.
    for (let i = 0; i < 4; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];

        // 격자 범위 내에 있고, 방문하지 않았으며, 그림의 일부일 경우
        if (nr >= 0 && nr < n && nc >= 0 && nc < m && !visited[nr][nc] && graph[nr][nc] == 1) {
            size += dfs(nr, nc);  // 연결된 그림의 크기를 더합니다.
        }
    }

    return size;  // 탐색이 끝난 후 그림의 총 크기를 반환합니다.
}

let max_size = 0;
let cnt = 0;

for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
        if (!visited[r][c] && graph[r][c] == 1) {  // 방문하지 않은 그림의 일부일 경우
            let size = dfs(r, c);  // DFS를 시작하여 그림의 크기를 계산합니다.
            max_size = Math.max(max_size, size);  // 가장 큰 그림의 크기를 업데이트합니다.
            cnt++;  // 새로운 그림을 찾았으므로 카운트를 증가시킵니다.
        }
    }
}

console.log(cnt);
console.log(max_size);
