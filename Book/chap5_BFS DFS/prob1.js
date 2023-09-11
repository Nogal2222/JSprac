const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(numb => parseInt(numb))
const map = input.slice(1).map(row => row.replace('\r', '').split("").map(Number))

function dfs(x, y) {
    if (x <= -1 || x >= N || y <= -1 || y >= M) {
        return false;
    }

    if (map[x][y] === 0) {
        map[x][y] = 1;
        dfs(x-1, y);
        dfs(x, y-1);
        dfs(x+1, y);
        dfs(x, y+1);
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