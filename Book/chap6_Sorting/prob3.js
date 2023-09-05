const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [[N, K], arrayA, arrayB] = input.map(part => part.replace('\r', '').split(' ').map(Number));

arrayA.sort((a, b) => a - b);
arrayB.sort((a, b) => b - a);

for (let i = 0; i < K; i++) {
    if (arrayA[i] < arrayB[i]) {
        [arrayA[i], arrayB[i]] = [arrayB[i], arrayA[i]];
    }
}

let answer = arrayA.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(answer);
