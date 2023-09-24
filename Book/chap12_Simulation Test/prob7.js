function combinations(arr, k) {
    let results = [];
    
    function combine(subarr, start, comb) {
        if (comb.length === k) {
            results.push([...comb]);
            return;
        }
        for (let i = start; i < subarr.length; i++) {
            comb.push(subarr[i]);
            combine(subarr, i + 1, comb);
            comb.pop();
        }
    }
    
    combine(arr, 0, []);
    return results;
}

function getSum(candidate, house) {
    let result = 0;

    for (let [hx, hy] of house) {
        let temp = 1e9;

        for (let [cx, cy] of candidate) {
            temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
        }

        result += temp;
    }

    return result;
}

const fs = require("fs");
const input = fs.readFileSync("prob7.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);
let line = 1;

for (let t = 0; t < tc; t++) {
    let [N, M] = input[line].split(' ').map(Number);
    let board = input.slice(line + 1, line + N + 1).map(item => item.split(' ').map(Number));
    line += N + 1;

    let [chicken, house] = [[], []];

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (board[r][c] === 1) {
                house.push([r, c]);
            } else if (board[r][c] === 2) {
                chicken.push([r, c]);
            }
        }
    }

    let candidates = combinations(chicken, M);
    let result = 1e9;

    for (let candidate of candidates) {
        result = Math.min(result, getSum(candidate, house));
    }

    console.log(result);
}