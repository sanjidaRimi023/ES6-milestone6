// const student = {
//     name: 'binoy',
//     age: 19,
//     friends: ['rimi', 'badhon', 'utshob']
// }
// const newStudent = JSON.stringify(student); //stringify ==> js obj converted JSON string
// console.log(typeof newStudent);
// console.log(newStudent);

// const student2 = JSON.parse(newStudent); //perse==> JSON string converted js obj
// console.log(student2);
// console.log(typeof student2);

// json placeholder

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res =>res.json())
//     .then(data => {
//         console.log(data);
//     })




const handleLoadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res =>res.json())
    .then(data => {
    console.log(data);
    })
}
