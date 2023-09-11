function binarySearch(array, target, start, end) {
    if (start > end) {
        return undefined;
    }

    let mid = parseInt((start + end) / 2);

    if (array[mid] === target) {
        return mid;
    } else if (array[mid] > target) {
        return binarySearch(array, target, start, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, end);
    }
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
        const result = binarySearch(array, target, 0, n - 1);

        if (result === undefined) {
            rl.output.write("no result\n");
        } else {
            rl.output.write((result + 1) + "\n");
        }
        rl.close();
    })
})