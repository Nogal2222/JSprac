const { notEqual } = require("assert");
const fs = require("fs");
const filePath = "simple_dijkstra.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function getSmallestNode() {
    let minV = INF;
    let index = 0;
    
    for (let i = 1; i < N + 1; i++) {
        if (distance[i] < minV && !visited[i]) {
            minV = distance[i];
            index = i;
        }
    }
    return index;
}

function dijkstra(start) {
    distance[start] = 0;
    visited[start] = true;
    
    // graph[start].forEach(e => {
    //     distance[e[0]] = e[1];
    // });
    
    for (let j of graph[start]) {
        distance[j[0]] = j[1];
    }
    
    for (let i = 0; i < N - 1; i++) {
        let now = getSmallestNode();
        visited[now] = true;
        
        for (let j of graph[now]) {
            let cost = distance[now] + j[1];
            
            if (cost < distance[j[0]]) {
                distance[j[0]] = cost;
            }
        }
    }
}

const INF = 1e9;
const [N, M] = input[0].split(' ').map(Number);
const start = parseInt(input[1]);
let visited = new Array(N + 1).fill(false);
let distance = new Array(N + 1).fill(INF);
let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
    let [a, b, c] = input[i + 2].split(' ').map(Number);
    graph[a].push([b, c]);
}


dijkstra(start);

for (let i = 1; i < N + 1; i++) {
    if (distance[i] === INF) {
        console.log("INFINITY");
    } else {
        console.log(distance[i]);
    }
}