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
const input = fs.readFileSync("prob1.txt").toString().split('\n').map(item => item.trim());

let [n, m] = input[0].split(' ').map(Number);
let parent = Array(n + 1).fill(0);

for (let i = 1; i < n + 1; i++) {
    parent[i] = 1;
}

for (let i = 1; i < n + 1; i++) {
    let data = input[i].split(' ').map(Number);
    
    for (let j = 0; j < n; j++) {
        if (data[j] === 1) {
            union_parent(parent, i, j + 1)
        }
    }
}

let plan = input[input.length - 1].split(' ').map(Number);
let result = true;

for (let i = 0; i < m - 1; i++) {
    if (find_parent(parent, plan[i]) != find_parent(parent, plan[i + 1])) {
        result = false;
    }
}

result == true ? console.log("YES") : console.log("NO");