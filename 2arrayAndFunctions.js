// Array using square brackets
const students = [1, 2, 3, "Rahul", "Anjali", 4, 5];

console.log(students);
// Access an element
console.log(students[3]);

// Array using Array method (new keyword)
const students1 = new Array(1, 2, 3, "Rahul", "Anjali", 4, 5);
console.log(students1);

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
// Function

// Function Definition, Function Calling
// By default function return undefined

// Types of Function 
// 1. Named Function
function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(3, 4));
// 2. Anonymous Function
const addTwoNumbers2 = function (a, b) {
    return a + b;
}
console.log(addTwoNumbers2(3, 4));
// 3. Arrow Function
const addTwoNumbers3 = (a, b) => {
    return a + b;
}
console.log(addTwoNumbers3(3, 4));


// Map
students.map(function (student) {
    return student;
})


// Shallow Copy
const student1 = students;
// Deep Copy
const student2 = [...students];

student1.push(6);
console.log(students);
console.log(student1);