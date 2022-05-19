// // square
const prompt = require("prompt-sync")();
const num = prompt("enter the number");
console.log("square of this number is ", num * num);
console.log(Math.pow(num, 2));
// square root of given number
const num1 = prompt("enter the number");
console.log("square root is ", Math.sqrt(num1));

// cube
const num3 = prompt("enter the num ");
console.log("cube of this number is ", num3 * num3 * num3);
console.log(Math.pow(num3, 3));

// cube root of given number
const num4 = prompt("enter the number");
console.log("square root is ", Math.cbrt(num4));

// Math.pow()
console.log(Math.pow(4, 2));
console.log(2 ** 3);
