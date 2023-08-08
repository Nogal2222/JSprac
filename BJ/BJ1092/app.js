const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let cranes = parseInt(input[0]);
let weightLimit = input[1].split(' ').map(value => parseInt(value)).sort((a, b) => b - a);
let boxes = parseInt(input[2]);
let boxWeight = input[3].split(' ').map(value => parseInt(value)).sort((a, b) => b - a);

if (boxWeight[0] > weightLimit[0]) {
    console.log(-1);
    process.exit();
}

let positions = Array(cranes).fill(0);
let checked = Array(boxes).fill(false);
let minutes = 0;
let count = 0;

while (true) {
    if (count === boxes) {
        console.log(minutes);
        break;
    }

    for (let i = 0; i < cranes; i++) {
        while (positions[i] < boxes) {
            if (!checked[positions[i]] && weightLimit[i] >= boxWeight[positions[i]]){
                checked[positions[i]] = true;
                positions[i]++;
                count++;
                break;
            }

            positions[i]++;
        }
    }
    minutes++;
}