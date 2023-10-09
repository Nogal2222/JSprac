const fs = require("fs");
const input = fs.readFileSync('prob3.txt').toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);
let line = 1;

for (let t = 0; t < tc; t++) {
    let n = Number(input[line]);
    let data = input.slice(line + 1, line + 1 + n).map(item => item.split(' ').map(Number));
    line += n + 1;
    
    let dp = Array(n + 1).fill(0);
    let maxV = 0;

    for (let i = n - 1; i > -1; i--) {
        let time = data[i][0] + i;

        if (time <= n) {
            dp[i] = Math.max(data[i][1] + dp[time], maxV);
            maxV = dp[i]
        } else {
            dp[i] = maxV;
        }
    }

    console.log(maxV);
}