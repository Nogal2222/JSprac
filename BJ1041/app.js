const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().split('\n');

let N = parseInt(inputs[0]);
let dice = inputs[1].split(' ').map(value => parseInt(value));

let minAF = Math.min(dice[0], dice[5]);
let minBE = Math.min(dice[1], dice[4]);
let minCD = Math.min(dice[2], dice[3]);

let one = Math.min(minAF, Math.min(minBE, minCD));
let two = Math.min(minAF + minBE, Math.min(minAF + minCD, minBE + minCD));
let three = minAF + minBE + minCD;

let sum = minSum();

console.log(sum);

function minSum() {
    let sum = 0;
    if (N === 1) {
        let max = Math.max(...dice);
        sum = dice.reduce((a, b) => a + b, 0);
        return sum - max;
    }

    let oneSide = 4 * (N - 1) * (N - 2) + (N - 2) * (N - 2);
    let secondSide = 4 * (N - 1) + 4 * (N - 2);
    let thirdSide = 4;

    sum += one * oneSide + two * secondSide + three * thirdSide;
    return sum;
}