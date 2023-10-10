const fs = require("fs");
const input = fs.readFileSync("prob4.txt").toString().split('\n').map(item => item.trim());

let n = Number(input[0]);
let array = input[1].split(' ').map(Number);
array.reverse();

let dp = Array(n).fill(1);


for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (array[j] < array[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}
console.log(n - Math.max(...dp));