const MinHeap = require("./heapq.js");
let  q = new MinHeap();

q.insert(3);
q.insert(5);
q.insert(1);
q.insert(4);
q.insert(2);
q.insert(3);
q.insert(1);

let v = q.remove();

console.log(v, q.heap)