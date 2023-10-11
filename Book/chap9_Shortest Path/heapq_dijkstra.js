const MinHeap = require("./heapq.js");
const fs = require("fs");
const filePath = "heapq_dijkstra.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function heapqDijkstra(start) {
    let minHeap = new MinHeap();
    minHeap.insert([0, start]);
    distance[start] = 0;
    
    while (minHeap.heap.length > 1) {
        let [dist, now] = minHeap.remove();

        if (distance[now] < dist) {
            continue;
        }

        for (let i of graph[now]) {
            let cost = dist + i[1];

            if (cost < distance[i[0]]) {
                distance[i[0]] = cost;
                minHeap.insert([cost, i[0]]);
            }
        }
    }
}

const INF = 1e9;
const [N, M] = input[0].split(' ').map(Number);
const start = Number(input[1]);
let distance = Array(N + 1).fill(INF);
let graph = Array.from( { length: N + 1 }, () => []);

for (let i = 2; i < M + 2; i++) {
    let [a, b, c] = input[i].split(' ').map(Number);
    graph[a].push([b, c]);
}

heapqDijkstra(start);

for (let i = 1; i <= N; i++) {
    console.log(distance[i] === INF ? "INFINITY" : distance[i]);
}