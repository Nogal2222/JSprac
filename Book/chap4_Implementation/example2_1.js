const fs = require("fs");
const filePath = process.platfrom === "linux" ? "/dev/stdin" : "input.txt";
const input = parseInt(fs.readFileSync(filePath).toString().trim());

let answer;

if (input === 0) {
    answer = 1575;
} else if (0 < input && input < 3) {
    answer = 1575 * input;
} else if (3 <= input && input < 13) {
    answer = 3600 + (1575 * input);
} else if (13 <= input && input < 23) {
    answer = 7200 + (1575 * (input - 1));
} else if (input === 23) {
    answer = 10800 + (1575 * (input - 2));
};

console.log(answer)