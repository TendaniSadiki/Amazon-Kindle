function signup(){
var names = document.getElementById('name');
var surname = document.getElementById('surname');
var mail = document.getElementById('email');
var Password = document.getElementById('pwd');
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

    sessionStorage.setItem('name', names.value);
    sessionStorage.setItem('surname',surname.value);
    sessionStorage.setItem('mail',mail.value);
    sessionStorage.setItem('Password', Password.value);
    
if(names.value.length == 0 && surname.value.length == 0 && mail.value.length == 0 && Password.value.length == 0){
    alert('Please fill in all inputs');

}
else if(names.value.length == 0){
    alert('Please fill in Username');

}
else if(surname.value.length == 0){
    alert('Please fill in Surname');

}
else if(mail.value.length == 0){
    alert('Please fill in Email');

}
else if(Password.value.length == 0){
    alert('Please fill in password');

}
else if(Password.value.length > 8){
    alert('Max of 8');

}
else if(!Password.value.match(numbers)){
    alert('please add 1 number');

}
else if(!Password.value.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');

}
else if(!Password.value.match(lowerCaseLetters)){
    alert('please add 1 lovercase letter');

}
else{
    alert('Your account has been created');
    window.location.href("index.html");
    
    
}

}


function signin(){
    var logmail=sessionStorage.getItem('mail');
    var lopw=sessionStorage.getItem('Password');
    var maibox=document.getElementById('email').value;
    var passbox=document.getElementById('pwd').value;
    var location = '';

    if(maibox == logmail &&passbox==lopw){
        alert("Your Email & Password correct") ;
        window.open("home.html");
    }
    else if(maibox !=passbox &&passbox != lopw ){
      alert("Wrong Email or Password");
    }
    else if(maibox==''&&passbox==''){
        alert("Your Email & Password empty");
    }
    else{
        alert("Welcome " +sessionStorage.getItem('userName'));
window.open("home.html");}
   
    // if(maibox == '' && passbox == ''){
    //     alert('Please fill in all inputs');
    //     window.open("home.html");
    // }
    // else if(maibox != logmail ){
    //     alert("Wrong Email") ;
    //     window.open("home.html");
    // }
    // else if(passbox != lopw){
    //   alert("Wrong Password");
    //   window.open("home.html");
    // }
    // else if(maibox.value.length == 0){
    //     alert('Please fill in Email');
    //     window.open("home.html");
    // }
    // else if(passbox.value.length == 0){
    //     alert('Please fill in password');
    //     window.open("home.html");
    
    // }
    // else {
    //     alert("Welcome " +sessionStorage.getItem('name'));
    //     window.open("home.html");
    // }
       }

        function chaneTheImage(){
            const img=document.getElementById("userImg");
            img.src=sessionStorage.getItem("img");
            document.getElementById("userName").innerText = sessionStorage.getItem("name");
        }