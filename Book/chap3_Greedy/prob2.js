const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(' ').map(n => parseInt(n));
let board = [];

for (let i = 1; i < N + 1; i++) {
    let list = input[i].split(' ').map(n => parseInt(n));
    board.push(list);
}

let answer = Math.min(...board[0]);

for (let j = 1; j < N; j++) {
    let row_least = Math.min(...board[j])
    if (row_least > answer) {
        answer = row_least;
    }
}

console.log(answer);