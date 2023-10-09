const fs = require("fs");
const input = fs.readFileSync("prob2.txt").toString().split('\n').map(item => item.replace('\r', ''));

const n = Number(input[0]);
let triangle = input.slice(1).map(item => item.split(' ').map(Number));
let up_left, up;

for (let i = 1; i < n; i ++) {
    for (let j = 0; j < i + 1; j++) {
        if (j === 0) {
            up_left = 0;
        } else {
            up_left = triangle[i - 1][j - 1];
        }

        if (j === i) {
            up = 0;
        } else {
            up = triangle[i - 1][j]
        }
        
        triangle[i][j] = triangle[i][j] + Math.max(up_left, up);
    }
}

console.log(Math.max(...triangle[n - 1]));