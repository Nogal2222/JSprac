// 위상 정렬

const fs = require("fs");
const filePath = "topology_sort.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.replace('\r', ''));

const [v, e] = input[0].split(' ').map(Number);
let indegree = Array(v + 1).fill(0);
let graph = Array.from( { length: v + 1 }, () => []);

for (let i = 1; i < e + 1; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    indegree[b] += 1;
}

function topologySort() {
    let result = [];
    let q = [];

    for (let i = 1; i <= v; i++) {
        if (indegree[i] === 0) {
            q.push(i);
        }
    }

    while( q.length != 0) {
        let now = q.shift();
        result.push(now);

        for (let i of graph[now]) {
            indegree[i] -= 1

            if (indegree[i] == 0) {
                q.push(i)
            }
        }
    }
    
    let s = '';
    
    for (let i of result) {
        s += String(i) + ' ';
    }
    
    console.log(s);
}


topologySort();