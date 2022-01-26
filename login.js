//var name = [];
//var email = [];
//var password = [] ;

function submit() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    if(email == "" && password =="") {
     alert('Please provide a valid email address');
     email.focus;
    return false;
    }
    if(login) {
        window.location.href = "home.html"
    }
}



