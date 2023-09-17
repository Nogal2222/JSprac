const fs = require("fs");
const input = fs.readFileSync("prob1.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const n = Number(input[0]);
let X = input[1].split(' ').map(Number).sort((a, b) => a - b);

let groups = 0;
let members = 0;

for (let i of X) {
    members++;

    if (members >= i) {
        groups++;
        members = 0;
    }
}

console.log(groups);