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
const input = fs.readFileSync('prob3.txt').toString().split('\n').map(item => item.trim());
const tc = Number(input[0]);
let line = 1, INF = 1e9, dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];

for (let t = 0; t < tc; t++) {
    let n = Number(input[line]);
    let mars = input.slice(line + 1, line + n + 1).map(item => item.split(' ').map(Number));
    line += n + 1;

    let distance = Array.from({length: n}, () => Array(n).fill(INF));
    let [x, y] = [0, 0];
    let q = new MinHeap();
    q.insert([mars[x][y], x, y])
    distance[x][y] = mars[x][y];

    while (q.heap.length > 1) {
        let [dist, x, y] = q.remove();

        if (distance[x][y] < dist) {
            continue;
        }

        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x + dx[i], y + dy[i]];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
                continue;
            }

            let cost = dist + mars[nx][ny];

            if (cost < distance[nx][ny]) {
                distance[nx][ny] = cost;
                q.insert([cost, nx, ny]);
            }
        }
    }

    console.log(distance[n-1][n-1]);
}