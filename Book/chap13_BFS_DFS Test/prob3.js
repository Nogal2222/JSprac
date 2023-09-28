function bfs() {
    q = [...data];
    
    while (q.length != 0) {
        let [virus, s, x, y] = q.shift()
        
        if (s === S) {
            break;
        }

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (0 <= nx && nx < N && 0 <= ny && ny < N) {
                if (graph[nx][ny] == 0) {
                    graph[nx][ny] = virus;
                    q.push([virus, s + 1, nx, ny]);
                }
            }
        }
    }

}

const fs = require("fs");
const input = fs.readFileSync("prob3.txt").toString().trim().split("\n").map(item => item.replace("\r",""));

const tc = Number(input[0]);
let N, K, graph, data, S, X, Y, dx, dy

for (let t = 0; t < tc; t++) {
    [N, K] = input[5 * t + 1].split(" ").map(Number);
    [S, X, Y] = input[5 * t + N + 2].split(" ").map(Number);
    graph = input.slice(5 * t + 2, 5 * t + 2 + N).map(item => item.split(" ").map(Number));
    data = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] != 0) {
                data.push([graph[i][j], 0, i, j]);
            }
        }
    }

    data.sort((a, b) => a[0] - b[0]);

    dx = [-1, 0, 1, 0];
    dy = [0, 1, 0, -1];

    bfs();

    console.log(graph[X - 1][Y - 1]);
}