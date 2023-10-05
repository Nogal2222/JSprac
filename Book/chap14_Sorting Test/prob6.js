function binary_search (array, start, end) {
    if (start > end) {
        return null;
    }

    let mid = Math.floor( (start + end) / 2 );

    if (array[mid] === mid) {
        return mid;
    } else if (array[mid] > mid) {
        return binary_search(array, start, mid - 1);
    } else {
        return binary_search(array, mid + 1, end);
    }
}

const fs = require("fs");
const input = fs.readFileSync("prob6.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);
let N, array

for (let t = 0; t < tc; t++) {
    N = Number(input[2 * t + 1]);
    array = input[2 * t + 2].split(' ').map(Number);

    let index = binary_search(array, 0, N - 1);

    index === null ? console.log(-1) : console.log(index);
}