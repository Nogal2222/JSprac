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
const { arrayBuffer } = require("stream/consumers");
const input = fs.readFileSync("prob1.txt").toString().trim().split("\n").map(item => item.replace('\r', ''));

const [n, m] = input[0].split(' ').map(Number);
let parent = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
    parent[i] = i;
}

for (let i = 1; i <= m; i++) {
    let [oper, a, b] = input[i].split(' ').map(Number);
    
    if (oper === 0) {
        unionParent(parent, a, b);
    } else if (oper === 1) {
        findParent(parent, a) === findParent(parent, b) ? console.log("YES") : console.log("NO");
    }
}