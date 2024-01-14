const fs = require("fs");
const filePath = "input.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(line => line.trim());

let T = Number(input[0])
let line = 1;

for (let t = 0; t < T; t++) {
    let [n, k] = input[line++].split(' ').map(Number);
    let times = [0].concat(input[line++].split(' ').map(Number)); 
    let orders = input.slice(line, line + k).map(item => item.split(' ').map(Number));
    line += k;
    
    let seq = Array.from({length: n + 1}, () => []);
    let dp = Array(n + 1).fill(0);
    let inDegree = Array(n + 1).fill(0);

    for (let i = 0; i < k; i++) {
        let [a, b] = orders[i];
        seq[a].push(b);
        inDegree[b] += 1;
    }

    let q = [];

    for (let j = 1; j < n + 1; j++) {
        if (inDegree[j] == 0) {
            q.push(j);
            dp[j] = times[j];;
        }
    }

    while (q.length != 0) {
        let c = q.shift();

        for (let d of seq[c]) {
            inDegree[d] -= 1;
            dp[d] = Math.max(dp[c] + times[d], dp[d]);

            if (inDegree[d] == 0) {
                q.push(d);
            }
        }
    }

    let last = Number(input[line++]);
    console.log(dp[last]);
}