const fs = require("fs");
const input = fs.readFileSync('prob5.txt').toString().split('\n').map(item => item.trim());

const tc = Number(input[0]);
let line = 1;

for (let t = 0; t < tc; t++) {
    let n = Number(input[line]);
    let teams = input[line + 1].split(' ').map(Number);
    let m = Number(input[line + 2]);
    let changes = input.slice(line + 3, line + m + 3).map(item => item.split(' ').map(Number));
    line += 3 + m;

    let indegree = Array(n + 1).fill(0);
    let graph = Array.from({length : n + 1}, () => Array(n + 1).fill(false));

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            graph[teams[i]][teams[j]] = true;
            indegree[teams[j]] += 1;
        }
    }

    for (let change of changes) {
        let [a, b] = change;

        if (graph[a][b] == true) {
            graph[a][b] = false;
            graph[b][a] = true;
            indegree[a] += 1;
            indegree[b] -= 1;
        } else {
            graph[a][b] = true;
            graph[b][a] = false;
            indegree[a] -= 1;
            indegree[b] += 1;
        }
    }

    // 위상정렬 시작 (topology)
    let result = [];
    let q = [];

    for (let i = 1; i < n + 1; i++) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }

    let certain = true; // 위상 정렬 결과가 오직 하나인지 여부
    let cycle = false;

    for (let i = 0; i < n; i++) {
        if(q.length == 0) {
            cycle = true;
            break;
        }

        if (q.length >= 2) {
            certain = false;
            break;
        }

        let now = q.shift();
        result.push(now);

        for (let j = 1; j < n + 1; j++) {
            if (graph[now][j]) {
                indegree[j] -= 1;

                if (indegree[j] == 0) {
                    q.push(j);
                }
            }
        }
    }

    if (cycle == true) {
        console.log("IMPOSSIBLE");
    } else if (!certain) {
        console.log("?");
    } else {
        let s = '';
        for (let r of result) {
            s += String(r) + " ";
        }
        console.log(s);
    }
}