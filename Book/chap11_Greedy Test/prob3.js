const fs = require("fs");
const input = fs.readFileSync("prob3.txt").toString().trim().replace('\r', '');

let s = '';
s += input[0]

for (let i = 1; i < input.length; i++) {
    if (input[i] != input[i - 1]) {
        s += input[i];
    }
}

let result = Math.min(s.split('0').length - 1, s.split('1').length - 1);

console.log(result);