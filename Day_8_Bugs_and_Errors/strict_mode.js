// strict mode script - put "use strict" at the top of a file or a function body

"use strict"

/* 

"use strict"; //top of the file


function add(b) {
   const sum = a + b;
    console.log("The sum is: ",sum);
}
console.log(add(3,5));


This will generate this error

strict_mode.js:6 Uncaught ReferenceError: a is not defined
    at add (strict_mode.js:6:16)
    at strict_mode.js:9:13


   ---------- ANOTHER EXAMPLE -----top of a function----

   function add () {
        "use strict";

        for (counter = 0; counter <= 10 ; counter++){
            console.log("Happy Sunday!");
        }

   }

*/


// Correction 1 - review these two programs {they dont work together but works individually}

function add (a,b) {
    return a + b;
}
console.log("The sum is: ",add(3,6));

// Correction 2

function add () {
        "use strict";

        for (let counter = 0; counter <= 10 ; counter++){
            console.log(counter);
        }

   }