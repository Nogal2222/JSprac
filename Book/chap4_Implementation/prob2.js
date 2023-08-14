const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(' ').map(n => parseInt(n));
let [y, x, dir] = input[1].split(' ').map(n => parseInt(n));
let map = [];

for (let i = 2; i < N + 2; i++) {
    map.push(input[i].split(' ').map(n => parseInt(n)));
}

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // 북 동 남 서
let visited = Array(N).fill(null).map(() => Array(M).fill(0));
visited[y][x] = 1;

// 방향을 왼쪽으로 회전하는 함수
function turnLeft() {
    dir = (dir - 1 + 4) % 4;
}

// 시뮬레이터 시작
let count = 1;
let turnTime = 0; // 4방향을 다 보면 멈추기 위한 변수
let nx = 0;
let ny = 0;

while (true) {
    turnLeft();
    ny = y + dirs[dir][0];
    nx = x + dirs[dir][1];

    if (visited[ny][nx] === 0 && map[ny][nx] === 0) {
        visited[ny][nx] = 1;
        y = ny;
        x = nx;
        count++;
        turnTime = 0;
        continue;
    } else {
        turnTime++;
    }
    // 네 방향 모두 갈 수 없을 때
    if (turnTime === 4) {
        ny = y - dirs[dir][0];
        nx = x - dirs[dir][1];
        // 뒤가 육지면 되돌아 감
        if (map[ny][nx] === 0) {
            y = ny;
            x = nx;
        } else {
            break; // 육지 아니면 루프 끝
        }
        turnTime = 0;
    }
}

console.log(count);