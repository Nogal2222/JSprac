function edit_dist(str1, str2) {
    let a1 = str1.split(''), a2 = str2.split('');
    let n = a1.length, m = a2.length;

    let dp = Array.from( {length : n + 1}, () => Array(m + 1).fill(0));

    for (let i = 1; i < n + 1; i++) {
        dp[i][0] = i;
    }

    for (let j = 1; j < m + 1; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            if (a1[i-1] === a2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]);
            }
        }
    }

    return dp[n][m];
}

const fs = require("fs");
const input = fs.readFileSync("prob6.txt").toString().split("\n").map(item => item.trim());
const tc = Number(input[0]);

for (let t = 0; t < tc; t++) {
    let str1 = input[2 * t + 1];
    let str2 = input[2 * t + 2];
    console.log(str1, str2)
    console.log(edit_dist(str1, str2));
}