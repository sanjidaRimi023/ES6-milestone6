//normal loop with array

const numbers = [1, 2, 3, 4, 5, 6, 7];
const newElement = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const square = element * element;
    newElement.push(square);
}
// console.log(newElement);


// array looping with map
const newArr = numbers.map(element => element + 2);
// console.log(newArr);
// square
const sqr = [5, 6, 7, 8, 9, 10];
const newSqr = sqr.map(value => value * value);
// console.log(newSqr);

// multiline map

const total = [2, 4, 5, 6, 7, 8, 8];
const result = total.map(mark => {
    return mark / 2;
})
// console.log(result);

const friend = ['rahim', 'karim', 'tarim', 'jarim'];
const newFriend = friend.map((element, index) => {
    // console.log(index);
    // console.log(element);

})
// console.log(newFriend);
// console.log(Object.keys(newFriend));
// console.log(Object.entries(newFriend));

