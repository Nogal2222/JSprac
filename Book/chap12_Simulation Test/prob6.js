function isPossible(answer) { // 현재 설치된 구조물이 "가능한" 구조물인지 확인
    for (let [x, y, stuff] of answer) {
        if (stuff === 0) { // 설치된 것이 "기둥"인 경우
            if ( // "바닥 위" 혹은 "보의 한쪽 끝부분 위" 혹은 "다른 기둥 위"라면 정상
                y === 0 ||
                answer.some(item => item[0] === x-1 && item[1] === y && item[2] === 1) || 
                answer.some(item => item[0] === x && item[1] === y && item[2] === 1) ||
                answer.some(item => item[0] === x && item[1] === y-1 && item[2] === 0)
            ) { continue; }
            return false // 아니라면 false 리턴
        } else if (stuff === 1) { // 설치된 것이 "보"인 경우
            if ( // "한쪽 끝부분이 기둥 위" 혹은 "양쪽 끝부분이 다른 보와 동시에 연결"이라면 정상
                answer.some(item => item[0] === x && item[1] === y-1 && item[2] === 0) || 
                answer.some(item => item[0] === x+1 && item[1] === y-1 && item[2] === 0) ||
                answer.some(item => item[0] === x-1 && item[1] === y && item[2] === 1) && answer.some(item => item[0] === x+1 && item[1] === y && item[2] === 1) 
            ) { continue; }
            return false; // 아니면 false 리턴
        }
    }
    return true; // 모두 정상이면 true 리턴
}

function solution(N, build) {
    answer = [];

    for (let frame of build) {
        let [x, y, stuff, operate] = frame;

        if (operate === 0) {
            let index = answer.findIndex(item => item[0] === x && item[1] === y && item[2] === stuff);
            if (index !== -1) {
                answer.splice(index, 1);
            }
            if (!isPossible(answer)) {
                answer.push([x, y, stuff]);
            }
        } else if (operate === 1) {
            answer.push([x, y, stuff])
            if (!isPossible(answer)) {
                let index = answer.findIndex(item => item[0] === x && item[1] === y && item[2] === stuff);
                if (index !== -1) {
                    answer.splice(index, 1);
                }
            }
        }
    }
    return answer.sort();
}

const fs = require("fs");
const input = fs.readFileSync("prob6.txt").toString().trim().split("\n").map(item => item.replace("\r",''));

const tc = Number(input[0]);
let l = 1;

for (let t = 0; t < tc; t++) {
    let N = Number(input[l]);
    let build = [];

    for (let i = l + 1; i < input.length; i++) {
        if (input[i].length >=2) {
            build.push(input[i].split(' ').map(Number));
        } else {
            break;
        }
    }

    l += build.length + 1
    
    console.log(solution(N, build))
}