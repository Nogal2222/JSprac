function solution(N, stages) {
    let answer = [];
    let len = stages.length;

    for (let i = 1; i < N + 1; i++) {
        let count = stages.filter(value => value === i).length;
        let fail;

        if (len === 0) {
            fail = 0;    
        } else {
            fail = count / len;
        }

        answer.push([i, fail]);
        len -= count;
    }
    answer.sort((a, b) => b[1] - a[1]);
    answer = answer.map(i => i[0]);

    return answer;
}

const fs = require("fs");
const input = fs.readFileSync("prob3.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);

for (let t = 0; t < tc; t++) {
    let N = Number(input[2 * t + 1]);
    let stages = input[2 * t + 2].split(' ').map(Number);

    console.log(solution(N, stages));
}