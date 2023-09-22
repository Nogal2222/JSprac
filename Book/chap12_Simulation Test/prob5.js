function turn(dir, c) {
    c === "L" ? dir = (dir - 1) % 4 : dir  = (dir + 1) % 4;
    return dir;
}

function simulate(N, board, L, moves, d) {
    let [x, y] = [1, 1];
    board[x][y] = 2;
    let [dir, time, index] = [0, 0, 0];
    let q = [[x, y]];

    while (true) {
        let [nx, ny] = [x + d[dir][0], y + d[dir][1]];

        // 맵 범위 안에 있고, 뱀의 몸통이 없는 위치라면,
        if (nx >= 1 && nx <= N && ny >= 1 && ny <= N && board[nx][ny] != 2) {
            // 사과 없으면 이동 후 꼬리 제거
            if (board[nx][ny] === 0) {
                board[nx][ny] = 2;
                q.push([nx, ny]);
                [px, py] = q.shift();
                board[px][py] = 0;
            }
            // 사과 있으면 이동 후에 꼬리 그대로 두기
            if (board[nx][ny] === 1) {
                board[nx][ny] = 2;
                q.push([nx, ny]);
            }
        }
        // 벽이나 뱀의 몸통과 부딪혔다면,
        else {
            time += 1;
            break;
        }

        [x, y] = [nx, ny];
        time += 1;

        if (index < L && time === moves[index][0]) {
            dir = turn(dir, moves[index][1]);
            index += 1;
        }
    }
    
    return time;
}

const fs = require("fs");
const input = fs.readFileSync("prob5.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);
let l = 1;

for (let t = 0; t < tc; t++) {
    // 선언부
    let N = Number(input[l]);
    let K = Number(input[1 + l]);
    let apples = input.slice(2 + l, 2 + l + K).map(item => item.split(' ').map(Number));
    let L = Number(input[2 + l + K]);
    let moves = input.slice(3 + l + K, 3 + l + K + L).map(item => item.split(' ').map(x => isNaN(x) ? x : Number(x)))
    
    l += 3 + K + L; // 다음 테스트케이스로 가기 위한 식
    let d = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 머리 방향 (동, 남, 서, 북) => 시계방향 회전
    let board = Array.from( {length: N + 1}, () => Array(N + 1).fill(0));

    for (let i = 0; i < K; i++) {
        let [a, b] = apples[i];
        board[a][b] = 1;
    }

    console.log("===============");
    console.log("TESTCASE ", t+1);
    console.log("N = ", N);
    console.log("K = ", K);
    console.log("apples = ", apples);
    console.log("L = ", L);
    console.log("moves = ", moves);

    console.log(simulate(N, board, L, moves, d));
}