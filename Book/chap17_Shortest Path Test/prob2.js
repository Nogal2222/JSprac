const fs = require("fs");
const input = fs.readFileSync("prob2.txt").toString().split('\n').map(item => item.trim());
const INF = 1e9;

let [n, m] = input[0].split(' ').map(Number);
let graph = Array.from({length: n + 1}, () => Array(n + 1).fill(INF));

// 자기자신은 0으로 초기화
for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
        if (a === b) {
            graph[a][b] = 0;
        }
    }
}

// 각 간선에 대한 정보를 1로 초기화
for (let i = 1; i < m + 1; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a][b] = 1
}

// 플로이드 워셜
for (let k = 1; k <= n; k++) {
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
        }
    }
}

let result = 0;

for (let i = 1; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= n; j++) {
        if (graph[i][j] != INF || graph[j][i] != INF) {
            count += 1;
        }
    }

    if (count === n) {
        result += 1;
    }
}

console.log(result);