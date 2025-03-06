// old version

const people2 = {
    name: 'rihan',
    age: 10,
    status:" single"
}
// console.log(people2.name);
// console.log(people2.age);


// ES 6 easy method for destructure

// destructure use to array or object multiple data extraction

// object destructuring
const people = {
    name: 'mahir',
    age: 12,
    status: "single"
}

const { name, age, status } = people;
// console.log(name);
// console.log(age);
// array destructuring
const friends = ['binoy', 'badhon', 'utshob', 'rimi'];
const [first, second] = friends;
// console.log(first);

