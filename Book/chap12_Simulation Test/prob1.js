const fs = require("fs");
const input = fs.readFileSync("prob1.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);

for (let t = 1; t < tc + 1; t++) {
    let score = input[t];
    let halfLength = score.length / 2;

    let scoreL = score.substring(0, halfLength).split('').map(Number);
    let scoreR = score.substring(halfLength).split('').map(Number);

    let sumL = scoreL.reduce((acc, val) => acc + val, 0);
    let sumR = scoreR.reduce((acc, val) => acc + val, 0);

    if (sumL === sumR) {
        console.log("LUCKY");
    } else {
        console.log("READY");
    }
}