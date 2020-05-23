"use strict"

let users = [
    {
        username: "okaflorea@gmail.com",
        password: "123456789"
    },
    {
        username: "pateulsarat@gmailcom",
        password: "panseluta"
    }
]

let register = function() {
    window.location.replace("http://192.168.0.59:8080/CreateAccount/");
}

let login = function() {
    let username = document.getElementById("ExampleInputEmail1").value;
    let password = document.getElementById("ExampletInputPassword").value;
    
    users.forEach((user) => {
        username == user.password && user.username ? window.location.replace("http://192.168.0.59:8080/Jobs/") : 
        alert("Login Failed");  
    })
    
    // for (let i = 0; i < users.length; i++) {
    //     if (username ==  users[i].username && password == users[i].password) {
    //         window.location.replace("http://192.168.0.59:8080/Jobs/");
    //         alert("Logged in!");       
    //         return true;

    //     } else {
    //         alert("Login Failed");
    //         return false;
    //     }
    // }
    
}



document.getElementById("submitBtn").addEventListener("click", login);
document.getElementById("signUpBtn").addEventListener("click", register);

