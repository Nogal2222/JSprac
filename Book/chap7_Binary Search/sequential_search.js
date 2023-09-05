function sequentialSearch(n, target, array) {
    for (let i = 0; i < n; i++) {
        if (array[i] === target) {
            return i + 1;
        }
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("생성할 원소 개수를 입력 후 한 칸 띄고 찾을 문자 입력 : ", (input_data) => {
    const [n, target] = input_data.split(' ');

    rl.question("앞서 적은 원소 개수만큼 문자열 입력 구분은 띄어쓰기 한 칸 : ", (arrayInput) => {
        const array = arrayInput.split(' ');
        console.log(sequentialSearch(parseInt(n), target, array));
        rl.close();
    });
});
