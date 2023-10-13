function find_parent(parent, x) {
    if(parent[x] != x) {
        parent[x] = find_parent(parent, parent[x]);
    }
    return parent[x];
}

function union_parent(parent, a, b) {
    a = find_parent(parent, a);
    b = find_parent(parent, b);

    a < b ? parent[b] = a : parent[a] = b;
}

const fs = require("fs");
const input = fs.readFileSync("prob3.txt").toString().split('\n').map(item => item.trim());

let [n, m] = input[0].split(' ').map(Number)

let parent = Array(n + 1).fill(0);
for (let i = 1; i < n + 1; i++) {
    parent[i] = i;
}

let edges = [];
for(let i = 1; i < m + 1; i++) {
    let [x, y, z] = input[i].split(' ').map(Number);
    edges.push([z, x, y]);
}
edges.sort((a, b) => a[0] - b[0]);

let result = 0;
let total = 0;

for (edge of edges) {
    [cost, a, b] = edge;
    total += cost;

    if (find_parent(parent, a) != find_parent(parent, b)) {
        union_parent(parent, a, b);
        result += cost;
    }
}

console.log(total - result);