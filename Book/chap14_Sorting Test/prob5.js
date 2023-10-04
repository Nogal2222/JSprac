const fs = require("fs");
const input = fs.readFileSync("prob5.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);
let n, x, numbs
for (let t = 0; t < tc; t++) {
    [n, x] = input[2 * t + 1].split(' ').map(Number);
    numbs = input[2 * t + 2].split(' ').map(Number);

    // numbs.includes(x) ? console.log(numbs.filter(i => i === x).length) : console.log(-1)
    let count = count_by_value(numbs, x);

    count === 0 ? console.log(-1) : console.log(count);
}


// 이 문제는 시간복잡도 log N으로 풀어야 함.
function count_by_value (array, x) {
    let len = array.length;
    let a = first(array, x, 0, len - 1);

    if (a == null) {
        return 0;
    }

    let b = last(array, x, 0, len - 1);

    return b - a + 1;
}

function first (array, target, start, end) {
    if (start > end) {
        return null;
    }

    let mid = Math.floor((start + end) / 2);

    if (mid == 0 || target > array[mid - 1] && array[mid] == target) {
        return mid;
    } else if (array[mid] >= target) {
        return first(array, target, start, mid - 1);
    } else {
        return first(array, target, mid + 1, end);
    }
}

function last(array, target, start, end) {
    if (start > end) {
        return null;
    }

    let mid = Math.floor((start + end) / 2);

    if (mid == n - 1 || target < array[mid + 1] && array[mid] == target) {
        return mid;
    } else if (array[mid] > target) {
        return last(array, target, start, mid - 1);
    } else {
        return last(array, target, mid + 1, end);
    }
}