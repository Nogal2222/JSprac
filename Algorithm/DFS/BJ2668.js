const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./BJ2668.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => Number(i.trim()));

let n = input[0];
let nums = input.slice(1);
nums.unshift(0);
let answer = [];

function dfs(graph, visited, start, current){
    visited[current] = true;
    let next = graph[current];

    if (!visited[next]) {
        dfs(graph, visited, start, next);
    } else if (start == next) {
        answer.push(start);
    }
}

for (let i = 1; i < n + 1; i++) {
    let visited = Array(n + 1).fill(false);
    dfs(nums, visited, i, i);
}

console.log(answer.length);
for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}