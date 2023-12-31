function clearInputField(inputTagId){
    document.getElementById(inputTagId).value = '';
}

function setAmountDisplay(tagId, amount){
    document.getElementById(tagId).innerText = amount;
}

function getAmountDisplay(tagId){
    return parseFloat(document.getElementById(tagId).innerText);
}

function getInputValue(inputTagId){
    const value = parseFloat(document.getElementById(inputTagId).value);
    clearInputField(inputTagId);

    if (isNaN(value)) {
        alert('Please enter a valid number');
        return 0
    } else {
        return value;
    }
}

function handleDeposit(){
    const depositAmount = getInputValue('deposit-input');
    const previousDepositTotal = getAmountDisplay('deposit-display');
    const newDepositTotal = previousDepositTotal + depositAmount;
    setAmountDisplay('deposit-display', newDepositTotal);

    // update new balance
    const previousBalance = getAmountDisplay('balance-display');
    setAmountDisplay('balance-display', depositAmount + previousBalance);
}

function handleWithdraw(){
    const withdrawAmount = getInputValue('withdraw-input');
    const previousWithdrawTotal = getAmountDisplay('withdraw-display');
    const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;

    
    // update the balance
    const previousBalance = getAmountDisplay('balance-display');
    // if user tries to withDraw more than he has
    if(previousBalance-withdrawAmount < 0 ){
        alert("You have insufficient balance to withdraw $" + withdrawAmount);
        return;
    }

    setAmountDisplay('withdraw-display', newWithdrawTotal);
    setAmountDisplay('balance-display', previousBalance - withdrawAmount);    
}

// attach event handler for both click and enter event on deposit button
for(let eventType of ['click', 'keyup']){
    document.getElementById('deposit-button').addEventListener(eventType, function(event){
        if((event.type === 'keypress' && event.key === 'Enter') || event.type === 'click') {
            handleDeposit();
        }
    });
}

// also attach event handler to enter keypress on withdraw input field
document.getElementById('deposit-input').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        handleDeposit();
    }
})

// attach event handler for both click and enter event on withdraw button
for(let eventType of ['click', 'keyup']){
    document.getElementById('withdraw-button').addEventListener(eventType, function(event){
        if((event.type === 'keypress' && event.key === 'Enter') || event.type === 'click') {
            handleWithdraw();
        }
    });
}

// also attach event handler to enter keypress on withdraw input field
document.getElementById('withdraw-input').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        handleWithdraw();
    }
})