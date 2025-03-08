
const name = "mahir"; //string always true hoy
if (name) {
    console.log('this is true');
} else {
    console.log('this is false');
}


const fatherName = ""; //empty string false hoy
if (fatherName) {
    console.log('this is true');
} else {
    console.log('this is false');
}


const matherName = " "; // its true cz space into string
if (matherName) {
    console.log('this is true');
} else {
    console.log('this is false');
}


const num = 1; //number is truthy value.(positive and negative also) 

if (num) {
    console.log('this is true');
} else {
    console.log('this is false');
}

const num2 = 0; //every number is true but 0 and -0 are falsy value 

if (num2) {
    console.log('this is true');
} else {
    console.log('this is false');
}

const students = { name: 'rimi' };// object truthy value and empty object also truthy value

if (students) {
    console.log('this is true');
} else {
    console.log('this is false');
}

//array also truthy value
let mark = [12, 334, 45, 656];
if (mark) {
    console.log('this is true');
} else {
    console.log('this is false');
}
// empty array also truthy value
let totalArr = [];
if (totalArr) {
    console.log('this is true');
} else {
    console.log('this is false');
}
// null, undefined, NaN are falsy value

let Null = null;
if (Null) {
    console.log('this is true');
} else {
    console.log('this is false');
}

let Undefined = undefined;
if (Undefined) {
    console.log('this is true');
} else {
    console.log('this is false');
}

const NAN = NaN;
if (NAN) {
    console.log('this is true');
} else {
    console.log('this is false');
}

