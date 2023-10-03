const fs = require("fs");
const input = fs.readFileSync("prob2.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const N = Number(input[0]);
let houses = input[1].split(' ').map(Number);
houses.sort();

console.log(houses[Math.floor((N - 1) / 2)]);