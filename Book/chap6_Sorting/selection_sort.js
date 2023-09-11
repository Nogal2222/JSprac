const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < array.length; j++) {
        if (array[minIndex] > array[j]) {
            minIndex = j
        }
    }
    // 이건 임시변수를 사용하는 방식
    // let temp = array[i];
    // array[i] = array[minIndex];
    // array[minIndex] = temp;

    // 이건 swap 방식
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
}

console.log(array)