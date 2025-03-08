// // string or number are not same
// const num1 = '10';
// const num2 = 10;
// if (num1 == num2) {
//     console.log('this is equal');
// }
// else {
//     console.log('this is not equal');
// }
// //but it's return true because we use double equal who doesn't check Datatype.
// const num5 = '10';
// const num6 = 10;
// if (num5 === num6) {
//     console.log('this is equal');
// }
// else {
//     console.log('this is not equal');
// }
// // return false for triple equal


// // number or boolean
// const num3 = true;
// const num4 = 1;
// if (num3 === num4) {
//     console.log('this is equal');
// }
// else {
//     console.log('this is not equal');
// }
// /* it's return true but why..??
// *because true = 1 that's why return true
// if we use === then it's return falsy value
// */

// // empty arr or non primitive DataType

// const num7 =[]
// const num8 = []
// if (num7 === num8) {
//     console.log('this is equal');
// }
// else {
//     console.log('this is not equal');
// }
// /* when we use non primitive datatype, they return false
// but when we assign num8 = num7 then return true */