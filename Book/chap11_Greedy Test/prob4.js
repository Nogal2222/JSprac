const fs = require("fs");
const input = fs.readFileSync("prob4.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const N = Number(input[0]);
const coins = input[1].split(' ').map(Number);
coins.sort((a, b) => a - b);

let target = 1;

for (let coin of coins) {
    if (target < coin) {
        break;
    }
    target += coin;
}

console.log(target);