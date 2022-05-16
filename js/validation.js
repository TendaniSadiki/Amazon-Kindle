1
function signup(){
var names = document.getElementById('name');
var surname = document.getElementById('surname');
var mail = document.getElementById('email');
var phoneNumber = document.getElementById('phoneNumber');
var Password = document.getElementById('pwd');
var imagess = document.getElementById('imagess');
    sessionStorage.setItem('name', names.value);
    sessionStorage.setItem('surname',surname.value);
    sessionStorage.setItem('mail',mail.value);
    sessionStorage.setItem('phonenumber',phoneNumber.value);
    sessionStorage.setItem('Password', Password.value);
    sessionStorage.setItem('imagess', imagess.value);
    alert('Your account has been created');
    window.open("index.html");
}
//document.getElementById('loginResult').innerHTML=localStorage.getItem('name');
function signin(){
    var logmail=sessionStorage.getItem('mail');
    var lopw=sessionStorage.getItem('Password');
    var maibox=document.getElementById('email').value;
    var passbox=document.getElementById('pwd').value;
    var location = '';
    if(maibox != logmail ){
        alert("Wrong Email") ;
this.location.href = location;
    }
    else if(passbox != lopw){
      alert("Wrong Password");
    }else{
        alert("Welcome " +sessionStorage.getItem('name'));
        window.open("home.html");
    }
}