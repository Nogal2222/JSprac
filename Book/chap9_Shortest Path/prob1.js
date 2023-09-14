const fs = require("fs");
const input = fs.readFileSync("prob1.txt").toString().trim().split('\n');

const INF = 1e9;
const [n, m] = input[0].split(' ').map(Number);
const [x, k] = input[m + 1].split(' ').map(Number);
let graph = Array.from( {length: n + 1}, () => Array(n + 1).fill(INF));

for (let a = 1; a < n + 1; a++) {
     for (let b = 1; b < n + 1; b++) {
        if (a === b) {
            graph[a][b] = 0;
        }
     }
}

for (let i = 1; i < m + 1; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    [graph[a][b], graph[b][a]] = [1, 1];
}

for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
        for (let c = 1; c < n + 1; c++) {
            graph[b][c] = Math.min(graph[b][c], graph[b][a] + graph[a][c]);
        }
    }
}

let distance = graph[1][k] + graph[k][x];

console.log(distance >= INF ? -1 : distance);