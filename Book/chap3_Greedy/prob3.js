const fs = require("fs");
const filePath = process.platform === "linux" ?  '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let [N, K] = input.split(' ').map(n => parseInt(n));
let answer = 0;

// while (N > 1) {
//     if (N % K) {
//         N--;
//         answer++;
//     } else {
//         N = parseInt(N / K);
//         answer++;
//     }
// }

// 1씩 빼는 것보다는 한번에 배수로 만들어 횟수를 좀이라도 줄일 수 있게하면 더 빠름름
while (true) {
    let target = parseInt(N / K) * K;
    answer += (N - target);
    N = target;
    if (N < K) {
        break;
    }
    answer++;
    N = parseInt(N / K);
}

answer--;
console.log(answer);