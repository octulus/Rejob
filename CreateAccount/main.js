let formValidation =  function() {
    let userFullName = document.getElementById('fullname');
    let userEmail = document.getElementById('email');
    let country = document.getElementById('country');
    let birthday = document.getElementById('birthday');

    if (userFullName.value.length == 0 || userFullName.value.length < 3){
      userFullName.className = "wrong-input";
      userFullName.nextElementSibling.innerHTML = "Must be a valid name";
    }

    if (!userEmail.value.includes("@",0)) {
      alert("Invalid E-mail format");
    }

    let opt = country.options[country.selectedIndex];
    console.log(opt.value);
    if (opt.value == 0) {
      alert("No country selected");
      return false;
    }

    if (birthday.value.includes('/', 0)) {
    } else {
      alert("Invalid birthday input");
      return false;
    }

    document.location.replace("http://192.168.0.59:8080/WelcomeScreen/")

}

document.getElementById("register").addEventListener("click", function(event) {
  event.preventDefault();
})
let register = document.getElementById('register').addEventListener('click', formValidation);

