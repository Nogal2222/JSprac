const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = parseInt(fs.readFileSync(filePath).toString().trim());

let count = 0;

for (let i = 0; i < input+1; i++) {
    for (let j = 0; j < 60; j++) {
        for (let k = 0; k < 60; k++) {
            if ((String(i) + String(j) + String(k)).includes('3')) {
                count++;
            }
        }
    }
}

console.log(count);