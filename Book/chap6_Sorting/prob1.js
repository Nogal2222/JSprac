const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input[0];
const newArray = input.slice(1).sort((a, b) => (b - a));
let result = "";

for (let i = 0; i < newArray.length; i++) {
    result += newArray[i] + " "
}
result.trim()
console.log(result);