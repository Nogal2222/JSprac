const fs = require("fs");
const filePath = "input.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split(' ').map(Number)).slice(1);

let picks = [];

for (let nums of input) {
    picks.push(Math.min(...nums));
}

console.log(Math.max(...picks));