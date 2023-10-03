const fs = require("fs");
const input = fs.readFileSync("prob1.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const N = Number(input[0]);

let students = Array.from(input.slice(1).map(item => item.split(' ').map(i => isNaN(i) ? i : Number(i))));

students.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[3] !== b[3]) return b[3] - a[3];
    return a[0].localeCompare(b[0]);
})

for (let i = 0; i < N; i++) {
    console.log(students[i][0])
}