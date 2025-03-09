function total(a, b, c) {
    console.log(arguments);
    //arguments are array like object , we can access argument outer the function
}
total(12, 34, 54);


function result(sub1, sub2) {
    const newResult = [...arguments];
    //if we use spread operator before argument , the array like object converted to full a array.
    console.log(newResult);
}
result(12, 324, 435, 445)

// pass by value

let a = 10;
let b = 20;
function sum(num1, num2) {
    console.log(num1, num2);
}
sum(a, b);

// pass by reference

const student = { name: 'rimi', roll: 711909 }
function data(text) {
    text.name = 'sanjida';
}
data(student);
console.log(student);