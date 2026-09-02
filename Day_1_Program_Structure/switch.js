// BASIC CALCULATOR
const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter your first number: "));
const opera = prompt("Enter your operator: ");
const num2 = Number(prompt("Enter your first number: "));

switch (opera) {
    case "+":
        const add = num1 + num2;
        console.log("The sum of two numbers is: ", add);
        break;
    case "-":
        const sub = num1 - num2;
        console.log("The substration of the two numbers is: ",sub);
        break;
    case "*":
        const mul = num1 * num2;
        console.log("The multiplication of the two numbers is: ",mul);
        break;
    case "/": 
        const div = num1 / num2;
        console.log("The division of the two numbers is: ",div);
        break;
    case "%":
        const mod = num1 % num2;
        console.log("The remainder of the two numbers is: ",mod);
        break;
    default:
        console.log("The operator is invalid!");
        break;
}

