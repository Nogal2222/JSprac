function find_parent(parent, x) {
    if (parent[x] != x) {
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
const input = fs.readFileSync('prob4.txt').toString().split('\n').map(item => item.trim());

const n = Number(input[0]);
let parent = Array(n + 1).fill(0);
let edges = [];
let result = 0;

for (let i = 1; i < n + 1; i++) {
    parent[i] = i;
}

let [x, y, z] = [[], [], []]

for (let i = 1; i < n + 1; i++) {
    let data = input[i].split(' ').map(Number);
    x.push([data[0], i]);
    y.push([data[1], i]);
    z.push([data[2], i]);
}

x.sort((a, b) => a[0] - b[0]);
y.sort((a, b) => a[0] - b[0]);
z.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < n - 1; i++) {
    edges.push([x[i + 1][0] - x[i][0], x[i][1], x[i + 1][1]])
    edges.push([y[i + 1][0] - y[i][0], y[i][1], y[i + 1][1]])
    edges.push([z[i + 1][0] - z[i][0], z[i][1], z[i + 1][1]])
}

edges.sort((a, b) => a[0] - b[0]);

for (edge of edges) {
    let [cost, a, b] = edge;

    if (find_parent(parent, a) != find_parent(parent, b)) {
        union_parent(parent, a, b);
        result += cost;
    }
}

console.log(result);