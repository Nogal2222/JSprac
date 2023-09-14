const MinHeap = require("./heapq.js");
const fs = require("fs");
const filePath = "prob2.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const INF = 1e9;
const [n, m, c] = input[0].split(' ').map(Number);
let distance = Array(n + 1).fill(INF);
let graph = Array.from( { length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
    let [x, y, z] = input[i].split(' ').map(Number);
    graph[x].push([y, z]);
}

function dijkstra(start) {
    let q = new MinHeap();
    q.insert([0, start]);
    distance[start] = 0;

    while (q.heap.length > 1) {
        let [dist, now] = q.remove();

        if (distance[now] < dist) {
            continue;
        }

        for (let i of graph[now]) {
            let cost = dist + i[1]
            
            if (cost < distance[i[0]]) {
                distance[i[0]] = cost;
                q.insert([cost, i[0]]);
            }
        }

    }
}

dijkstra(c);

let count = 0;
let maxDistance = 0;

for (let d of distance) {
    if (d != INF) {
        count += 1;
        maxDistance = Math.max(maxDistance, d);
    }
}

console.log(count - 1, maxDistance);