function update_smell() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (smell[i][j][1] > 0) {
                smell[i][j][1] -= 1;
            }

            if (array[i][j] != 0) {
                smell[i][j] = [array[i][j], k];
            }
        }
    }
}

function move() {
    let new_array = Array.from({ length: n }, () => Array(n).fill(0));

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (array[x][y] != 0) {
                let direction = directions[array[x][y] - 1];
                let found = false;

                for (let index = 0; index < 4; index++) {
                    let nx = x + dx[priorities[array[x][y] - 1][direction - 1][index] - 1];
                    let ny = y + dy[priorities[array[x][y] - 1][direction - 1][index] - 1];

                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        if (smell[nx][ny][1] == 0) {
                            directions[array[x][y] - 1] = priorities[array[x][y] - 1][direction - 1][index];
                            
                            if (new_array[nx][ny] == 0) {
                                new_array[nx][ny] = array[x][y];
                            } else {
                                new_array[nx][ny] = Math.min(new_array[nx][ny], array[x][y]);
                            }

                            found = true;
                            break;
                        }
                    }
                }

                // 'found'가 true라면, 두 번째 for 루프를 실행하지 않도록 변경
                if (found) continue; // <-- 수정된 부분

                for (let index = 0; index < 4; index++) {
                    let nx = x + dx[priorities[array[x][y] - 1][direction - 1][index] - 1];
                    let ny = y + dy[priorities[array[x][y] - 1][direction - 1][index] - 1];

                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        if (smell[nx][ny][0] == array[x][y]) {
                            directions[array[x][y] - 1] = priorities[array[x][y] - 1][direction - 1][index];
                            new_array[nx][ny] = array[x][y];
                            break;
                        }
                    }
                }
            }
        }
    }
    return new_array;
}

const fs = require("fs");
const input = fs.readFileSync('prob3.txt').toString().split('\n').map(item => item.trim());
const tc = Number(input[0]);
let line = 1;
let n, m, k, array, directions, smell, priorities, dx, dy;

for (let t = 0; t < tc; t++) {
    [n, m, k] = input[line].split(' ').map(Number);
    array = input.slice(line + 1, line + 1 + n).map(item => item.split(' ').map(Number));
    directions = input[line + 1 + n].split(' ').map(Number);
    smell = Array.from({length: n}, () => Array(n).fill([0, 0]))
    priorities = [];

    for (let i = 0; i < m; i++) {
        priorities.push(input.slice(line + n + 2 + (4 * i), line + n + 6 + (4 * i)).map(item => item.split(' ').map(Number)));
    }

    dx = [-1, 1, 0, 0];
    dy = [0, 0, -1, 1];
    
    line += n + 2 + (4 * m);

    let time = 0;

    while (true) {
        update_smell();
        let new_array = move();
        array = new_array;
        time += 1;

        let check = true;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (array[i][j] > 1) {
                    check = false;
                }
            }
        }

        if (check == true) {
            console.log(time);
            break;
        }

        if (time >= 1000) {
            console.log(-1);
            break;
        }
    }
}