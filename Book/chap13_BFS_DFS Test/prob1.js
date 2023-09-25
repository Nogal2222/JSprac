const fs = require("fs");
const input = fs.readFileSync("prob1.txt").toString().trim().split('\n').map(item => item.replace('\r',''));

let [n, m, k, x] = input[0].split(' ').map(Number);
let graph = Array.from( {length: n + 1}, () => []);

for (let i = 1; i < m + 1; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
}

let distance = Array(n + 1).fill(-1);
distance[x] = 0;

//bfs
let q = [x];

while (q.length != 0) {
    let now = q.shift();

    for (let nextNode of graph[now]) {
        if (distance[nextNode] == -1) {
            distance[nextNode] = distance[now] + 1;
            q.push(nextNode);
        }
    }
}

// 최단거리가 k인 모든 도시 번호를 오름차순으로 출력
let check = false;

for (let i = 1; i < n + 1; i++) {
    if (distance[i] == k) {
        console.log(i)
        check = true;
    }
}

if (check == false) {
    console.log(-1);
}