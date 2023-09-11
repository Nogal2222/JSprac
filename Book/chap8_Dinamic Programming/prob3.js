const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const container = input[1].split(' ').map(Number);

let d = new Array(100).fill(0);
d[0] = container[0];
d[1] = Math.max(container[0], container[1]);

for(let i = 2; i < N; i++) {
    d[i] = Math.max(d[i-1], d[i-2] + container[i])
}

console.log(d[N-1])

