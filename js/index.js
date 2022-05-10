function scrollWin() {
    window.scrollTo(200, 0);
  }

document.getElementById('signupButton').onclick = function(){
let person ={
    name:'Edmond',
    surname:"Sadiki",
    email:'Tendanisadiki16@gmail.com',
    phoneNumber: '0711741781',
    password:'user1'
}
let username = document.getElementById('name')= person.name;
console.log(username)
}

