function submit(){
    var email = document.getElementById("email"); 
    var password = document.getElementById("password"); 
    //check empty password field  
    if(email == "" && password == "") {
        window.location.href="home.html";

    }
     else{

        alert("Passwords did not match") 
    } 
}