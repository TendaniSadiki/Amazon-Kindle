function signup(){
    
var names = document.getElementById('name');
let surname = document.getElementById('surname');
let mail = document.getElementById('email');
let Password = document.getElementById('pwd');
let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;
    
    
    localStorage.setItem('name', names.value);
    localStorage.setItem('surname',surname.value);
    localStorage.setItem('mail',mail.value);
    localStorage.setItem('Password', Password.value);


    
if(names.value.length == 0 && surname.value.length == 0 && mail.value.length == 0 && Password.value.length == 0){
    alert('Please fill in all inputs');

}
else if(Password.value.length > 6){
    alert('Max of 6');

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
    window.open("index.html");
    
    
}

}


function signin(){
    var logmail=localStorage.getItem('mail');
    var lopw=localStorage.getItem('Password');
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
        alert("Welcome " +localStorage.getItem('userName'));
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
    //     alert("Welcome " +localStorage.getItem('name'));
    //     window.open("home.html");
    // }
       }

        function changeTheImage(){
            const img=document.getElementById("userImg");
            img.src=localStorage.getItem("img");
            document.getElementById("userName").innerText = localStorage.getItem("name");
        }
