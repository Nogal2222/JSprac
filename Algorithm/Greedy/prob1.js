class MinHeap {
    constructor () {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    
    size() {
        return this.heap.length;
    }
    
    heapify(idx) {
        const left = this.getLeftChildIndex(idx);
        const right = this.getRightChildIndex(idx);
        let smallest = idx;
        
        if (left < this.size() &&  this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        
        if (right < this.size() && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        
        if (smallest !== idx) {
            this.swap(idx, smallest);
            this.heapify(smallest);
        }
    }
    
    insert(val) {
        this.heap.push(val);
        let idx = this.heap.length - 1;

        while (idx != 0 && this.heap[this.getParentIndex(idx)] > this.heap[idx]) {
            this.swap(idx, this.getParentIndex(idx));
            idx = this.getParentIndex(idx);
        }
    }

    delete() {
        if (this.size() === 0) {
            return undefined;
        }

        if (this.size() === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return top;
    }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "prob1.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(item => item.trim());

const n = Number(input[0]);
const cards = input.slice(1).map(Number);
cards.sort((a, b) => a - b);

let q = new MinHeap();
let sum = 0;

for (let num of cards) {
    q.insert(num);
}

console.log(q.size());

while (q.size() != 1) {
    let now_card1 = q.delete();
    let now_card2 = q.delete();
    let next_card = now_card1 + now_card2;
    sum += next_card;
    q.insert(next_card);
}

console.log(sum);