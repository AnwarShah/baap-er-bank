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
        return 0
    } else {
        return value;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    const previousDepositTotal = getAmountDisplay('deposit-display');
    const newDepositTotal = previousDepositTotal + depositAmount;
    setAmountDisplay('deposit-display', newDepositTotal);

    // update new balance
    const previousBalance = getAmountDisplay('balance-display');
    setAmountDisplay('balance-display', depositAmount + previousBalance);
})