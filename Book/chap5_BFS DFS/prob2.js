const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number)
let maze = input.slice(1).map(row => row.replace('\r', '').split("").map(Number))

const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function bfs(x, y) {
    let q = [];
    q.push([x, y]);

    while (q.length != 0) {
        [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            let nx = x + moves[i][0];
            let ny = y + moves[i][1];

            if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
                continue;
            }

            if (maze[nx][ny] == 0) {
                continue;
            }

            if (maze[nx][ny] == 1) {
                maze[nx][ny] = maze[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
    return maze[N-1][M-1];
}

console.log(bfs(0, 0));