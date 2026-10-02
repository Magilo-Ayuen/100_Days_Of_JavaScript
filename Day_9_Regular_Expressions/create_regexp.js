let re1 = new RegExp("kenya");
let re2 = / kenya /;

/* Regular expressions are of object type. 

console.log(typeof re1); //object
console.log(typeof re2); //object



Some characters, such as question marks and plus signs,
have special meanings in regular expressions and must be preceded by
a backslash if they are meant to represent the character itself.

*/


//--------------------- TESTING FOR MATCHES ---------------------

console.log(/abcd/.test("abcdefgh")); //true

console.log(/fgh/.test("abcdefghij")); //true

console.log(/abc/.test("abdf")); //false

/* 
     --------------------- NOTE ---------------------

        A regular expression consisting of only nonspecial characters simply
        represents that sequence of characters. If abc occurs anywhere in the
        string we are testing against (not just at the start), test will return
            true.

*/



//--------------------- SETS OF CHARACTERS ---------------------

/* 
    Finding out whether a string contains abc could just as well be done with a call to indexOf. 
    Regular expressions are useful because they allowus to describe more complicated patterns.

    Say we want to match any number. In a regular expression, putting a set of characters 
    between square brackets makes that part of the expression match any of the characters 
    between the brackets.

*/
console.log("-------------------------------------------------");


console.log(/[0123456789]/.test("in 2026")); // true
console.log(/[0-9]/.test("in 2025789")); // true

/* 
        --------------------- NOTE ---------------------

    Within square brackets, a hyphen (-) between two characters can be
used to indicate a range of characters, where the ordering is determined
by the character’s Unicode number. Characters 0 to 9 sit right next to
each other in this ordering (codes 48 to 57), so [0-9] covers all of them
and matches any digit.

    A number of common character groups have their own built-in short-
cuts. Digits are one of them: \d means the same thing as [0-9].
    \d Any digit character
    \w An alphanumeric character (“word character”)
    \s Any whitespace character (space, tab, newline, and similar)
    \D A character that is not a digit
    \W A nonalphanumeric character
    \S A nonwhitespace character
    .  Any character except for newline

    You could match a date and time format like 01-30-2003 15:20 with
the following expression:
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
 → true
console.log(dateTime.test("30-jan-2003 15:20"));
 → false


*/
console.log("-------------------------------------------------");


let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2016 14:59"));

console.log(dateTime.test("30-jan-2026 18:30"));


console.log("-------------------------------------------------");

let dateTime2 = /\d\d-\w\w\w-\d\d\d\d \d\d:\d\d /; //look how this can be true
console.log(dateTime2.test("01-mar-2019 13:48"));

