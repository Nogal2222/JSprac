function turn_left (direction) {
    return (direction + 1) % 8;
}

function find_fish(array, index) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (array[i][j][0] == index) {
                return [i, j];
            }
        }
    }
    return null;
}

function move_all_fishes(array, now_x, now_y) {
    for (let i = 1; i < 17; i++) {
        let position = find_fish(array, i);

        if (position != null) {
            let [x, y] = [position[0], position[1]];
            let direction = array[x][y][1];

            for (let j = 0; j < 8; j++) {
                let nx = x + dx[direction];
                let ny = y + dy[direction];

                if (nx >= 0 && nx < 4 && ny >= 0 && ny < 4) {
                    if (!(nx == now_x && ny == now_y)) {
                        array[x][y][1] = direction;
                        [array[x][y], array[nx][ny]] = [array[nx][ny], array[x][y]];
                        break;
                    }
                }
                direction = turn_left(direction);
            }
        }
    }
}

function get_possible_positions(array, now_x, now_y) {
    let positions = [];
    let direction = array[now_x][now_y][1];

    for (let i = 0; i < 4; i++) {
        now_x += dx[direction];
        now_y += dy[direction];

        if (now_x >= 0 && now_x < 4 && now_y >= 0 && now_y < 4) {
            if (array[now_x][now_y][0] != -1) {
                positions.push([now_x, now_y]);
            }
        }
    }
    return positions;
}

function dfs(array, now_x, now_y, total) {
    array = array.map(row => [...row]);
    total += array[now_x][now_y][0];
    array[now_x][now_y][0] = -1;

    move_all_fishes(array, now_x, now_y);

    let positions = get_possible_positions(array, now_x, now_y);
    
    if (positions.length == 0) {
        result = Math.max(result, total);
        return
    }

    for (let [next_x, next_y] of positions) {
        dfs(array, next_x, next_y, total);
    }
}

const { dir } = require("console");
const fs = require("fs");
const input = fs.readFileSync("prob2.txt").toString().split('\n').map(item => item.trim());
const tc = Number(input[0]);
let dx, dy, result;

for (let t = 0; t < tc; t++) {
    let array = Array.from({length: 4}, () => Array(4).fill(null));

    for (let i = 1; i < 5; i++) {
        let data = input[4 * t + i].split(' ').map(Number);

        for (let j = 0; j < 4; j++) {
            array[i-1][j] = [data[2 * j], data[2 * j + 1] - 1]
        }
    }

    dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    dy = [0, -1, -1, -1, 0, 1, 1, 1];
    result = 0;

    dfs(array, 0, 0, 0);

    console.log(result);
}