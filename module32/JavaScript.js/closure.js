// /* closure is when a function is able to remember ans access it's lexical scope even when that function executing outside it's lexical scope
// closure access two ways :

// 1.able to remember ans access it's lexical scope
// 2.when that function executing outside it's lexical scope
// */

// //function text() {
// //     let msg = "we are learning what is closure";
// //     function sayMsg() {
// //         console.log(msg);
// //     }
// //     sayMsg();
// // }
// // text();

// function text() {
//     let msg = "we are learning what is closure";
//     return function () {
//         console.log(msg);
//     }
// }
// let sayMsg = text();
// console.log(sayMsg); //we call block scope function is global scope that why they return a function(14 line)

// sayMsg() //if we call global scope so they return "msg" (line15)