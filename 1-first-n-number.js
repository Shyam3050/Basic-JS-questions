const prompt = require("prompt-sync")();
let num = prompt("Enter the number ");
console.log(typeof num);
for (let i = 1; i <= num; i++) {
  console.log(i);
}

// addin two numbers

let num1 = parseInt(prompt("enter first number "));
let num2 = parseInt(prompt("enter second number "));
console.log(`sum of two num is ${num1 + num2}`);
