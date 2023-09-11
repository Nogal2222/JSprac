function binarySearch(array, target, start, end) {
    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return undefined;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (inputData) => {
    const [n, target] = inputData.split(' ').map(Number);

    rl.question('', (arrayInput) => {
        const array = arrayInput.split(' ').map(Number);

        const result = binarySearch(array, target, 0, n-1);

        if (result === undefined) {
            console.log("no result");
        } else {
            console.log(result + 1);
        }
        rl.close();
    })
})