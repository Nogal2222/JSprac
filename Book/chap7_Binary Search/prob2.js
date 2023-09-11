const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function binarySearch(array, target, start, end) {
    while (start <= end) {
        let total = 0;
        let mid = parseInt((start + end) / 2);

        array.forEach(ddeok => {
            if (ddeok > mid) {
                total += ddeok - mid;
            }
        });
        
        if (total < target) {
            end = mid - 1;
        } else {
            result = mid;
            start = mid + 1
        }
    }
    return result;
}

const [[N, M], ddeoks] = input.map((part) => part.replace('\r', '').split(' ').map(Number));

let start = 0;
let end = Math.max(...ddeoks);

console.log(binarySearch(ddeoks, M, start, end));