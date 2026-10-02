// This event will style the default browser bg to blue upon clicking key 'b'
window.addEventListener('keydown',event =>{
    if(event.key == 'b' || (event.key == 'b' && event.shiftKey )) {
        document.body.style.background = 'blue';
    }

});

// We now want revert back to default color upon letter b's keyup event
// I have use letter c to changed the blue background back to default
window.addEventListener('keyup',event => {
    if (event.key = 'b' || (event.key == 'c' && event.shiftKey)) {
        document.body.style.background = '';
    }
});

// This only works for small letters, let as make it work for both capital and small letter b

