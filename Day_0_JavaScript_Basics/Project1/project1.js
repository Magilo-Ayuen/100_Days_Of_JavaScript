document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab references to the form elements
    const loginForm = document.querySelector('form');
    const firstNameInput = document.getElementById('firstName');
    const secondNameInput = document.getElementById('secondName');
    const cityInput = document.getElementById('cityEmploy');
    const serverSelect = document.getElementById('servers');

    // 2. Handle Form Submission (Login Button)
    loginForm.addEventListener('submit', (event) => {
        // Prevent the browser from refreshing the page
        event.preventDefault();

        // Custom validation: Ensure a server is selected
        if (!serverSelect.value) {
            alert('Please select a server before logging in.');
            serverSelect.focus();
            return;
        }

        // Collect the form data into an object
        const userData = {
            firstName: firstNameInput.value.trim(),
            lastName: secondNameInput.value.trim(),
            cityOfEmployment: cityInput.value.trim(),
            selectedServer: serverSelect.value
        };

        console.log('Login Successful! Form Data:', userData);
        alert(`Welcome, ${userData.firstName}! You have successfully connected to ${serverSelect.options[serverSelect.selectedIndex].text}.`);
        
    });

    // 3. Handle Form Reset (Reset Button Actions)
    loginForm.addEventListener('reset', (event) => {
        // Optional: Confirm with the user before wiping inputs
        const confirmReset = confirm('Are you sure you want to clear the form?');
        
        if (!confirmReset) {
            // Stops the built-in form clear if they click 'Cancel'
            event.preventDefault(); 
        } else {
            console.log('Form inputs have been cleared.');
        }
    });
});
