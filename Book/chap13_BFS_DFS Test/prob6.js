function* combinations(iterable, r) {
    // Generator function to yield combinations
    let pool = Array.from(iterable);
    let n = pool.length;
    
    if (r > n) {
        return;
    }
    
    let indices = Array.from({length: r}, (_, i) => i);
    
    yield indices.map(i => pool[i]);
    
    while (true) {
        let i;
        for (i = r - 1; i >= 0; i--) {
            if (indices[i] !== n - r + i) {
                break;
            }
        }
        if (i === -1) {
            return;
        }
        
        indices[i]++;
        for (let j = i+1; j < r; j++) {
            indices[j] = indices[j-1] + 1;
        }
        
        yield indices.map(i => pool[i]);
    }
}

function watch(x, y, dir) {
    if (dir == 0) {
        while (y >= 0) {
            if (board[x][y] == 'S') {
                return true;
            } else if (board[x][y] == 'O') {
                return false;
            }
            y -= 1;
        }
    } else if (dir == 1) {
        while (y < N) {
            if (board[x][y] == 'S') {
                return true;
            } else if (board[x][y] == 'O') {
                return false;
            }
            y += 1;
        }
    } else if (dir == 2) {
        while (x >= 0) {
            if (board[x][y] == 'S') {
                return true;
            } else if (board[x][y] == 'O') {
                return false;
            }
            x -= 1;
        }
    } else if (dir == 3) {
        while (x < N) {
            if (board[x][y] == 'S') {
                return true;
            } else if (board[x][y] == 'O') {
                return false;
            }
            x += 1;
        }
    }
    return false;
}

function process() {
    for(let [x, y] of teachers) {
        for (let i = 0; i < 4; i++) {
            if (watch(x, y, i)) {
                return true;
            }
        }
    }
    return false;
}

const fs = require("fs");
const input = fs.readFileSync("prob6.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const tc = Number(input[0]);
let line = 1;
let N, board, teachers, spaces, find

for (let t = 0; t < tc; t++) {
    N = Number(input[line])
    board = input.slice(line + 1, line + 1 + N).map(item => item.split(' '));
    line += N + 1;
    
    teachers = [];
    spaces = [];
    find = false;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] == 'T') {
                teachers.push([i, j]);
            } else if (board[i][j] == 'X') {
                spaces.push([i, j])
            }
        }
    }

    for (let space of combinations(spaces, 3)) {
        for (let [x, y] of space) {
            board[x][y] = 'O';
        }

        if (!process()) {
            find = true;
            break;
        }
        
        for (let [x, y] of space) {
            board[x][y] = 'X';
        }
    }
    if (find) {
        console.log("YES");
    } else {
        console.log("NO")
    }
}