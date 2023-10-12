class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(value) {
        this.heap.push(value);
        let idx = this.heap.length - 1;
        while (idx > 1 && value < this.heap[Math.floor(idx / 2)]) {
            [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [this.heap[Math.floor(idx / 2)], this.heap[idx]];
            idx = Math.floor(idx / 2);
        }
    }

    remove() {
        if (this.heap.length <= 2) {
            return this.heap.pop();
        }

        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        let idx = 1;
        while (true) {
            let left = idx * 2;
            let right = idx * 2 + 1;
            let minIdx = left;
            
            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                minIdx = right;
            }
            
            if (this.heap[idx] < this.heap[minIdx] || minIdx >= this.heap.length) break;
            
            [this.heap[idx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[idx]];
            idx = minIdx;
        }
        return min;
    }
}

const fs = require("fs");
const input = fs.readFileSync("prob4.txt").toString().split('\n').map(item => item.trim());

const INF = 1e9;
let [n, m] = input[0].split(' ').map(Number);
let start = 1;
let graph = Array.from({length: n + 1}, () => []);
let distance = Array(n + 1).fill(INF);

for (let i = 1; i < m + 1; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push([b, 1]);
    graph[b].push([a, 1]);
}

function dijkstra(start) {
    let q = new MinHeap();
    q.insert([0, start]);
    distance[start] = 0;

    while (q.length > 1) {
        [dist, now] = q.remove();

        if (distance[now] < dist) {
            continue;
        }

        for (let i of graph[now]) {
            let cost = dist + i[1];

            if (cost < distance[i[0]]) {
                distance[i[0]] = cost;
                q.insert([cost, i[0]])
            }
        }
    }
}

dijkstra(start);

let max_node = 0, max_distance = 0;
let result = [];

for (let i = 1; i < n + 1; i++) {
    if (max_distance < distance[i]) {
        max_node = i;
        max_distance = distance[i];
        result = [max_node];
    } else if (max_distance == distance[i]) {
        result.push(i)
    }
}

console.log(max_node, max_distance, result.length);