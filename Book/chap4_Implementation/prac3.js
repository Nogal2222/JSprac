const fs = require("fs");
const filePath = "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let [column, row] = input.split('');

let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let columnIndex = columns.indexOf(column);
let rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
let rowIndex = rows.indexOf(row);
let steps = [
    [1, 2], [1, -2],
    [2, 1], [2, -1],
    [-1, 2], [-1, -2],
    [-2, 1], [-2, -1]
];
let answer = 0;

for (let i = 0; i < 8; i++) {
    if (columnIndex - steps[i][0] > -1 && rowIndex - steps[i][1] > - 1) {
        answer++;
    }
}

console.log(answer);