const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = parseInt(input[0]);
let array = input[1].split(' ').map(value => parseInt(value));
let S = parseInt(input[2]);

for (let i = 0; i < N; i++) {
    let pos = i;
    for (let j = i + 1; j < N; j++) {
        if (j - i > S) break;
        if (array[j] > array[pos]) {
            pos = j;
        }
    }

    while (pos != i) {
        let temp = array[pos];
        array[pos] = array[pos - 1];
        array[pos - 1] = temp;
        pos--;
        S--;
    }
}

let answer = array.join(' ');
console.log(answer);