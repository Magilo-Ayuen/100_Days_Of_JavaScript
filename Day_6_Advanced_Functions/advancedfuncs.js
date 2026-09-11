/* 
Functions are also values - We can save a function inside a variable

*/
const function1 = function greeting() {
console.log('hello');

};
console.log(function1);


// Object

const object1 = {
    age: 20,
    fun: function greeting2 (){ //we can just use anonymous function - const object1 = function(){}
        console.log('Hello there?');
    }
}

console.log(object1.fun()); // or just object.fun();

//Callback in js

function display(param) {
    console.log(param);
}
display(2026);

function run (param) {
    param();
}

run (function (){
    console.log('hello tena!')
});

//This is called as passing a function into another function 

// THe function that we are passing in is known as a callback function


//----------------PRACTICAL EXAMPLES { Using Functions as Values } --------------------

/*        
        1. setTimeout() 
             - Allows us to run a function in the future.
             - Is a built-in function. 
             - It usually take two parameters {1.func we want to run in the future , 2.how long before running this func in millisec}

*/

setTimeout(function(){
    console.log('timeout');
}, 3000);

//setTimeout is known as Asynchronous code - won't wait for a line to finish before going to the next line
// Sychronous code on the other hand- will wait for one line to finish before going to the next line


/*        
        1. setInterval() 
             - Allows us to run a function in the future.
             - Is a built-in function. 
             - It usually take two parameters {1.func we want to run in the future , 2.how long before running this func in millisec}


             -It will keep running a function in the future

*/

setInterval(function() {
    console.log('interval');
}, 3000);