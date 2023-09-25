function permutations(arr, length) {
    if (length === 1) {
        return arr.map(elem => [elem]);
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const currentElem = arr[i];
        const remainingElems = arr.slice(0, i).concat(arr.slice(i + 1));

        const permutedElems = permutations(remainingElems, length - 1);

        for (let j = 0; j < permutedElems.length; j++) {
            result.push([currentElem].concat(permutedElems[j]));
        }
    }
    return result;
}

function solution(n, weak, dist) {
    let distLength = weak.length;

    for (let i = 0; i < distLength; i++) {
        weak.push(weak[i] + n);
    }

    let answer = dist.length + 1;

    for (let start = 0; start < distLength; start++) {
        for (let friends of permutations(dist, dist.length)) {
            let count = 1;
            let position = weak[start] + friends[count - 1];

            for (let index = start; index < start + distLength; index++) {
                if (position < weak[index]) {
                    count += 1;

                    if (count > dist.length) {
                        break;
                    }

                    position = weak[index] + friends[count - 1];
                }
            }
            answer = Math.min(answer, count);
        }
    }
    if (answer > dist.length) {
        return -1;
    }
    return answer;
}

const fs = require("fs");
const input = fs.readFileSync("prob8.txt").toString().trim().split("\n").map(item => item.replace('\r', ''));

const tc = Number(input[0]);

for (let t = 0; t < tc; t++) {
    let n = Number(input[3 * t + 1])
    let weak = input[3 * t + 2].split(' ').map(Number);
    let dist = input[3 * t + 3].split(' ').map(Number);

    console.log(solution(n, weak, dist));
}