const fs = require("fs");
const input = fs.readFileSync("prob2.txt").toString().trim().split("\n").map(item => item.replace('\r', ''));

const tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
    let nums = input[i].split('').map(Number);
    let result = nums[0];

    for (let j = 1; j < nums.length; j++) {
        if (nums[j - 1] === 0 || nums[j - 1] === 1) {
            result += nums[j];
        } else {
            result *= nums[j];
        }
    }

    console.log(result)
}