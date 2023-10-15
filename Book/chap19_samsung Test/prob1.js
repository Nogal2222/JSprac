function bfs() {
    let dist = Array.from({length: n}, () => Array(n).fill(-1));
    let q = [[now_x, now_y]];
    dist[now_x][now_y] = 0;

    while (q.length > 0) {
        let [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x + dx[i], y + dy[i]];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                if (dist[nx][ny] == -1 && graph[nx][ny] <= now_size) {
                    dist[nx][ny] = dist[x][y] + 1;
                    q.push([nx, ny]);
                }
            }
        }
    }

    return dist;
}

function find(dist) {
    let [x, y] = [0, 0];
    let min_dist = INF;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dist[i][j] != -1 && graph[i][j] >= 1 && graph[i][j] < now_size) {
                if (dist[i][j] < min_dist) {
                    [x, y] = [i, j];
                    min_dist = dist[i][j];
                }
            }
        }
    }

    if (min_dist == INF) {
        return null;
    } else {
        return [x, y, min_dist];
    }
}

const fs = require("fs");
const input = fs.readFileSync("prob1.txt").toString().split('\n').map(item => item.trim());

const INF = 1e9;
const tc = Number(input[0]);
let line = 1
let n, graph, now_size, now_x, now_y, dx, dy, result, ate;

for (let t = 0; t < tc; t++) {
    n = Number(input[line]);
    graph = input.slice(line + 1, line + n + 1).map(item => item.split(' ').map(Number));
    line += 1 + n

    now_size = 2;
    now_x = graph.findIndex(row => row.includes(9));
    now_y = graph[now_x].indexOf(9);
    [dx, dy] = [[-1, 0, 1, 0], [0, 1, 0, -1]];

    result = 0;
    ate = 0;

    while (true) {
        let value = find(bfs());

        if (value == null) {
            console.log(result);
            break;
        } else {
            [now_x, now_y] = [value[0], value[1]];
            result += value[2];
            graph[now_x][now_y] = 0;
            ate += 1;

            if (ate >= now_size) {
                now_size += 1;
                ate = 0;
            }
        }
    }
}