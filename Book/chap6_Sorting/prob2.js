const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0])

let list = input.slice(1).map(line => {
    let [name, score] = line.split(' ');
    return {name, score: Number(score)};
}).sort((a, b) => a.score - b.score);

let answer = "";
for (let i = 0; i < list.length; i++) {
    answer += list[i].name + " ";
}
answer.trim()

console.log(answer)