document.getElementById('login-submit').addEventListener('click', function () {
    // get email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    //get user password
    const passField = document.getElementById("user-password");
    const userPassword = passField.value;

    if (userEmail == "sontan@baap.com" && userPassword == 'secret') {
        console.log('valid user');
        window.location.href = 'bank.html';
    }
});

// handle deposit button event

