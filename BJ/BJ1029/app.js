const fs = require("fs");
const filePath = "input.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(item => item.trim());

const n = Number(input[0]);
let graph = input.slice(1).map(item => item.split('').map(i => Number(i)));

let dp = new Map();
dp.set(1, Array.from({length: n}, () => Array(10).fill(0)));

function dfs(visit, s, p) {
    // dp.get(visit)을 사용하여 키에 대한 값 가져오기
    if (!dp.has(visit)) {
        dp.set(visit, Array.from({length: n}, () => Array(10).fill(0)));
    }
    
    // dp.get(visit)을 사용하여 키에 대한 값 가져오기
    let visitData = dp.get(visit);
    if (visitData[s][p] !== 0) {
        return visitData[s][p];
    }

    let cnt = 0;

    for (let i = 0; i < n; i++) {
        if ((visit & (1 << i)) === 0) {
            if (p <= graph[s][i]) {
                cnt = Math.max(cnt, dfs(visit | (1 << i), i, graph[s][i]) + 1);
            }
        }
    }

    visitData[s][p] = cnt;
    return cnt;
}
console.log(dfs(1, 0, 0) + 1);