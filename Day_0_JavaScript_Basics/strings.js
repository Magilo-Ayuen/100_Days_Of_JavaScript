const firstName = "John";
const lastName = "Doe";

// Template literals
console.log(`My name is: ${firstName} ${lastName}`);

// String concatenation
console.log(firstName + " " + lastName);

// Browser Pop-up

// window.alert(firstName + " " +lastName);

// WEBPAGE CONTENT
// document.write(firstName + " " +lastName);


const prompt = require('prompt-sync')();
console.log("Prompting the User ");

const name1 = prompt("Enter your first name: ");
const name2 = prompt("Enter your last name: ");
console.log(`My name is: ${name1} ${name2}`);

if (name1 && name2) {
    console.log(`Hello, ${name1} ${name2}, Welcome to our site`);
}
else {
    console.log("Both names are required!");
}