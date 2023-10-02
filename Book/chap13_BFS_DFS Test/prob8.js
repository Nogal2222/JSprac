function get_next_pos(pos, board) {
    let next_pos = [];
    let [pos1_x, pos1_y, pos2_x, pos2_y] = [pos[0][0], pos[0][1], pos[1][0], pos[1][1]];

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
        let [pos1_next_x, pos1_next_y, pos2_next_x, pos2_next_y] = [pos1_x + dx[i], pos1_y + dy[i], pos2_x + dx[i], pos2_y + dy[i]];

        if (board[pos1_next_x][pos1_next_y] === 0 && board[pos2_next_x][pos2_next_y] === 0) {
            next_pos.push([[pos1_next_x, pos1_next_y], [pos2_next_x, pos2_next_y]]);
        }
    }

    if (pos1_x === pos2_x) {
        for (let i of [-1, 1]) {
            if (board[pos1_x + i][pos1_y] === 0 && board[pos2_x][pos2_y + i] === 0) {
                next_pos.push([[pos1_x, pos1_y], [pos1_x + i, pos1_y]]);
                next_pos.push([[pos2_x, pos2_y], [pos2_x + i, pos2_y]]);
            }
        }
    } else if (pos1_y === pos2_y) {
        for (let i of [-1, 1]) {
            if (board[pos1_x][pos1_y + i] === 0 && board[pos2_x][pos2_y + i] === 0) {
                next_pos.push([[pos1_x, pos1_y], [pos1_x, pos1_y + i]]);
                next_pos.push([[pos2_x, pos2_y], [pos2_x, pos2_y + i]]);
            }
        }
    }

    return next_pos;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function solution(board) {
    let n = board.length;
    let new_board = Array.from({length: n + 2}, () => Array(n + 2).fill(1));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            new_board[i + 1][j + 1] = board[i][j];
        }
    }

    let q = [];
    let visited = [];
    let pos = [[1, 1], [1, 2]];
    q.push([pos, 0]);
    visited.push(pos);

    while(q.length > 0) {
        let [pos, cost] = q.shift();
        let found = pos.some(pair => pair[0] === n && pair[1] === n);
        if (found) {
            return cost;
        }

        for (let next_pos of get_next_pos(pos, new_board)) {
            let isVisited = visited.some(pos => arraysEqual(pos, next_pos));

            if (!isVisited) {
                q.push([next_pos, cost + 1]);
                visited.push(next_pos);
            }
        }
    }
    return 0;
}

const fs = require("fs");
const input = fs.readFileSync("prob8.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

let board = input.map(item => item.split(' ').map(Number));

console.log(solution(board));