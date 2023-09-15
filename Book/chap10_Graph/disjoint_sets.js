function findParent(parent, x) {
    if (parent[x] != x) {
        return findParent(parent, parent[x]);
    }
    // return x;
    // 아래처럼 고치면 시간 복잡도 최적화
    return parent[x];
}

function unionParent(parent, a, b) {
    a = findParent(parent, a);
    b = findParent(parent, b);

    a < b ? parent[b] = a : parent[a] = b;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "disjoint_sets.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(item => item.replace("\r", ""));

const [v, e] = input[0].split(' ').map(Number);
let parent = Array(v + 1).fill(0);

for (let i = 1; i < v + 1; i++) {
    parent[i] = i;
}

for (let i = 1; i < e + 1; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    unionParent(parent, a, b);
}

let s1 = "각 원소가 속한 집합 : ";

for (let i = 1; i < v + 1; i++) {
    s1 += String(findParent(parent, i)) + ' ';
}

console.log(s1);

let s2 = "부모 테이블 : ";

for (let i = 1; i < v + 1; i++) {
    s2 += String(parent[i]) + ' ';
}

console.log(s2);