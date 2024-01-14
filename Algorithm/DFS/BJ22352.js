const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./BJ22352.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim().split(' ').map(Number));

let [n, m] = input[0]; // n = row / m = column
let before = input.slice(1, n + 1);
let after = input.slice(n + 1, 2 * n + 1);
let kind_after = [];

for (let row of after) {
    let temp = new Set(row);
    for (let i of temp) {
        if (!kind_after.includes(i)) {
            kind_after.push(i);
        }
    }

}
// 상 하 좌 우
let dr = [-1, 1, 0, 0];
let dc = [0, 0, -1, 1];

function copy(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push([...array[i]]);
    }

    return result;
}

function dfs(cur_r, cur_c, array, original, target, visited) {
    if (cur_r < 0 || cur_r >= n || cur_c < 0 || cur_c >= m) return;
    if (visited[cur_r][cur_c] || array[cur_r][cur_c] !== original) return;

    visited[cur_r][cur_c] = true;
    array[cur_r][cur_c] = target;

    for (let i = 0; i < 4; i++) {
        let next_r = cur_r + dr[i];
        let next_c = cur_c + dc[i];
        dfs(next_r, next_c, array, original, target, visited);
    }
}

function arraysEqual(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            if (a[i][j] !== b[i][j]) {
                return false;
            }
        }
    }
    return true;
}

let flag = arraysEqual(before, after); // 초기에 before와 after가 같은지 확인

if (!flag) {
    for (let r = 0; r < n && !flag; r++) {
        for (let c = 0; c < m && !flag; c++) {
            if (before[r][c] !== after[r][c]) {
                let copy_before = copy(before);
                let visited = Array.from({length: n}, () => Array(m).fill(false));
                
                dfs(r, c, copy_before, before[r][c], after[r][c], visited);
                
                if (arraysEqual(copy_before, after)){
                    flag = true;
                }
            }
        }
    }
}

console.log(flag ? "YES" : "NO");