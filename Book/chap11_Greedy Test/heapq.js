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

module.exports = MinHeap;