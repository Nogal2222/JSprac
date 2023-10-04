class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(value) {
        this.heap.push(value);
        let idx = this.heap.length - 1;
        while (idx > 1 && value < this.heap[Math.floor(idx/2)]) {
            [this.heap[idx], this.heap[Math.floor(idx/2)]] = [this.heap[Math.floor(idx/2)], this.heap[idx]];
            idx = Math.floor(idx/2);
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
        return min
    }
}

const fs = require("fs");
const input = fs.readFileSync("prob4.txt").toString().split('\n').map(item => item.replace('\r', ''));

const N = Number(input[0]);
const cards = input.slice(1).map(Number);
let heap = new MinHeap();

for (let i = 0; i < N; i++) {
    heap.insert(cards[i]);
}

let result = 0;

while (heap.heap.length != 2) {
    let one = heap.remove();
    let two = heap.remove();
    let sumV = one + two;
    result += sumV;
    heap.insert(sumV);
}

console.log(result);