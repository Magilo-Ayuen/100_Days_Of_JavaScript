/*
Steps(Algorithm)

1. Create array to store todos
2. When we click "Add"
3. Get text from input box
4. Add it to array
5. console.log() the array

*/
const newArray = []; //empty array



 /* -------- LOOPING THROUGH THE ARRAY -----------
            1. Loop through the array
            2. Create some HTML code for each today
            3. Put the HTML On web page

    */

    let todosItemsHTML = '';
    let todos1;

    for (let i = 0 ; i < todos1.length ; i++) {
        const todosItems = todos1[i];
        const html = `<p>${todosItems}</p>`;
        todosItemsHTML += html;
    }

 console.log(todosItemsHTML);

 document.querySelector('.js-todo-list').innerHTML = todosItemsHTML;



function add() {
    const inputTodo = document.querySelector('.todo-list');
    const todos1 = inputTodo.value;
    
    //to add todos to out empty array use push()

    newArray.push(todos1);
    console.log(newArray);

    //To reset out input field
    inputTodo.value = '';

}
