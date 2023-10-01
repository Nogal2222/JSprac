function balancedIndex(p) {
    let count = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === "(") {
            count += 1;
        } else {
            count -= 1;
        }
        if (count === 0) {
            return i;
        }
    }
    return -1;
}

function checkProper(p) {
    let count = 0;
    for (let i of p) {
        if (i === "(") {
            count += 1;
        } else {
            if (count === 0) {
                return false;
            }
            count -= 1;
        }
    }
    return count === 0;
}

function solution(p) {
    let answer = "";

    if (p === "") {
        return answer;
    }

    let index = balancedIndex(p);
    if (index === -1) return "";

    let u = p.substring(0, index + 1);
    let v = p.substring(index + 1);

    if (checkProper(u)) {
        answer += u + solution(v);
    } else {
        answer += "(" + solution(v) + ")";
        u = u.slice(1, -1).split("").map(char => char === "(" ? ")" : "(").join("");
        answer += u;
    }

    return answer;
}

const fs = require("fs");
const input = fs.readFileSync("prob4.txt").toString().trim().split("\n").map(item => item.replace("\r",''));

const tc = Number(input[0]);

for (let t = 1; t < tc + 1; t++) {
    console.log(solution(input[t]))
}