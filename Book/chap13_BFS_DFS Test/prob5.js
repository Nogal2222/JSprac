function dfs(i, now) {
    if (i === N) {
        minV = Math.min(minV, now);
        maxV = Math.max(maxV, now);
    } else {
        if (add > 0) {
            add -= 1;
            dfs(i + 1, now + A[i]);
            add += 1;
        }
        if (sub > 0) {
            sub -= 1;
            dfs(i + 1, now - A[i]);
            sub += 1;
        }
        if (mul > 0) {
            mul -= 1;
            dfs(i + 1, now * A[i]);
            mul += 1;
        }
        if (div > 0) {
            div -= 1;
            dfs(i + 1, parseInt(now / A[i]));
            div += 1;
        }
    }
}

const fs = require("fs");
const input = fs.readFileSync("prob5.txt").toString().trim().split('\n').map(item => item.replace("\r", ""));

const tc = Number(input[0]);
let N, A, add, sub, mul, div, minV, maxV

    
for (let t = 0; t < tc; t++) {
    N = Number(input[3 * t + 1]);
    A = input[3 * t + 2].split(" ").map(Number);
    [add, sub, mul, div] = input[3 * t + 3].split(" ").map(Number);
    
    minV = 1e9;
    maxV = -1e9;

    dfs(1, A[0]);

    console.log(maxV);
    console.log(minV);
}