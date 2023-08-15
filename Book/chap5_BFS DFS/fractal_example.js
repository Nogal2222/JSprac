function recursive_function(i) {
    if (i === 100) {
        console.log(i, "번째 재귀함수라 돌아갑니다.")
        return
    }

    console.log(i, "번째 재귀함수에서", i + 1, "번째 재귀 함수를 호출합니다.");
    recursive_function(i + 1);
    console.log(i, "번째 재귀 함수를 종료합니다.");
}

// recursive_function(1);

// factorial 예제

// facotrial을 반복문으로 만드는 방법
function factorial_iterative(n) {
    let result = 1;

    for (let i = 1; i < n + 1; i++) {
        result *= i;
    }

    return result;
}

function factorial_recursive(n) {
    if (n <= 1) {
        return 1
    }

    return n * factorial_recursive(n - 1)
}

console.log("반복적으로 구현 : " , factorial_iterative(5));
console.log("재귀문으로 구현 : " , factorial_recursive(5));