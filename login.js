function submit() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //check empty password field  

        if (email = "user@gmail.com" && password == "mypassword") {
            window.location.href = "home.html";

    }
    else {
        alert("Passwords did not match");
        return;

    }
}