const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")

let [N, M] = input[0].split(' ').map(number => parseInt(number));
let board = input.slice(1).map(row => row.replace(/\r/g, "").split("").map(Number));
let dxy = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function bfs(x, y) {
    let q = [[x, y]];

    while (q.length != 0) {
        x, y = q.shift()

        for (let i = 0; i < 4; i++) {
            let nx = x + dxy[i][0];
            let ny = y + dxy[i][1];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
                continue;
            }

            if (board[nx][ny] === 0) {
                cont-inue;
            }

            if (board[nx][ny] === 1) {
                board[nx][ny] = board[x][y] + 1
                queue.push([nx, ny])
            }
        }
    }
    return board [N-1][M-1]
}

console.log(bfs(0, 0));