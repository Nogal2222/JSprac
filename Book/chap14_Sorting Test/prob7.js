const fs = require("fs");
const input = fs.readFileSync("prob7.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const [N, C] = input[0].split(' ').map(Number);
let array = input.slice(1).map(Number);
array.sort((a, b) => a - b);

let start = 1;
let end = array[array.length - 1] - array[0];
let result = 0;

while (start <= end) {
    let mid = Math.floor( (start + end) / 2 );
    let value = array[0];
    let count = 1;

    for (let i = 1; i < N; i++) {
        if (array[i] >= value + mid) {
            value = array[i];
            count += 1;
        }
    }

    if (count >= C) {
        start = mid + 1;
        result = mid;
    } else {
        end = mid - 1;
    }
}

console.log(result);