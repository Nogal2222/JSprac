const fs = require("fs");
const input = fs.readFileSync("prob1.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);

for (let t = 0; t < tc; t++) {
    let [n, m] = input[2 * t + 1].split(' ').map(Number);
    let data = input[2 * t + 2].split(' ').map(Number);
    let mine = [];
    let idx = 0, left_up, left_down, left;

    for (let i = 0; i < n; i++) {
        mine.push(data.slice(idx, idx + m));
        idx += m;
    }
    
    for (let j = 1; j < m; j++) {
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                left_up = 0;
            } else {
                left_up = mine[i - 1][j - 1];
            }

            if (i === n - 1) {
                left_down = 0;
            } else {
                left_down = mine[i + 1][j - 1];
            }

            left = mine[i][j - 1];
            mine[i][j] = mine[i][j] + Math.max(left_up, left_down, left);
        }
    }
    let result = 0;

    for (let i = 0; i < n; i++) {
        result = Math.max(result, mine[i][m-1]);
    }

    console.log(result);
}