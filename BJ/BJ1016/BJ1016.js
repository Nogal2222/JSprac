const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [minN, maxN] = fs.readFileSync(filePath).toString().split(' ').map(item => Number(item.trim()));
let answer = maxN - minN + 1;
let nest = Array(answer).fill(false);

for (let i = 2; i <= Math.sqrt(maxN); i++) {
    let square = i ** 2;
    let start = Math.floor((minN + square - 1) / square) * square;

    for (let j = start; j <= maxN; j += square) {
        if (!nest[j - minN]) {
            nest[j - minN] = true;
            answer -= 1;
        }
    }
}

console.log(answer);