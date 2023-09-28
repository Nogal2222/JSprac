function virus(x, y) {
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
            if (afterLab[nx][ny] === 0) {
                afterLab[nx][ny] = 2;
                virus(nx, ny);
            }
        }
    }
}

function getScore() {
    let score = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (afterLab[i][j] === 0) {
                score++;
            }
        }
    }

    return score;
}

function dfs(count) {
    if (count === 3) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                afterLab[i][j] = lab[i][j];
            }
        }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (afterLab[i][j] === 2) {
                    virus(i, j);
                }
            }
        }

        result = Math.max(result, getScore());
        return
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (lab[i][j] === 0) {
                lab[i][j] = 1;
                count++;
                dfs(count);
                lab[i][j] = 0;
                count--;
            }
        }
    }
}

const fs = require("fs");
const input = fs.readFileSync("prob2.txt").toString().trim().split("\n").map(item => item.replace('\r', ''));

const tc = Number(input[0]);
let line = 1;
let N, M, lab, afterLab, dx, dy, result;

for (let t = 0; t < tc; t++) {
    [N, M] = input[line].split(" ").map(Number);
    lab = input.slice(line + 1, line + N + 1).map(item => item.split(' ').map(Number));
    afterLab = Array.from( {length: N}, () => Array(M).fill(0));

    line += N + 1 // 다음 테스트 케이스를 위해 line 조절

    dx = [-1, 0, 1, 0];
    dy = [0, 1, 0, -1];
    result = 0

    dfs(0);
    console.log(result)
}