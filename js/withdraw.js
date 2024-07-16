document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawFlied=document.getElementById('new-withdraw');
    const newWithdrawString=withdrawFlied.value; 
    const newWithdraw= parseFloat(newWithdrawString);
   
    const previousWithdrawFlied=document.getElementById('previous-withdraw');
    const previousWithdrawString=previousWithdrawFlied.innerText; 
    const previousWithdraw= parseFloat(previousWithdrawString);
    
    const updatedWithdraw= previousWithdraw + newWithdraw;
    previousWithdrawFlied.innerText=updatedWithdraw;

    const totalDepositFlied=document.getElementById('total-deposit');
    const totalDepositString=totalDepositFlied.innerText;
    const totalDeposit=parseFloat(totalDepositString);
    const currentTotalDeposit=totalDeposit - newWithdraw;
    totalDepositFlied.innerText=currentTotalDeposit;

    if(newWithdraw > totalDeposit){
        alert("Please deposit first then you try withdraw .... Thank You")
    }

   


    // clear flied
    withdrawFlied.value='';


})