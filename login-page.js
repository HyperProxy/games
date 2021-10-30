const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    var username_github = ${{ secrets.USERNAME }};
    var password_github = ${{ secrets.PASSWORD }};

    if (username == username_github && password == password_github) {
        // If the credentials are valid, show an alert box and reload the page
        alert("You have successfully logged in.");
        window.location.replace('Kz-PrNZQ6wc3XFMedwD!.html');
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})
