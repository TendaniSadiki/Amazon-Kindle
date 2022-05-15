function signup(){
    let names,surname,email,phoneNumber,password;
    //print output
 names = document.getElementById('names').value;
 surname = document.getElementById('surname').value;
 email = document.getElementById('email').value;
 phoneNumber = document.getElementById('phoneNumber').value;
 password = document.getElementById('pwd').value;
 if(names == "Sarah" && surname == "admin" && email == "sarah@gmail.com"
 && phoneNumber == "0123456789" && password == "12345"){
     alert("Login success");
     return false
 }
  else{
      alert("Failed to sign up")
  }
}
