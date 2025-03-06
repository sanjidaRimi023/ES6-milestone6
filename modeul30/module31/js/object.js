const person = {
    name: 'rimi',
    age: 19,
    1: 1000,
    true: "yes",
    friend: ['binoy', 'ripa', 'utshob'],
    details: {
        job: 'no',
        adult: 'yes',
        married: false
    }
};
// console.log(person);
// console.log(person.details.job);
// console.log(Object.entries(person));
// console.log(Object.values(person.details));

// dot (.)& bracket notation
/*object er value paite hoile amra age dot(.) use kortam but . er poriborte Bracket besi usable 
 * jemon dot diye number ba boolean access kora jay na

 */

// console.log(person.1); error asbe
console.log(person[1]); //right code
console.log(person['details']['adult']);