const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BJ3184.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim());

let [R, C] = input[0].split(' ').map(Number);
// . -> 빈 공간 // # -> 울타리 // o -> 양 // v -> 늑대
let yard = input.slice(1);
// 상 하 좌 우
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];
let [tot_wolf, tot_sheep] = [0, 0];
let visited = Array.from({length: R}, () => Array(C).fill(false));

function dfs(r, c) {
    if (visited[r][c] || yard[r][c] == '#') return [0, 0];

    visited[r][c] = true;
    let [wolf, sheep] = [0, 0];
    if (yard[r][c] == 'v') wolf++;
    if (yard[r][c] == 'o') sheep++;
    
    for (let i = 0; i < 4; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];

        if (nr < 0 || nr >= R || nc < 0 || nc >= C || visited[nr][nc] || yard[nr][nc] == '#') continue;
        
        let [w, s] = dfs(nr, nc);
        wolf += w;
        sheep += s;
    }

    return [wolf, sheep];
}

for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        if (!visited[i][j] && yard[i][j] != '#') {
            let [wolf, sheep] = dfs(i, j);

            if (sheep > wolf) {
                tot_sheep += sheep;
            } else {
                tot_wolf += wolf;
            }
        }
    }
}

console.log(tot_sheep, tot_wolf);