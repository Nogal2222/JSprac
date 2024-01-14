const fs = require("fs");
const filePath = "input.txt";
const n = Number(fs.readFileSync(filePath).toString().trim());

let answer = 1575;

switch (true) {
    case n < 3:
        answer += (1575 * n);
        break;
    case 3 <= n && n < 13:
        answer += ((1575 * (n - 1)) + 3600);
        break;
    case 13 <= n && n < 23:
        answer += ((1575 * (n - 2)) + 7200);
        break;
    case n == 23:
        answer += ((1575 * (n - 3)) + 10800);
        break;
    default:
        answer = 'ERROR'
}

console.log(answer);