const prompt = require("prompt-sync")();

let num = prompt("enter the number");
if (typeof num === "number") {
  if (num % 2 === 0) {
    console.log(num, "is a even number");
  }
  if (num % 2 !== 0) {
    console.log(num, "is a odd number");
  }
}
