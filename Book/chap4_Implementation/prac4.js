const fs = require("fs");
const filePath = "input.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim());

let [n, m] = input[0].split(' ').map(Number);
let [y, x, d] = input[1].split(' ').map(Number);
let board = input.slice(2).map(i => i.split(' ').map(Number));
let visited = Array.from({length: n}, () => Array(m).fill(0));
// 북 동 남 서
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function turnLeft() {
    d -= 1;

    if (d == -1) {
        d = 3;
    }
}

visited[x][y] = 1;
let answer = 1;
let turn_time = 0;

while (true) {
    turnLeft();
    let nx = x + dx[d];
    let ny = y + dy[d];
    // 회전하고 갈 수 있으면 가
    if (visited[nx][ny] == 0 && board[nx][ny] == 0) {
        visited[nx][ny] = 1;
        x = nx;
        y = ny;

        answer += 1;
        turn_time = 0;
        continue;
    } else { // 아니면 회전
        turn_time += 1;
    }
    // 네 번 회전했는데 갈 수 없으면
    if (turn_time == 4) {
        nx = x - dx[d];
        ny = y - dy[d];
        // 뒤로 갈 수 있으면 가
        if (board[nx][ny] == 0) {
            x = nx;
            y = ny;
        } else { // 아니면 끝나
            break;
        }

        turn_time = 0;
    }
}
console.log(answer);