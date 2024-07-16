document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDepositAmount=document.getElementById('new-deposit')
    const newDepositString=newDepositAmount.value;
    const newDeposit= parseFloat(newDepositString);

    const previousDepositAmount=document.getElementById('previous-deposit');
    const previousDepositString=previousDepositAmount.innerText;
    const previousDeposit=parseFloat(previousDepositString);
    const updatedDeposit = previousDeposit + newDeposit;
    previousDepositAmount.innerText=updatedDeposit;

    const totalDepositFlied=document.getElementById('total-deposit');
    const totalDepositString=totalDepositFlied.innerText;
    const totalDeposit=parseFloat(totalDepositString);
    const currentTotalDeposit=totalDeposit + newDeposit;
    totalDepositFlied.innerText=currentTotalDeposit;

    // clear the flied
    newDepositAmount.value=''; 

})

