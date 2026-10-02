/* 
Another example of a common asynchronous operation is reading a
file from a device’s storage. Imagine you have a function readTextFile
that reads a file’s content as a string and passes it to a callback function.


The readTextFile function is not part of standard JavaScript. We will
see how to read files in the browser and in Node.js later

{ TO BE SOLVED:::: }
*/


readTextFile("readText.txt", content => {
    console.log(`Shopping List: \n${content}`);
});