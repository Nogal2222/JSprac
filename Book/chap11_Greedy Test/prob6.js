const MinHeap = require("./heapq.js");
const fs = require("fs");
const input = fs.readFileSync("prob6.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

let food_times = input[0].split(' ').map(Number);
let k = Number(input[1]);

function solution(food_times, k) {
    if (food_times.reduce((acc, val) => acc + val, 0) <= k) {
        return -1;
    }

    let q = new MinHeap();

    for (let i = 0; i < food_times.length; i++) {
        q.insert([food_times[i], i + 1]);
    }

    let sumV = 0;
    let previous = 0;
    let length = food_times.length;

    
    while (sumV + ((q.heap[1][0] - previous) * length) <= k) {
        let now = q.remove()[0]
        sumV += (now - previous) * length;
        length -= 1;
        previous = now;
    }

    result = q.heap.slice(1).sort((a, b) => (a[1] - b[1]));
    return result[(k - sumV) % length][1];
}

console.log(solution(food_times, k));