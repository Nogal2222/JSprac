const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function binarySearch(array, target, start, end) {
    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if (array[mid] === target) {
            return mid
        } else if (array[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return undefined;
}

const N = parseInt(input[0]);
const M = parseInt(input[2]);

const store = input[1].split(' ').map(Number).sort((a, b) => a - b);
const wanted = input[3].split(' ').map(Number).sort((a, b) => a - b);

wanted.forEach(item => {
    const result = binarySearch(store, item, 0, N - 1);

    if (result === undefined) {
        process.stdout.write("no ");
    } else {
        process.stdout.write("yes ");
    }
})