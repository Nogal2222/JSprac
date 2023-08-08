const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M, K] = input[0].split(' ').map(n => parseInt(n));
let list = input[1].split(' ').map(n => parseInt(n)).sort((a, b) => b - a);

let first = list[0];
let second = list[1];
let round = parseInt(M / (K + 1)); // 돌리는 횟수
let remain = M % (K + 1); // 남은 횟수

let answer = ((first * K + second) * round) + (first * remain);
console.log(answer);