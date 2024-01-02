const fs = require("fs");
const filePath = "input.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(item => item.trim().split(' ').map(Number));

let [n, m, k] = input[0];
let nums = input[1].sort((a, b) => b - a);

let quote = Math.floor(m / (k + 1));
let remain = m % (k + 1);

let answer = ((nums[0] * k + nums[1]) * quote) + (nums[0] * remain);

console.log(answer);