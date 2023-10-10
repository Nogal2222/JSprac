const fs = require("fs");
const input = fs.readFileSync('prob5.txt').toString().split('\n').map(item => item.trim());

const tc = Number(input[0]);

for (let t = 1; t < tc + 1; t++) {
    let n = Number(input[t]);

    let ugly = Array(n).fill(0);
    ugly[0] = 1;

    let i2 = 0, i3 = 0, i5 = 0;
    let next2 = 2, next3 = 3, next5 = 5;

    for (let l = 1; l < n; l++) {
        ugly[l] = Math.min(next2, next3, next5);

        if (ugly[l] == next2) {
            i2 += 1;
            next2 = ugly[i2] * 2;
        }

        if (ugly[l] == next3) {
            i3 += 1;
            next3 = ugly[i3] * 3;
        }

        if (ugly[l] == next5) {
            i5 += 1;
            next5 = ugly[i5] * 5;
        }
    }

    console.log(ugly[n-1])
}