
// arrow function 
// normal function 
function total2(num1 , num2){
    return num1 + num2;
}

const result2 = total2(12,43);
// console.log(result2);
// normal function deferent way

const total3 = function(num3, num4){
    return num3 - num4;
}
// console.log(total3(29, 10));
// arrow function => arrow function as like deferent function

/*arrow function syntax (1 line)

const/ let variable name = (parameter1, parameter2) => parameter1 + parameter2;
console.log(variable name (argument1, argument2));

function ek line er hole return likhte hy na
*/

// here a arrow function (1 line)

const sum2 = (num5, num6) => num5 + num6;

// console.log(sum2(30, 40));

// multiple line arrow function

/*multiple line arrow function syntax
const functionName = (multiple parameter){
return parameter calculation ;
};
console.log(functionName (argument pass));


multiple line a return na likhle undefined output undefined asbe. 
*/

const result3 = (physics , chemistry, math) => {
    return physics + chemistry - math;
}
// console.log(result3(90, 60, 40));

// 3 way to write arrow function 
// 1. empty parenthesis
const name1 = ()=>console.log("binoy");
// name()

//2.no parenthesis use

const square = a => a*a;
// console.log(square(5));

// 3. parenthesis used

const sub = (x,y)=> x-y;
// console.log(sub(30, 20));

// title id use 

document.getElementById("title").addEventListener ("click", (event) => {
    console.log(event)
})
