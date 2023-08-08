const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((line) => line.split('').map(Number));
let maxSquare = -1;


function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}

function dfs(x, y, diffX, diffY, num) {
    // 탈출조건
    if ( x < 0 || y < 0 || x >= N || y >=M ) return;
    
    num = num * 10 + board[x][y];
    if (isSquare(num)) maxSquare = Math.max(maxSquare, num);
    dfs(x + diffX, y + diffY, diffX, diffY, num); 
}

for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
        for (let dx = -N; dx < N; dx ++) {
            for (let dy = -M; dy < M; dy++) {
                if (dx === 0 && dy === 0) continue;
                dfs(x, y, dx, dy, 0);
            }
        }
    }
}

console.log(maxSquare)