const fs = require("fs");
const filePath = "input.txt";
const input = fs.readFileSync(filePath).toString().split('\n').map(i => i.trim());

let n = Number(input[0]);
let orders = input[1].split(' ').map(i => i.trim());

let [y, x] = [1, 1];

for (let order of orders) {
    switch (order) {
        case 'R':
            if (x < n) {
                x++;
            }
            break;
        
        case 'L':
            if (x > 1) {
                x--;
            }
            break;
        
        case 'U':
            if (y > 1) {
                y--;
            }
            break;
        
        case 'D':
            if (y < n) {
                y++;
            }
            break;
        
        default:
            break;
    }
}

console.log(y, x);