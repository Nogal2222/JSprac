const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = parseInt(input[0]);
let order = input[1].split(' ')

current = [1, 1];

for (let j = 0; j < order.length; j++) {
    switch (order[j]) {
        case "L":
            if (current[1] > 1) {
                current[1]--;
            }
            break;
        case "R":
            if (current[1] < N) {
                current[1]++;
            }
            break;
        case "U":
            if (current[0] > 1) {
                current[0]--;
            }
            break;
        case "D":
            if (current[0] < N) {
                current[0]++;
            }
            break;
    }
}
console.log(current[0], current[1]);