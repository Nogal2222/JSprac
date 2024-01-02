const fs = require("fs");
const filePath = "input.txt";
let [n, k] = fs.readFileSync(filePath).toString().split(' ').map(i => Number(i.trim()));

let answer = n % k;
n -= answer;

while (n > 1) {
    n /= k;
    answer++;
}

console.log(answer);