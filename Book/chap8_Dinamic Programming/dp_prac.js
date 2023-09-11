// 재귀함수를 이용한 피보나치 수열
function fiboRecursive(x) {
    if (x === 1 || x === 2) {
        return 1;
    }
    return fiboRecursive(x - 1) + fiboRecursive(x - 2);
}

// console.log(fiboRecursive(99));

// 메모제이션 기법을 재귀함수로 구현한 피보나치 수열 (탑다운)
let d1 = new Array(100).fill(0);

function fiboMemoization(x) {
    if (x === 1 || x === 2) {
        return 1;
    }

    if (d1[x] !== 0) {
        return d1[x]
    }

    d1[x] = fiboMemoization(x - 1) + fiboMemoization(x - 2);
    return d1[x]
}

// console.log(fiboMemoization(99));

// 메모제이션 기법을 반복문으로 구현한 피보나치 수열 (바텀업)
let d2 = new Array(100).fill(0);
d2[1] = 1;
d2[2] = 1;
const n = 99;

for (let i = 3; i < n+1; i++) {
    d2[i] = d2[i - 1] + d2[i - 2];
}

console.log(d2[n]);