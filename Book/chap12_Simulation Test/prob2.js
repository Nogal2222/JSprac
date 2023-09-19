const fs = require("fs");
const input = fs.readFileSync("prob2.txt").toString().trim().split('\n');

const tc = Number(input[0]);

for (let t = 1; t <= tc; t++) {
    const s = input[t];
    let str = [];
    let numbSum = 0;

    for (let i = 0; i < s.length; i++) {
        isNaN(s[i]) ? str.push(s[i]) : numbSum += Number(s[i]);
    }

    str.sort();
    console.log(`${str.join('')}${numbSum}`);
}
