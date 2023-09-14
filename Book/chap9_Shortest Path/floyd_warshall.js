const fs = require("fs");
const input = fs.readFileSync("floyd_warshall.txt").toString().trim().split('\n');

const INF = 1e9;
const [n, m] = [input[0], input[1]].map(Number);
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

for (let y = 1; y < n + 1; y++) {
    for (let x = 1; x < n + 1; x++) {
        if (y === x) {
            graph[y][x] = 0;
        }
    }
}

for (let i = 2; i < m + 2; i++) {
    let [a, b, c] = input[i].split(' ').map(Number);
    graph[a][b] = c;
}

// floyd-warshall
for (let l = 1; l < n + 1; l++) {
    for (let j = 1; j < n + 1; j++) {
        for (let k = 1; k < n + 1; k++) {
            graph[j][k] = Math.min(graph[j][k], graph[j][l] + graph[l][k]);
        }
    }
}

for (let a = 1; a < n + 1; a++) {
    let answer = '';

    for (let b = 1; b < n + 1; b++) {
        answer += (String(graph[a][b]) + ' ');
    }
    answer.trim();
    console.log(answer);
}