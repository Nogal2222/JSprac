const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = parseInt(fs.readFileSync(filePath).toString().trim());

let d = new Array(1000).fill(0);
[d[1], d[2]] = [1, 3];

for (let i = 3; i < N + 1; i++) {
    d[i] = (d[i-1] + 2 * d[i-2])%796796;
}

console.log(d[N]);