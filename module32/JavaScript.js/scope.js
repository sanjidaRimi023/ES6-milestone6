//let and const block scope
function sum(num1, num2) {
    const result = num1 - num2;
    console.log(result);
}
sum(12, 5);
// {} bracket er vitor ja lekha hobe ta bahire access kora jbe na ai ta holo block scope

// var global scope

function multi(num3, num4) {
    // console.log(result2); output undefined
    var result2 = num3 * num4;
    console.log(result2);
}

multi(2, 4);
