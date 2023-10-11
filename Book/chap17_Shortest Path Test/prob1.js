const fs = require("fs");
const input = fs.readFileSync("prob1.txt").toString().split('\n').map(item => item.trim());

const INF = 1e9;
let n = Number(input[0]), m = Number(input[1]);
let graph = Array.from({length: n + 1}, () => Array(n + 1).fill(INF));

// 자기 자신으로 가는 값은 0으로 초기화
for (let a = 1; a <= n; a ++) {
    for (let b = 1; b <= n; b++) {
        if (a === b) {
            graph[a][b] = 0;
        }
    }
}

// 각 간선에 대한 정보를 입력받아, 그 값으로 초기화
for (let i = 2; i < m + 2; i++) {
    let [a, b, c] = input[i].split(' ').map(Number);
    // 가장 짧은 간선 정보만 저장
    if (c < graph[a][b]) {
        graph[a][b] = c;
    }
}

// 점화식에 따라 플로이드 워셜 알고리즘 수행
for (let k = 1; k <= n; k++){
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
        }
    }
}

// 수행된 결과를 출력
for (let a = 1; a <= n; a++) {
    let s = '';

    for (let b = 1; b <= n; b++) {
        if (graph[a][b] === INF) {
            s += '0 ';
        } else {
            s += String(graph[a][b]) + ' ';
        }
    }

    console.log(s);
}