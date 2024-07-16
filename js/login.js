console.log('js file ready ase');
document.getElementById('submit').addEventListener('click', function(){
    const userEmail=document.getElementById('email');
    const email=userEmail.value;
    const userPassword=document.getElementById('password');
    const password=userPassword.value;
    if(email==='ranarasul21@gmail.com'&&password==='123456'){
        window.location.href='bank.html';
    }
    else{
        alert("Invalid Email or Password");
    }
    
})