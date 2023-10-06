// 모든 단어를 모든 쿼리와 직접 비교하면 시간초과
// function matchWord (word, pattern) {
//     if (word.length !== pattern.length) return false;

//     for (let i = 0; i < word.length; i++) {
//         if (pattern[i] !== '?' && pattern[i] !== word[i]) {
//             return false;
//         }
//     }

//     return true;
// }

function bisect_left(array, value) {
    let low = 0, high = array.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (array[mid] < value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

function bisect_right(array, value) {
    let low = 0, high = array.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (array[mid] <= value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

function count_by_range(a, leftV, rightV) {
    let rightIdx = bisect_right(a, rightV);
    let leftIdx = bisect_left(a, leftV);

    return rightIdx - leftIdx;
}

const fs = require("fs");
const input = fs.readFileSync("prob8.txt").toString().trim().split('\n').map(item => item.replace('\r', ''));

let words = input[0].split(' ');
let queries = input[1].split(' ');

let result = [];

// 모든 단어를 모든 쿼리와 직접 비교하면 시간초과
// for (let query of queries) {
//     let count = words.filter(word => matchWord(word, query)).length;
//     result.push(count);
// }

let array = Array.from({length: 10001}, () => []);
let reversed_array = Array.from({length: 10001}, () => []);

for (let word of words) {
    array[word.length].push(word);
    reversed_array[word.length].push(word.split('').reverse().join(''));
}

for (let i = 0; i < 10001; i++) {
    array[i].sort();
    reversed_array[i].sort();
}

for (query of queries) {
    let count;
    if (query[0] != '?') {
        count = count_by_range(array[query.length], query.replace(/\?/g, 'a'), query.replace(/\?/g, 'z'))
    } else {
        let reversed_query = query.split('').reverse().join('')
        count = count_by_range(reversed_array[query.length], reversed_query.replace(/\?/g, 'a'), reversed_query.replace(/\?/g, 'z'));
    }

    result.push(count)
}

console.log(result)


