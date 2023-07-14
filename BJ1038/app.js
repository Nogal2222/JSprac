const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input)
const descNum = [];
let answer = -1

function makeDescNum(num, len) {
    if (len > 10) return;

    descNum.push(num);
    for (let i = 0; i < 10; i++) {
        if (num % 10 > i) {
            makeDescNum((num * 10) + i, len + 1);
        }
    }
}

for (let i = 0; i < 10; i++) {
    makeDescNum(i, 1);
}

descNum.sort((a, b) => a - b);

if (descNum[N] !== undefined) {
    answer = descNum[N];
}

console.log(answer)
// console.log(descNum)