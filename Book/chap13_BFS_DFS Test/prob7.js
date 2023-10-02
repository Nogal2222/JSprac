function process(x, y, index) {
    let united = [];
    united.push([x, y]);

    let q = [];
    q.push([x, y]);
    union[x][y] = index;
    let summary = graph[x][y];
    let count = 1;

    while (q.length > 0) {
        [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x + dx[i], y + dy[i]];

            if (0 <= nx && nx < N && 0 <= ny && ny < N && union[nx][ny] == -1) {
                let val = Math.abs(graph[nx][ny] - graph[x][y])
                if (L <= val && val <= R) {
                    q.push([nx, ny]);
                    union[nx][ny] = index;
                    summary += graph[nx][ny];
                    count += 1;
                    united.push([nx, ny]);
                }
            }
        }
    }

    for (let [i, j] of united) {
        graph[i][j] = Math.floor(summary / count);
    }
    return count;
}

const fs = require("fs");
const input = fs.readFileSync("prob7.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0])
let line = 1;
let N, L, R, graph, dx, dy, result, totalCount, union;

for (let t = 0; t < tc; t++) {
    [N, L, R] = input[line].split(' ').map(Number);
    graph = input.slice(line + 1, line + 1 + N).map(item => item.split(' ').map(Number));
    line += N + 1;

    dx = [-1, 0, 1, 0];
    dy = [0, -1, 0, 1];

    result = 0;
    totalCount = 0;

    while(true) {
        union = Array.from( {length: N}, () => Array(N).fill(-1));
        let index = 0;

        for (let i = 0; i < N; i++){
            for (let j = 0; j < N; j++) {
                if (union[i][j] == -1) {
                    process(i, j, index);
                    index += 1;
                }
            }
        }

        if (index == N * N) {
            break;
        }

        totalCount += 1;
    }

    console.log(totalCount);
}