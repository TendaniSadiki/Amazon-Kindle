function left() {
    window.scrollBy(100, 100);
    alert("pageXOffset: " + window.scrollX + ", scrollY: " + window.scrollY);
  }
  function right() {
    window.scrollBy(100, 100);
    alert("pageXOffset: " + window.scrollY + ", scrollY: " + window.scrollX);
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

