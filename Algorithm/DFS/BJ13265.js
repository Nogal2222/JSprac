const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./BJ13265.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split(' ').map(Number));

let tc = input[0];
let line = 1;

for (let t = 0; t < tc; t++) {
    let [n, m] = input[line++];
    let relations = input.slice(line, line + m);
    line += m;
    let graph = Array.from({length: n + 1}, () => []);
    let colors = Array(n + 1).fill(-1);

    for (let [a, b] of relations) {
        graph[a].push(b);
        graph[b].push(a);
    }

    function dfs(node, color) {
        colors[node] = color;

        for (let next of graph[node]) {
            // 인접 노드와 색이 같다면 false
            if (colors[next] == color) {
                return false;
            }
            // 인접 노드를 방문하지 않았고, 탐색에 실패하면 false
            if (colors[next] == -1 && !dfs(next, 1 - color)) {
                return false;
            }
        }
        return true;
    }

    let flag = true;

    for (let i = 1; i <= n; i++) {
        if (colors[i] == -1 && !dfs(i, 0)) {
            flag = false;
            break;
        }
    }
    console.log(colors);
    console.log(flag ? "possible" : "impossible");
}