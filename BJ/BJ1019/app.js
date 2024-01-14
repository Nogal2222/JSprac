const fs = require("fs");
const filePath = "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let n = Number(input);
let ans = Array(10).fill(0);

let point = 1;
let start = 1;

function calc(x) {
    while (x > 0) {
        ans[x % 10] += point;
        x = Math.floor(x / 10);
    }
}

while (start <= n) {
    while (n % 10 != 9) {
        calc(n);
        n -= 1;
    }

    if (n < start) {
        break;
    }

    while (start % 10 != 0) {
        calc(start);
    }

    start = Math.floor(start / 10);
    n = Math.floor(n / 10);

    for (let i = 0; i < 10; i++) {
        ans[i] += (n - start + 1) * point;
    }

    point *= 10;
}

let s = '';

for (let num of ans) {
    s += (String(num) + ' ')
}

s.trim();
console.log(s);