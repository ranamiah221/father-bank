console.log('js file ready ase');
document.getElementById('submit').addEventListener('click', function(){
    const userEmail=document.getElementById('email');
    const email=userEmail.value;
    const userPassword=document.getElementById('password');
    const password=userPassword.value;
    console.log(email,password);
})