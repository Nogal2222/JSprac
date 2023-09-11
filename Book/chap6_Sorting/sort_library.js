const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// const newArray1 = [...array];
// const newArray2 = [...array];

// newArray1.sort((a, b) => (a - b));
// newArray2.sort((a, b) => (b - a));

// console.log(newArray1);
// console.log(newArray2);

const newArray1 = [...array].sort((a, b) => (a - b));
const newArray2 = [...array].sort((a, b) => (b - a));

console.log(newArray1);
console.log(newArray2);