function findParent(parent, x) {
    if (parent[x] != x) {
        parent[x] = findParent(parent, parent[x]);
    }
    return parent[x];
}

function unionParent(parent, a, b) {
    a = findParent(parent, a);
    b = findParent(parent, b);
    
    a < b ? parent[b] = a : parent[a] = b;
}

const fs = require("fs");
const input = fs.readFileSync("prob2.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const [n, m] = input[0].split(' ').map(Number);
let parent = Array(n + 1).fill(0);
let edges = [];
let result = 0;

for (let i = 1; i < n + 1; i++) {
    parent[i] = i;
}

for (let i = 1; i < m + 1; i++) {
    let [a, b, cost] = input[i].split(' ').map(Number);

    edges.push([cost, a, b]);
}

edges.sort((a, b) => a[0] - b[0]);
let last = 0;

for (edge of edges) {
    let [cost, a, b] = edge;

    if (findParent(parent, a) != findParent(parent, b)) {
        unionParent(parent, a, b);
        result += cost;
        last = cost;
    }
}

console.log(result - last);