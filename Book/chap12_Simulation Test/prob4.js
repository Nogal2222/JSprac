function rotate90(array) {
    let n = array.length;
    let m = array[0].length;
    let result = Array.from({ length: m }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            result[j][n-i-1] = array[i][j]
        }
    }
    
    return result;
}

function check(newLock) {
    let lockLength = Math.floor(newLock.length / 3);

    for (let i = lockLength; i < lockLength * 2; i++) {
        for (let j = lockLength; j < lockLength * 2; j++) {
            if (newLock[i][j] != 1) {
                return false;
            }
        }
    }

    return true;
}

function solution(key, lock) {
    let n = lock.length;
    let m = key.length;

    let newLock = Array.from({ length: n * 3 }, () => Array(n * 3).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            newLock[i + n][j + n] = lock[i][j];
        }
    }

    for (let rotation = 0; rotation < 4; rotation++) {
        key = rotate90(key);

        for (let x = 0; x < n * 2; x++) {
            for (let y = 0; y < n * 2; y++) {
                for (let i = 0; i < m; i++) {
                    for (let j = 0; j < m; j++) {
                        newLock[x + i][y + j] += key[i][j];
                    }
                }

                if (check(newLock) === true) {
                    return true
                }
                // 열쇠 다시 제거
                for (let i = 0; i < m; i++) {
                    for (let j = 0; j < m; j++) {
                        newLock[x+i][y+j] -= key[i][j];
                    }
                }
            }
        }
    }

    return false;
}

const fs = require("fs");
const input = fs.readFileSync("prob4.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

const key = input.slice(0, 3).map(item => item.split(' ').map(Number));
const lock = input.slice(3, 6).map(item => item.split(' ').map(Number));

console.log(solution(key, lock));