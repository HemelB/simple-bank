document.getElementById("deposit-button").addEventListener('click', function () {
    // get the amount deposited
    // 1. Input catch by id
    const depositInput = document.getElementById("deposit-input");

    // 2. get the value inputted
    const newDepositAmount = depositInput.value;

    // 3. show the amount in Deposit section ($0 where is)    
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    
    depositTotal.innerText = newDepositTotal;

    // update account balance
    
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(newDepositAmount) + parseFloat(previousBalanceAmount);
    balanceTotal.innerText = newBalanceTotal;

    
    // clear deposit input field
    depositInput.value = "";
});

// handle withdraw handler
document.getElementById("withdraw-button").addEventListener('click', function () {

// set withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

// set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotal = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(previousWithdrawTotal);
    withdrawTotal.innerText = newWithdrawTotal;
// clear input field
    withdrawInput.value = '';

    // balance update
    const balanceTotal = document.getElementById("balance-total");

    const previousBalanceTotal = balanceTotal.innerText;

    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);

    balanceTotal.innerText = newBalanceTotal;


});