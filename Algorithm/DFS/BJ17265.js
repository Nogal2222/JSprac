const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split(' '));

const N = parseInt(input[0]);
const mapArr = input.slice(1).map(line => line.map(item => isNaN(item) ? item : Number(item)));

let maxAnswer = Number.MIN_SAFE_INTEGER;
let minAnswer = Number.MAX_SAFE_INTEGER;

// 방향 벡터 (아래, 오른쪽)
const dy = [1, 0];
const dx = [0, 1];

function dfs(i, j, currNum, before) {
    if (i === N - 1 && j === N - 1) {
        maxAnswer = Math.max(maxAnswer, parseInt(currNum));
        minAnswer = Math.min(minAnswer, parseInt(currNum));
    }

    for (let k = 0; k < 2; k++) {
        const ni = i + dy[k];
        const nj = j + dx[k];

        // 범위를 벗어나면 무시
        if (ni < 0 || nj < 0 || ni >= N || nj >= N) continue;

        if (!isNaN(mapArr[ni][nj])) { // 숫자인 경우
            dfs(ni, nj, eval(currNum + before + mapArr[ni][nj]).toString(), '');
        } else { // 기호인 경우
            dfs(ni, nj, currNum, mapArr[ni][nj]);
        }
    }
}

dfs(0, 0, mapArr[0][0].toString(), '');
console.log(maxAnswer, minAnswer);
