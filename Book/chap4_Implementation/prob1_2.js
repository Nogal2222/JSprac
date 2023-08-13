const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const columns = "abcdefgh";
const x = columns.indexOf(input[0]) + 1;
const y = parseInt(input[1]);

const moves = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
];

function isValidMove(nx, ny) {
    return nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8;
}

let count = moves.filter(move => isValidMove(x + move[0], y + move[1])).length;

console.log(count);