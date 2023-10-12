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
const input = fs.readFileSync("prob2.txt").toString().split('\n').map(item => item.trim());

let G = Number(input[0]);
let P = Number(input[1]);
let docks = input.slice(2, 2 + P).map(Number);

let parent = Array(G + 1).fill(0);

for (let i = 1; i < G + 1; i++ ) {
    parent[i] = i;
}

let result = 0;

for (let dock of docks) {
    let data = find_parent(parent, dock);

    if (data === 0) break;

    union_parent(parent, data, data - 1);
    result += 1;
}

console.log(result);