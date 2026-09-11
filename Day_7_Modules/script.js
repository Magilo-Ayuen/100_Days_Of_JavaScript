/* Modules - are a better way to write our codes
    It can be used to prevent naming conflicts in various js

    --------- HOW TO CREATE A MODULE -----------
    1. Create a file
    2. Don't load the file with <script> tag


     --------- HOW TO GET A VARIABLE OUT OF A FILE -----------
     1. Add type="module" attribute
     2. Export
     3. Import

    Let's we have two files: cart.js and amazon.js , and in this two files, we want to use cart variable
    that is in cart.js : 

    solution:

    - Go into amazon.js import script in html: add a type="module" attribute after script tag text
    - Get into cart.js: import const cart = [], so this variable can be used outside cart.js
    - At the top we want to tell the commp which variable we want to get from another file: 
            import {cart} from 'filepathHERE' ; 

    ------------ IMPORTANT THINGS TO KNOW ABOUT MODULES --------------
    1. Put all imports at the top of the file. 
    2. For modules to work, we need to open our html files using a live server

    ------------ BENEFITS OF MODULES -------------

    1. Helps us avoid naming conflicts
    2. Don't have to worry about the order of our files

    */