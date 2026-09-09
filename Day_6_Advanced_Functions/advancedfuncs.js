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


