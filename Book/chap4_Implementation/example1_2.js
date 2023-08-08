const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = parseInt(input[0]);
let order = input[1].split(' ');
let [x, y] = [1, 1];

let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];
let move = ["L", "R", "U", "D"];

for (let i = 0; i < order.length; i++) {
    let nx, ny;
    
    for (let j = 0; j < move.length; j++) {
        if (order[i] === move[j]) {
            nx = x + dx[j];
            ny = y + dy[j];
        }
    }

    if (nx < 1 || ny < 1 || nx > N || ny > N) {
        continue;
    }
    x = nx;
    y = ny;
}

console.log(x, y);