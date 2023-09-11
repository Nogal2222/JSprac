const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(number => parseInt(number));
// \r를 제거하는게 여러모로 좋을 듯
let iceBoard = input.slice(1).map(row => row.replace(/\r/g, "").split("").map(Number));

function dfs(x, y) {
    if (x <= -1 || x >= N || y <= -1 || y >= M) {
        return false;
    }
    if (iceBoard[x][y] === 0) {
        iceBoard[x][y] = 1;
        dfs(x - 1, y)
        dfs(x, y - 1)
        dfs(x + 1, y)
        dfs(x, y + 1)
        return true;
    }
    return false;
}

let result = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (dfs(i, j) === true) {
            result++;
        }
    }
}

console.log(result);