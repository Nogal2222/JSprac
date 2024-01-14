const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./BJ13023.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split(' ').map(Number));

let [n, m] = input[0];
let graph = Array.from({length: n}, () => []);
let visited = Array(n).fill(false);

for (let i = 1; i < m + 1; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
}

let answer = false;

function dfs(i, d){
    visited[i] = true;

    if (d == 4) {
        answer = true;
        return;
    }

    for (let t of graph[i]) {
        if (!visited[t]) {
            visited[t] = true;
            dfs(t, d + 1);
            visited[t] = false;
        }
    }

}

for (let i = 0; i < n; i++) {
    dfs(i, 0);
    visited[i] = false;

    if (answer) break;
}

if (answer) console.log(1)
else console.log(0);