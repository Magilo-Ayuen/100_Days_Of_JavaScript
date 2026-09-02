
const prompt = require("prompt-sync")();

let num = Number(prompt("Enter your age: "));
if (num >= 18 && num <= 70) {
    console.log("You can vote!");
} else if (num < 18) {
    console.log("You're too young to vote!");
} else {
    console.log("You're too old to vote!");
}