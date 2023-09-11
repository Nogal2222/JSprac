const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let d = new Array(30001).fill(0);

rl.question('', (inputData) => {
    const X = parseInt(inputData);
    
    for (let i = 2; i < X + 1; i++) {
        d[i] = d[i - 1] + 1;

        if (i % 2 == 0) {
            d[i] = Math.min(d[i], d[parseInt(i/2)] + 1);
        } else if (i % 3 == 0) {
            d[i] = Math.min(d[i], d[parseInt(i/3)] + 1);
        } else if (i % 5 == 0) {
            d[i] = Math.min(d[i], d[parseInt(i/5)] + 1);
        }
    }
    console.log(d);
    rl.close();
})