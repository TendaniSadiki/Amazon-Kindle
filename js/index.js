function signUp(){
    
    const fname = document.getElementById('nameUser').value;
    const surname = document.getElementById('sUser').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const pwd = 12345; 
    const output =  document.getElementById('pwd').innerHTML;

    
    if(pwd == output){
        console.log("Success")
    }

}

signUp()