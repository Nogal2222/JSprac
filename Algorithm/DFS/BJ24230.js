const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./BJ24230.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim());

let n = Number(input[0]);
let colors = [0, ...input[1].split(' ').map(Number)];
let lines = input.slice(2).map(i => i.split(' ').map(Number));
let graph = Array.from({length: n + 1}, () => []);
let visited = Array(n + 1).fill(false);
let answer = 0;

for (let [a, b] of lines) {
    graph[a].push(b);
    graph[b].push(a);
}

function dfs(past, current) {
    visited[current] = true;

    if (colors[past] != colors[current]) {
        answer++;
    }

    for (let i of graph[current]) {
        if (visited[i] == false) {
            dfs(current, i);
        }
    }
}

dfs(0, 1)
console.log(answer);