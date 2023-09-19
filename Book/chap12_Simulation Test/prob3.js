const fs = require("fs");
const input = fs.readFileSync("prob3.txt").toString().trim().split('\n');

const tc = Number(input[0]);

for (let t = 1; t < tc + 1; t++) {
    let s = input[t];
    let answer = s.length;

    for (let step = 1; step < Math.floor(s.length / 2) + 1; step++) {
        let compressed = '';
        let prev = s.slice(0, step);
        let count = 1;

        for (let j = step; j < s.length; j += step) {
            if (prev === s.slice(j, j + step)) {
                count += 1;
            } else {
                compressed += (count >= 2 ? String(count) : '') + prev;
                prev = s.slice(j, j + step);
                count = 1;
            }
        }

        compressed += (count >= 2 ? String(count) : '') + prev;
        answer = Math.min(answer, compressed.length);
    }

    console.log(answer);
}
