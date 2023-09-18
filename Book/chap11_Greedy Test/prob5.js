const fs = require("fs");
const input = fs.readFileSync("prob5.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);

for (let t = 1; t < tc + 1; t++) {
    let [n, m] = input[2 * t - 1].split(' ').map(Number)
    let balls = input[2 * t].split(' ').map(Number)

    let weights = Array(11).fill(0);
    
    for (let ball of balls) {
        weights[ball] += 1;
    }

    let result = 0;

    for (let i = 1; i < m + 1; i++) {
        n -= weights[i]
        result += weights[i] * n
    }

    console.log(result);
}