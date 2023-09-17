function topologySort() {
    let result = JSON.parse(JSON.stringify(time));
    let q = [];

    for (let i = 1; i < n + 1; i++) {
        if (indegree[i] === 0) {
            q.push(i);
        }
    }

    while (q.length != 0) {
        now = q.shift();

        for (let i of graph[now]) {
            result[i] = Math.max(result[i], result[now] + time[i]);
            indegree[i] -= 1;

            if (indegree[i] === 0) {
                q.push(i);
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        console.log(result[i]);
    }
}

const fs = require("fs");
const input = fs.readFileSync("prob3.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const n = Number(input[0]);
let indegree = Array(n + 1).fill(0);
let graph = Array.from( { length: n + 1 }, () => []);
let time = Array(n + 1).fill(0);

for (let i = 1; i < n + 1; i++) {
    let data = input[i].split(' ').map(Number);
    time[i] = data[0];

    for (let x of data.slice(1, data.length - 1)) {
        indegree[i] += 1;
        graph[x].push(i);
    }
}

topologySort();