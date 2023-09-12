const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

let d = new Array(M+1).fill(10001);
d[0] = 0;

for (let i = 0; i < N; i++) {
    for (let j = coins[i]; j < M + 1; j++) {
        if (d[j - coins[i]] !== 10001) {
            d[j] = Math.min(d[j], d[j - coins[i]] + 1);
        }
    }
}

if (d[M] == 10001) {
    console.log(-1);
} else {
    console.log(d[M]);
    console.log(d);
}