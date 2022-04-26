//const numbers = [65, 44, 12, 4];

// loop
/*
numbers.map((number) => {
    console.log(number);
})
numbers.forEach((number) => {
    console.log(number);
})
for (let number of numbers) {
    console.log(number)
}

const result = numbers.filter((number) => {
    return number > 25;
})
console.log(result);
*/

const ans = (...args) => {
    return args;
}

console.log(ans(1, 2, 3, 4, 5));