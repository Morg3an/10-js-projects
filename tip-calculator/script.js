const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const tipAmountSpan = document.getElementById("tipAmount");
const totalAmountSpan = document.getElementById("totalAmount");

function calculateTip() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers");
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    tipAmountSpan.textContent = tipAmount.toFixed(2);
    totalAmountSpan.textContent = totalAmount.toFixed(2);
}